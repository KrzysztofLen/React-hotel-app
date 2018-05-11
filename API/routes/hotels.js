const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Hotel = require('../models/hotel');

/**
 * @type GET
 * @description Get all hotel's
 */
router.get('/', (req, res, next) => {
	Hotel.find()
	// Select what values show
		.select('_id hotel_name hotel_adress.adress description hotel_stars hotel_rating')
		.exec()
		.then(docs => {
			// Create object hotels with hotels object inside
			const response = {
				hotels: docs.map(doc => {
					return {
						_id: doc._id,
						hotel_name: doc.hotel_name,
						hotel_adress: {
							adress: doc.hotel_adress.adress,
						},
						description: doc.description,
						hotel_stars: doc.hotel_stars,
						hotel_rating: doc.hotel_rating
					}
				})
			};
			res.status(200).json(response);
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
		hotel_adress: {
			adress: req.body.hotel_adress.adress,
		},
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
				hotel_adress: {
					adress: result.hotel_adress.adress,
				},
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