const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const chalk = require('./API/chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');
const keys = require('./API/config/keys');
const PORT = process.env.PORT || 5000;

// MODELS ##############################################################################################################
require('./API/models/Users');
require('./API/models/hotel');
require('./API/models/authenticate');

// SERVICES ############################################################################################################
require('./API/services/passport')(passport); // pass passport for configuration

// CONFIGURATION #######################################################################################################
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI); // connect to our database

// set up our express application ######################################################################################
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES ##############################################################################################################
require('./API/routes/hotelsRoutes')(app);
require('./API/routes/billingRoutes')(app);
require('./API/routes/countRoutes')(app);
require('./API/routes/topRoutes')(app);
require('./API/routes/authRoutes')(app);
require('./API/routes/userRoutes')(app);

//#TODO on heroku is development so app doesn't showing
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// MIDDLEWARES #########################################################################################################
require('./API/middlewares/serverLog.js')(app);

// LAUNCH ##############################################################################################################
app.listen(PORT, () => {
	console.log(chalk.info(`==================Example app listening on port ${PORT}!==================`));
});

module.exports = app;