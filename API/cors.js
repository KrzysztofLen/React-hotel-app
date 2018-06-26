module.exports = function (req, res, next) {
	const originWhitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://react-hotel-app.herokuapp.com/'];

	let origin = req.headers.origin;

	if (originWhitelist.indexOf(origin) > -1) {
		res.header('Access-Control-Allow-Origin', origin);
	}
	// CORS headers
	res.header("Access-Control-Allow-Origin", "YOUR_URL"); // restrict it to the required domain
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	// Set custom headers for CORS
	res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}

	return next();
};

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