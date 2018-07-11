const passport = require('passport');

module.exports = (app) => {
	//#TODO Make again auth google routh
	// app.get('/auth/google', passport.authenticate('google', {
	// 		scope: ['profile', 'email']
	// 	})
	// );

	app.get('/auth/test', (req,res) => {
		res.send({
			message: 'Hello'
		})
	});

	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		res.redirect('/');
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};