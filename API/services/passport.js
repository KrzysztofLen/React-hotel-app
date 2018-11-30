const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('./localStrategy');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const chalk = require('./../chalk');

const User = mongoose.model('users');
const Authenticate = mongoose.model('authenticate');

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
		console.log(chalk.info('*** serializeUser called, user: '));
		console.log(user);  // the whole raw user object!
		console.log('---------');
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		console.log(chalk.error('*** Deserialize user, user:', id));
		User.findById(id).then(user => {
			console.log(chalk.success('*** Deserialize user, user:'));
			console.log(user);
			console.log('--------------');
			done(null, user);
		});
	});
	//  Use Strategies
	passport.use(LocalStrategy);

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
};


