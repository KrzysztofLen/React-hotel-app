const proxy = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(proxy('/auth/google',
		{target: 'http://localhost:5000/'}
	), proxy('/api/*',
		{target: 'http://localhost:5000/'}
	), proxy('/uploads/*',
		{target: 'http://localhost:5000/'}
	));
};