const passport = require("passport");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const pick = require('lodash.pick');
const jwt = require('jsonwebtoken');
const keys = require('../../API/config/keys');
const {checkAuth} = require('./../middlewares/checkAuth');
const {signup, login, users_get} = require("./../controllers/authRoutes");

const User = mongoose.model('users');
const Authenticate = mongoose.model('authenticate');

module.exports = app => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/google/callback",
		passport.authenticate("google", {
			failureRedirect: "/"
		}),
		(req, res) => {
			res.redirect("/");
		}
	);

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
// LOCAL ##############################################################################################################
// 	app.post("/api/login", passport.authenticate("local-login", {
// 		successRedirect: '/',
// 		failureRedirect: '/api/auth/login'
// 	}), (req, res) => {
// 		res.redirect("/");
// 	});
//
// 	app.post("/api/signup", (req, res, next) => {
// 		console.log('server post username: ');
// 		console.log(req.body.username);
// 		res.end()
// 	});


// LOCAL ##############################################################################################################
	/**
	 * @type POST
	 * @description Save new user to DB
	 */
	// app.post("/api/signup", signup);

	/**
	 * @type POST
	 * @description Login user with credentials
	 */
	// app.post('/api/login', login);

	/**
	 * @type GET
	 * @description Get all users's
	 */
	app.get('/api/users', users_get);
};
