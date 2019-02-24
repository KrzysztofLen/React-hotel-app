const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

/**
 * @type GET
 * @description GET top 15 hotel by
 */
module.exports = app => {
	app.get("/top", (req, res, next) => {
		Hotel.find()
		// Select what values show
			.select()
			.exec()
			.then(result => {
				const top = [];

				result.map(doc => {
					if (doc.hotel_rating >= 8) {
						console.log(doc.hotel_name)
						const topHotels = {
							_id: doc._id,
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
						};
						top.push(topHotels);
					}
				});
				top.length = 15;
				console.log(top.slice(1,15))
				res.status(200).json(top);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
	});
};
