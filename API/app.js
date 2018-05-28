const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//######### SERVICES #########
require('./services/passport');

//######### ROUTES #########
const hotelsRoutes = require('./routes/hotels');
const countRoutes = require('./routes/count');
const topRoutes = require('./routes/top');
require('./routes/authRoutes')(app);

// Use routes
app.use('/hotels', hotelsRoutes);
app.use('/count', countRoutes);
app.use('/top', topRoutes);

//######### MONGODB CONNECT #########
mongoose.connect('mongodb+srv://admin:admin@react-hotel-app-4z48b.mongodb.net/test');

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;