const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Hotel = require('../models/hotel');

/**
 * @type GET
 * @description Get all hotel's
 */
router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Get all hotels'
	}).catch(err => {
		console.log('\x1b[31m', '[Failure]', err);
		res.status(500).json(err);
	});
});

/**
 * @type POST
 * @description Send new hotel to DB
 */
router.post('/', (req, res, next) => {
	// Object values
	const hotel = new Hotel({
		_id: new mongoose.Types.ObjectId(),
		hotel_name: req.body.hotel_name,
		description: req.body.description,
		hotel_stars: req.body.hotel_stars,
		hotel_rating: req.body.hotel_rating
	});

	// Save hotel based on hotel schema object
	hotel.save().then(result => {
		res.status(201).json({
			// showing hotel schema in Postman
			message: "Handling POST request to /hotels",
			createdHotel: {
				_id: result._id,
				hotel_name: result.hotel_name,
				description: result.description,
				hotel_stars: result.hotel_stars,
				hotel_rating: result.hotel_rating
			}
		});
	}).catch(err => {
		console.log('\x1b[31m', '[Failure]', err);
		res.status(500).json(err);
	});
});


module.exports = router;