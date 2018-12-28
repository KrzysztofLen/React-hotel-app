const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');
const chalk = require("../chalk");

exports.count_routes_get = (req, res, next) => {
	Hotel.find()
		.count()
		.then(count => {
			res.status(200).json({count});
			console.log(chalk.success(`[Success get data /count] Count: ${count}`));
		})
		.catch(err => {
			console.log(chalk.error("[Failure]", err));
			res.status(500).json(err);
		});
};