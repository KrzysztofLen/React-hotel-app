const mongoose = require('mongoose');
const LocalAuthenticateModel = mongoose.model('localAuthenticate');
const jwt = require('jwt-simple');
const config = require('./../config/dev');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({
		sub: user.id,
		iat: timestamp
	}, config.JWT_SECRET);
}

exports.signin = function(req, res, next) {
	// User has already had their email and password auth'd
	// We just need give them a token
	const userInfo = {
		username: req.user,
		token: tokenForUser(req.user)
	};
	res.status(200).send({
		message: "Welcome, loggin successful",
		status: 200,
		userInfo
	});
};

exports.signup = function (req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

	// See if the given user with email exists
	LocalAuthenticateModel.findOne({email: email}, function (err, existingUser) {
		if(err) {
			return next(err);
		}

		// If a user with email does exist, return error
		if (existingUser) {
			return res.status(422).send({
				message: "Email is in use"
			})
		}

		// If the user with email does NOT exist, create and save user record
		const user = new LocalAuthenticateModel({
			email: email,
			password: password
		});

		user.save(function (err) {
			if (err) {
				return next(err);
			}

			// Respond to request indicating the user was created
			res.json({
				message: 'User successful saved',
				token: tokenForUser(user)
			});
		});
	});
};