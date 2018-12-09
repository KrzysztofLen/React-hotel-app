const LocalAuthenticateController = require('./../controllers/localAuthenticateController');
const passportService = require('./../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = (app) => {
	app.get('/api/test', requireAuth, function (req, res) {
		res.send({
			message: 'Hi there'
		});
	});
	app.post('/api/signin', requireSignIn, LocalAuthenticateController.signin);
	app.post('/api/signup', LocalAuthenticateController.signup);
};