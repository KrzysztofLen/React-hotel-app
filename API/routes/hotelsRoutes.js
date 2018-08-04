const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const Hotel = require('../models/hotel');

// Storage image file
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, files, cb) {
		cb(null, new Date().toISOString().replace(/:/g, '-') + files.originalname);
	}
});

const upload = multer({storage: storage});

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

module.exports = (app) => {
	/**
	 * @type GET
	 * @description Get all hotel's
	 */
	app.get('/api/hotels', (req, res, next) => {
		Hotel.find()
		// Select what values show
			.select(properties)
			.exec()
			.then(docs => {
				// Create object hotels with hotels object inside
				const response = {
					hotels: docs.map(doc => {
						return {
							_id: doc._id,
							id: doc.id,
							hotel_name: doc.hotel_name,
							hotel_adress: doc.hotel_adress,
							hotel_city: doc.hotel_city,
							hotel_province: doc.hotel_province,
							hotel_price: doc.hotel_price,
							hotel_distance: doc.hotel_distance,
							hotel_description: doc.hotel_description,
							hotel_stars: doc.hotel_stars,
							hotel_rating: doc.hotel_rating,
							hotel_reviews: doc.hotel_reviews,
							is_new: doc.is_new,
							is_apartment: doc.is_apartment,
							facilities_restaurant: doc.facilities_restaurant,
							facilities_gym: doc.facilities_gym,
							facilities_wifi: doc.facilities_wifi,
							facilities_card_payment: doc.facilities_card_payment,
							facilities_game_room: doc.facilities_game_room,
							hotel_images: doc.hotel_images
						}
					})
				};
				res.status(200).json(response);
			}).catch(err => {
			console.log('\x1b[31m', '[Failure]', err);
			res.status(500).json(err);
		});
	});

// /**
//  * @type POST
//  * @description Send new hotel to DB
//  */
// router.post("/", upload.array('hotel_images'), (req, res, next) => {
// 	const imageFiles = [];
// 	req.files.forEach(file => {
// 		imageFiles.push(file.path);
// 	});
//
// 	const {id, hotel_name, hotel_adress, hotel_city, hotel_province, hotel_price, hotel_distance, hotel_description, hotel_stars, hotel_rating, hotel_reviews, is_new, is_apartment, facilities_restaurant, facilities_gym, facilities_wifi, facilities_card_payment, facilities_game_room} = req.body;
// 	// Object values
// 	const hotel = new Hotel({
// 		_id: new mongoose.Types.ObjectId(),
// 		id,
// 		hotel_name,
// 		hotel_adress,
// 		hotel_city,
// 		hotel_province,
// 		hotel_price,
// 		hotel_distance,
// 		hotel_description,
// 		hotel_stars,
// 		hotel_rating,
// 		hotel_reviews,
// 		is_new,
// 		is_apartment,
// 		facilities_restaurant,
// 		facilities_gym,
// 		facilities_wifi,
// 		facilities_card_payment,
// 		facilities_game_room,
// 		hotel_images: imageFiles
// 	});
//
// 	// Save hotel based on hotel schema object
// 	hotel.save().then(result => {
// 		res.status(201).json({
// 			// showing hotel schema in Postman
// 			message: "Handling POST request to /hotels",
// 			createdHotel: {
// 				_id: result._id,
// 				id: result.id,
// 				hotel_name: result.hotel_name,
// 				hotel_adress: result.hotel_adress,
// 				hotel_city: result.hotel_city,
// 				hotel_province: result.hotel_province,
// 				hotel_price: result.hotel_price,
// 				hotel_distance: result.hotel_distance,
// 				hotel_description: result.hotel_description,
// 				hotel_stars: result.hotel_stars,
// 				hotel_rating: result.hotel_rating,
// 				hotel_reviews: result.hotel_reviews,
// 				is_new: result.is_new,
// 				is_apartment: result.is_apartment,
// 				facilities_restaurant: result.facilities_restaurant,
// 				facilities_gym: result.facilities_gym,
// 				facilities_wifi: result.facilities_wifi,
// 				facilities_card_payment: result.facilities_card_payment,
// 				facilities_game_room: result.facilities_game_room,
// 				hotel_images: result.hotel_images
// 			}
// 		});
// 	}).catch(err => {
// 		console.log('\x1b[31m', '[Failure]', err);
// 		res.status(500).json(err);
// 	});
// });

	/**
	 * @type POST
	 * @description Send new hotel to DB
	 */
	app.post('/api/hotels', upload.array('hotel_images'), (req, res, next) => {
		const imageFiles = [];
		console.log('REQ FILES', req.files);
		req.files.forEach(file => {
			console.log(file);
			//imageFiles.push(file.path);
		});
		console.log(imageFiles);
		const {hotel_name, hotel_adress, hotel_city, hotel_province, hotel_price, hotel_distance, hotel_description,
			hotel_stars, hotel_rating, hotel_reviews, is_new, is_apartment, facilities_restaurant, facilities_gym,
			facilities_wifi, facilities_card_payment, facilities_game_room} = req.body;
		// Object values
		const hotel = new Hotel({
			_id: new mongoose.Types.ObjectId(),
			hotel_name,
			hotel_adress,
			hotel_city,
			hotel_province,
			hotel_price,
			hotel_distance,
			hotel_description,
			hotel_stars,
			hotel_rating,
			hotel_reviews,
			is_new,
			is_apartment,
			facilities_restaurant,
			facilities_gym,
			facilities_wifi,
			facilities_card_payment,
			facilities_game_room,
			hotel_images: imageFiles
		});

		// Save hotel based on hotel schema object
		hotel.save().then(result => {
			res.status(201).json({
				// showing hotel schema in Postman
				message: "Hotel properly added to DB",
				createdHotel: {
					_id: result._id,
					hotel_name: result.hotel_name,
					hotel_adress: result.hotel_adress,
					hotel_city: result.hotel_city,
					hotel_province: result.hotel_province,
					hotel_price: result.hotel_price,
					hotel_distance: result.hotel_distance,
					hotel_description: result.hotel_description,
					hotel_stars: result.hotel_stars,
					hotel_rating: result.hotel_rating,
					hotel_reviews: result.hotel_reviews,
					is_new: result.is_new,
					is_apartment: result.is_apartment,
					facilities_restaurant: result.facilities_restaurant,
					facilities_gym: result.facilities_gym,
					facilities_wifi: result.facilities_wifi,
					facilities_card_payment: result.facilities_card_payment,
					facilities_game_room: result.facilities_game_room,
					hotel_images: result.hotel_images
				}
			});
		}).catch(err => {
			console.log('\x1b[31m', '[Failure]', err);
			res.status(500).json(err);
		});
	});

	/**
	 * @type GET
	 * @description Get hotel by ID
	 */
	app.get('/api/hotels/:hotelsId', (req, res, next) => {
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
	});

	/**
	 * @type UPDATE/PATCH
	 * @description Update hotel by ID
	 * Schema to update
	 * [
		 {"propName": "hotel_adress", "value": "Kalifornia 92801, Stany Zjednoczone"},
		 {"propName": "hotel_city", "value": "Anaheim"}
	 *	 ]
	 */
	app.patch('/api/hotels/:hotelsId', (req, res, next) => {
		const id = req.params.hotelsId;
		const updateOps = {};
		for (const ops of req.body) {
			updateOps[ops.propName] = ops.value;
		}
		Hotel.update({_id: id}, {$set: updateOps}).exec().then(result => {
			res.status(200).json({
				message: 'Hotel properly updated'
			});
		}).catch(err => {
			console.log(err);
			res.status(500).json({
				error: error
			});
		});
	});

	/**
	 * @type DELETE
	 * @description Delete hotel by ID
	 */
	app.delete('/api/hotels/:hotelsId', (req, res, next) => {
		const id = req.params.hotelsId;
		Hotel.remove({
			_id: id
		}).exec().then(result => {
			res.status(200).json({
				message: 'Hotel properly deleted'
			});
		}).catch(err => {
			console.log('\x1b[31m', '[Failure]', err);
			res.status(500).json(err);
		});
	});
};