const LocalAuthenticateController = require('./../controllers/localAuthenticateController');
const passportService = require('./../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = (app) => {
	app.post('/api/signin', requireSignIn, LocalAuthenticateController.signin);
	app.post('/api/signup', LocalAuthenticateController.signup);
};