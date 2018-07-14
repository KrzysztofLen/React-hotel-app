const fs = require('fs');

module.exports = (app) => {
	app.use((req, res, next) => {
		let now = new Date().toString();
		const log = `${now}: ${req.method} ${req.url}`;

		fs.appendFile('server.log', log + '\n', (err) => {
			if (err) {
				console.log('Unable to append to server.log');
			}
		});
		console.log(log);
		next();
	});
};