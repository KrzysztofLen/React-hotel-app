const mongoose = require('mongoose');
const Authenticate = mongoose.model('authenticate');
const pick = require('lodash.pick');
const jwt = require('jsonwebtoken');
const keys = require('../../API/config/keys');
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
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
};

exports.login =  (req, res, next) => {
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
				const token = jwt.sign({
					email: user[0].email,
					userId: user[0]._id
				}, keys.JWT_SECRET, {
					expiresIn: '1h'
				});
				return res.status(200).json({
					message: 'Auth successful',
					token: token
				});
			}
			return res.status(401).json({
				message: 'Auth failed'
			});
		})
	}).catch(err => console.log(err));
};

exports.users_get = (req, res, next) => {
	console.log(res);
	Authenticate.find()
	// Select what values show
		.exec()
		.then(docs => {
			// Create object hotels with hotels object inside
			res.status(200).json(docs);
		}).catch(err => {
		console.log('\x1b[31m', '[Failure]', err);
		res.status(500).json(err);
	});
};