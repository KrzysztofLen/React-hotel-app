const mongoose = require('mongoose');
const Authenticate = mongoose.model('authenticate');
const pick = require('lodash.pick');
const jwt = require('jsonwebtoken');
const keys = require('../../API/config/keys');
const bcrypt = require("bcryptjs");

module.exports = (app) => {
	app.post('/api/signup', (req, res) => {
		console.log('user signup');

		const {username, password} = req.body

		// ADD VALIDATION
		Authenticate.findOne({username: username}, (err, user) => {
			if (err) {
				console.log('userRoutes.js post error: ', err);
			} else if (user) {
				res.json({
					error: `Sorry, already a user with the username: ${username}`
				})
			} else {
				const newUser = new Authenticate({
					username: username,
					password: password
				});

				newUser.save().then(response => {
					res.status(201).send({
						message: "User properly added to DB",
						response
					})
				}).catch(err => {
					console.log('\x1b[31m', '[Failure]', err);
					res.status(500).json(err);
				});
			}
		})
	})
};