const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// load up the user model
const User = mongoose.model('users');

module.exports = (passport) => {
	passport.serializeUser((user, done) => {
		console.log('This is user: ', user);
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id).then(user => {
			done(null, user);
		});
	});

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


