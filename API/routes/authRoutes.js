const passport = require("passport");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const pick = require('lodash.pick');

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

	app.post("/api/signup", (req, res) => {
		// Check if user email is already taken
		const body = pick(req.body, ['email']);

		Authenticate.findByCredential(req.body.email)
			.then(respond => {
				bcrypt.hash(req.body.password, 10, (err, hash) => {
					if (err) {
						return res.status(500).json({
							error: err
						});
					} else {
						// Save user with hashed password
						const user = new Authenticate({
							_id: new mongoose.Types.ObjectId(),
							email: req.body.email,
							password: hash
						});
						user.save().then(result => {
							res.status(201).json({
								message: "User properly created",
								user: result
							})
						}).catch(err => {
							res.status(500).json({
								error: err
							});
						});
					}
				});
			})
			.catch(err => {
				res.status(400).send(err);
			});

		// Authenticate.find({email: req.body.email}).then(email => {
		// 	console.log(email);
		// 	if (email.length >= 1) {
		// 		return res.status(409).json({
		// 			message: "Email exist!!"
		// 		});
		// 	} else {
		// 		// Hash password
		// 		bcrypt.hash(req.body.password, 10, (err, hash) => {
		// 			if (err) {
		// 				return res.status(500).json({
		// 					error: err
		// 				});
		// 			} else {
		// 				// Save user with hashed password
		// 				const user = new Authenticate({
		// 					_id: new mongoose.Types.ObjectId(),
		// 					email: req.body.email,
		// 					password: hash
		// 				});
		// 				user.save().then(result => {
		// 					res.status(201).json({
		// 						message: "User properly created",
		// 						user: result
		// 					})
		// 				}).catch(err => {
		// 					res.status(500).json({
		// 						error: err
		// 					});
		// 				});
		// 			}
		// 		});
		// 	}
		// })
	});

	app.post('/api/login', (req, res) => {
		Authenticate.find({email: req.body.email}).exec().then(user => {
			console.log(user);
			if (user.length < 1) {
				return res.status(401).json({
					message: 'Auth failed'
				});
			}
			bcrypt.compare(req.body.password, user[0].password, (err, result) => {
				if (err) {
					return res.status(401).json({
						message: 'Auth failed'
					});
				}
				if (result) {
					return res.status(200).json({
						message: 'Auth successful'
					});
				}
				return res.status(401).json({
					message: 'Auth failed'
				});
			})
		}).catch(err => console.log(err));
	});

	app.get('/api/users', (req, res, next) => {
		Authenticate.find({local: {email: "test123@example.com"}})
		// Select what values show
			.exec()
			.then(docs => {
				// Create object hotels with hotels object inside
				res.status(200).json(docs);
			}).catch(err => {
			console.log('\x1b[31m', '[Failure]', err);
			res.status(500).json(err);
		});
	});
};
