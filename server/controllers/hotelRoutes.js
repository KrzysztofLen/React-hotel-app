const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

const properties = '_id ' +
	'id ' +
	'hotel_name ' +
	'hotel_adress ' +
	'hotel_city ' +
	'hotel_province ' +
	'hotel_price ' +
	'hotel_distance ' +
	'hotel_description ' +
	'hotel_stars ' +
	'hotel_rating ' +
	'hotel_reviews ' +
	'is_new ' +
	'is_apartment ' +
	'facilities_restaurant ' +
	'facilities_gym ' +
	'facilities_wifi ' +
	'facilities_card_payment ' +
	'facilities_game_room ' +
	'hotel_images';

/**
 * @type GET
 * @description Get all hotel's
 */
exports.hotels_get = (req, res, next) => {
	Hotel.find()
	// Select what values show
		.select(properties)
		.exec()
		.then(docs => res.status(200).json({
			hotels: docs
		})).catch(err => {
		console.log('\x1b[31m', '[Failure]', err);
		res.status(500).json(err);
	});
};

/**
 * @type GET
 * @description Get hotel by ID
 */
exports.hotels_get_by_id = (req, res, next) => {
	const id = req.params.hotelsId;

	Hotel.findById(id)
	// Select which property show
		.select(properties)
		.exec()
		.then(doc => {
			res.status(200).json(doc);
		}).catch(err => {
		if (err.reason === undefined) {
			res.status(404).json({
				message: "No valid entry found for provided ID"
			});
		} else {
			console.log('\x1b[31m', '[Failure]', err);
			res.status(500).json(err);
		}
	});
};