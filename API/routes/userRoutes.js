const mongoose = require('mongoose');
const Authenticate = mongoose.model('authenticate');
const chalk = require('./../chalk');
const passport = require('passport');
require('./../services/passport')(passport);

const {users_get} = require("../controllers/authRoutes");

module.exports = (app) => {
	app.post('/api/signup', (req, res) => {
		console.log(chalk.info('*** user signup ***'));
		req.session.username = req.body.username;

		const {username, password} = req.body;

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
	});

	app.post('/api/login', (req, res, next) => {
			console.log('routes/user.js, login, req.body: ');
			console.log(req.body);
			next();
		}, passport.authenticate('local'),
		(req, res) => {
			console.log('logged in', req.user);
			const userInfo = {
				username: req.user.username
			};
			res.send(userInfo);
		});

	app.get('/api/user', (req, res, next) => {
		console.log('===== user!!======');
		console.log(req.user);
		if (req.user) {
			res.json({ user: req.user });
		} else {
			res.json({ user: null });
		}
	});

	app.get('/api/users', users_get);
};