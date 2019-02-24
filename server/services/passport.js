const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const LocalStrategy = require('./localStrategy');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const chalk = require('./../chalk');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const User = mongoose.model('users');
const LocalAuthenticateModel = mongoose.model('localAuthenticate');
//const Authenticate = mongoose.model('authenticate');

// Create local strategy
const localOption = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOption, function (email, password, done) {
	// Verify this username and password, call done with the user
	// if it is the correct email and password
	// otherwise, call done with false
	LocalAuthenticateModel.findOne({email: email}, function (err, user) {
		if(err) {
			return done(err);
		}

		if(!user) {
			return done(null, false);
		}

		// compare passwords - is password equal to user.password?
		user.comparePassword(password, function (err, isMatch) {
			if(err) {
				return done(err);
			}

			if(!isMatch) {
				return done(null, false);
			}

			return done(null, user);
		})
	});
});

// Set option for jwt
const jwtOption = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: keys.JWT_SECRET
};

// Create jwt strategy
const jwtLogin = new JwtStrategy(jwtOption, function (payload, done) {
	// See if the user id in the payload exists in our database
	// if it does, call 'done' with that other
	// otherwise, call done without user object
	LocalAuthenticateModel.findById(payload.sub, function (err, user) {
		if(err) {
			return done(err, false);
		}

		if(user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});

//===============//
module.exports = (passport) => {
	// passport.serializeUser((user, done) => {
	// 	console.log(chalk.info('*** serializeUser called, user: '));
	// 	console.log(user);  // the whole raw user object!
	// 	console.log('---------');
	// 	done(null, {_id: user._id});
	// });
	//
	// passport.deserializeUser((id, done) => {
	// 	console.log('DeserializeUser called');
	//
	// 	Authenticate.findOne({_id: id}, 'username', (err, user) => {
	// 		console.log(chalk.success('*** Deserialize user, user:'));
	// 		console.log(user);
	// 		console.log('--------------');
	// 		done(null, user);
	// 	});
	// });

	//  Use Strategies
	//passport.use(LocalStrategy);

	passport.serializeUser((user, done) => {
		// console.log(chalk.info('*** serializeUser called, user: '));
		// console.log(user);  // the whole raw user object!
		// console.log('---------');
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		//console.log(chalk.error('*** Deserialize user, user:', id));
		User.findById(id).then(user => {
			// console.log(chalk.success('*** Deserialize user, user:'));
			// console.log(user);
			// console.log('--------------');
			done(null, user);
		});
	});
	//  Use Strategies
	//passport.use(LocalStrategy);

	passport.use(new GoogleStrategy({
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({
				googleId: profile.id,
				name: profile.displayName
			});

			if (existingUser) {
				// we already have a record with the given profile Id
				done(null, existingUser);
			}

			// we dont't have a user record with this ID, make a new record
			const user = await new User({
				googleId: profile.id,
				name: profile.displayName
			}).save();
			done(null, user);
		})
	);

	// Tell passport to use this strategy
	passport.use(jwtLogin);
	passport.use(localLogin);
};


