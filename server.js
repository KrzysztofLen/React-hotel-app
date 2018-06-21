const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const chalk = require('./API/chalk');

//############ TEMP
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');
const keys = require('./API/config/keys');

//######### MODELS #########
require('./API/models/Users');

//######### SERVICES #########
require('./API/services/passport');

//######### MONGODB CONNECT #########
mongoose.connect(keys.mongoURI);

//######### ROUTES #########
const hotelsRoutes = require('./API/routes/hotels');
const countRoutes = require('./API/routes/count');
const topRoutes = require('./API/routes/top');
// require('./routes/authRoutes')(app);

// Use routes
app.use('/hotels', hotelsRoutes);
app.use('/count', countRoutes);
app.use('/top', topRoutes);

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./API/routes/authRoutes')(app);
require('./API/routes/billingRoutes')(app);
//############

//#TODO on heroku is development so app doesn't showing
// if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
// }

// // this array is used for identification of allowed origins in CORS
// const originWhitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://react-hotel-app.herokuapp.com/'];
// app.use((req, res, next) => {
// 	console.log('Server info: Request received');
//
// 	let origin = req.headers.origin;
//
// 	// only allow requests from origins that we trust
// 	if (originWhitelist.indexOf(origin) > -1) {
// 		res.setHeader('Access-Control-Allow-Origin', origin);
// 	}
//
// 	// only allow get requests, separate methods by comma e.g. 'GET, POST'
// 	res.setHeader('Access-Control-Allow-Methods', 'GET');
// 	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// 	res.setHeader('Access-Control-Allow-Credentials', true);
//
// 	// push through to the proper route
// 	next();
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(chalk.info(`==================Example app listening on port ${PORT}!==================`));
});

// const port = process.env.PORT || 5000;
// const server = http.createServer(app);
//
// server.listen(port);