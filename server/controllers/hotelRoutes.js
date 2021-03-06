const mongoose = require("mongoose");
const Hotel = mongoose.model("Hotel");

const properties =
	"_id " +
	"id " +
	"hotel_name " +
	"hotel_adress " +
	"hotel_city " +
	"hotel_province " +
	"hotel_price " +
	"hotel_distance " +
	"hotel_description " +
	"hotel_stars " +
	"hotel_rating " +
	"hotel_reviews " +
	"is_new " +
	"is_apartment " +
	"facilities_restaurant " +
	"facilities_gym " +
	"facilities_wifi " +
	"facilities_card_payment " +
	"facilities_game_room " +
	"hotel_images";

/**
 * @type GET
 * @description Get all hotel's
 */
exports.hotels_get = (req, res, next) => {
	Hotel.find()
		// Select what values show
		.select(properties)
		.exec()
		.then(result =>
			res.status(200).json({
				hotels: result
			})
		)
		.catch(err => {
			console.log("\x1b[31m", "[Failure]", err);
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
		.then(result =>
			res.status(200).json({
				hotel: result
			})
		)
		.catch(err => {
			if (err.reason === undefined) {
				res.status(404).json({
					message: "No valid entry found for provided ID"
				});
			} else {
				console.log("\x1b[31m", "[Failure]", err);
				res.status(500).json({
					error: err
				});
			}
		});
};

/**
 * @type POST
 * @description Send new hotel to DB
 */
exports.hotels_post = (req, res, next) => {
	const reqFiles = [];
	//const url = req.protocol + "://" + req.get("host");
	const url = req.protocol + "://localhost:5000";

	for (var i = 0; i < req.files.length; i++) {
		reqFiles.push(url + "/public/" + req.files[i].filename);
	}

	console.log("server", process.env.PORT);

	const hotel = new Hotel({
		_id: new mongoose.Types.ObjectId(),
		hotel_name: req.body.hotel_name,
		hotel_adress: req.body.hotel_adress,
		hotel_city: req.body.hotel_city,
		hotel_province: req.body.hotel_province,
		hotel_price: req.body.hotel_price,
		hotel_distance: req.body.hotel_distance,
		hotel_description: req.body.hotel_description,
		hotel_stars: req.body.hotel_stars,
		hotel_rating: req.body.hotel_rating,
		hotel_reviews: req.body.hotel_reviews,
		is_new: is_new === "true" ? Date.now() : false,
		is_apartment: req.body.is_apartment,
		facilities_restaurant: req.body.facilities_restaurant,
		facilities_gym: req.body.facilities_gym,
		facilities_wifi: req.body.facilities_wifi,
		facilities_card_payment: req.body.facilities_card_payment,
		facilities_game_room: req.body.facilities_game_room,
		hotel_images: reqFiles
	});

	// Save hotel based on hotel schema object
	hotel
		.save()
		.then(result =>
			res.status(201).send({
				// showing hotel schema in Postman
				message: "Hotel properly added to DB",
				createdHotel: result
			})
		)
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

/**
 * @type UPDATE/PATCH
 * @description Update hotel by ID
 * Schema to update
 * [
 {"propName": "hotel_adress", "value": "Kalifornia 92801, Stany Zjednoczone"},
 {"propName": "hotel_city", "value": "Anaheim"}
 *     ]
 */
exports.hotels_update = (req, res, next) => {
	const id = req.params.hotelsId;
	const updateOps = {};
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value;
	}
	Hotel.update({ _id: id }, { $set: updateOps })
		.exec()
		.then(result =>
			res.status(200).json({
				message: "Hotel properly updated"
			})
		)
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

/**
 * @type DELETE
 * @description Delete hotel by ID
 */
exports.hotels_delete_by_id = (req, res, next) => {
	const id = req.params.hotelsId;

	Hotel.remove({
		_id: id
	})
		.exec()
		.then(result =>
			res.status(200).json({
				message: "Hotel properly deleted"
			})
		)
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};
