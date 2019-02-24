const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

exports.count_routes_get = (req, res, next) => {
	Hotel.find()
		.count()
		.then(result => res.status(200).json({
			result,
			message: `[Success get data /count] Count: ${result}`
		})).catch(err => {
			res.status(500).json({
				error: err
			});
		});
};