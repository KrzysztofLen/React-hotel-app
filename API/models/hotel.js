const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	hotel_name: {
		type: String,
		required: true
	},
	hotel_adress: {
		adress: {
			type: String,
			required: true
		},
		// city: {
		// 	type: String,
		// 	required: true
		// },
		// province: {
		// 	type: String,
		// 	required: true
		// },
		// distance: {
		// 	type: Number,
		// 	required: true
		// }
	},
	description: {
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
	opinions: {
		type: Number,
		required: true
	},
	is_new: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model('Hotel', hotelSchema);