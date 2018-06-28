const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	hotel_name: {
		type: String,
		required: true
	},
	hotel_adress: {
		type: String,
		required: true
	},
	hotel_city: {
		type: String,
		required: true
	},
	hotel_province: {
		type: String,
		required: true
	},
	hotel_price: {
		type: Number,
		required: true
	},
	hotel_distance: {
		type: Number,
		required: true
	},
	hotel_description: {
		type: String,
		required: true
	},
	hotel_stars: {
		type: Number,
		required: true
	},
	hotel_rating: {
		type: Number,
		required: true
	},
	hotel_reviews: {
		type: Number,
		required: true
	},
	is_new: {
		type: Boolean,
		required: true
	},
	is_apartment: {
		type: Boolean,
		required: true
	},
	facilities_restaurant: {
		type: Boolean,
		required: true
	},
	facilities_gym: {
		type: Boolean,
		required: true
	},
	facilities_wifi: {
		type: Boolean,
		required: true
	},
	facilities_card_payment: {
		type: Boolean,
		required: true
	},
	facilities_game_room: {
		type: Boolean,
		required: true
	},
	hotel_images: {
		type: Array
	}
});

module.exports = mongoose.model('Hotel', hotelSchema);