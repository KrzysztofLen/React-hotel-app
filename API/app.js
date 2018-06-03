// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
// const app = express();
// const morgan = require('morgan');
// const keys = require('./config/keys');
//
// //######### MODELS #########
// require('./models/Users');
//
// //######### SERVICES #########
// require('./services/passport');
//
// //######### MONGODB CONNECT #########
// mongoose.connect('mongodb+srv://admin:admin@react-hotel-app-4z48b.mongodb.net/test');
//
// //######### ROUTES #########
// const hotelsRoutes = require('./routes/hotels');
// const countRoutes = require('./routes/count');
// const topRoutes = require('./routes/top');
// // require('./routes/authRoutes')(app);
//
// // Use routes
// app.use('/hotels', hotelsRoutes);
// app.use('/count', countRoutes);
// app.use('/top', topRoutes);
//
// app.use(morgan('dev'));
// app.use('/uploads', express.static('uploads'));
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.use(bodyParser.json());
// app.use(
// 	cookieSession({
// 		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
// 		keys: [keys.cookieKey]
// 	})
// );
//
// app.use(passport.initialize());
// app.use(passport.session());
//
// require('./routes/authRoutes')(app);
//
//
// //#TODO Error: Can't set headers after they are sent.
// // app.use((req, res, next) => {
// // 	res.header('Access-Control-Allow-Origin', '*');
// // 	res.header(
// // 		'Access-Control-Allow-Headers',
// // 		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
// // 	);
// // 	if (req.method === 'OPTIONS') {
// // 		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
// // 		return res.status(200).json({});
// // 	}
// // 	next();
// // });
//
// // app.use((req, res, next) => {
// // 	const error = new Error('Not found');
// // 	error.status = 404;
// // 	next(error);
// // });
// //
// // app.use((error, req, res, next) => {
// // 	res.status(error.status || 500);
// // 	res.json({
// // 		error: {
// // 			message: error.message
// // 		}
// // 	});
// // });
//
// module.exports = app;