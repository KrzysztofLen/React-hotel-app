const passport = require('passport');
const LocalStrategy = require('./localStrategy[OLD]');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const chalk = require('./../chalk');

passport.serializeUser((user, done) => {
	console.log(chalk.info('*** serializeUser called, user: '));
	console.log(user);  // the whole raw user object!
	console.log('---------');
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		console.log(chalk.success('*** Deserialize user, user:'));
		console.log(user);
		console.log('--------------');
		done(null, user);
	});
});
//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;