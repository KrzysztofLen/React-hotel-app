const multer = require('multer');
const {hotels_get, hotels_get_by_id, hotels_update, hotels_post, hotels_delete_by_id} = require("./../controllers/hotelRoutes");

// Storage image file
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log("$$$$$CB", cb);
		cb(null, './uploads/');
	},
	filename: function (req, files, cb) {
		console.log("$$$$$", files);
		cb(null, new Date().toISOString().replace(/:/g, '-') + files.originalname);
	}
});

const upload = multer({storage: storage});

module.exports = (app) => {
	/**
	 * @type GET
	 * @description Get all hotel's
	 */
	app.get('/api/hotels', hotels_get);

	/**
	 * @type POST
	 * @description Send new hotel to DB
	 */
	app.post('/api/hotels', upload.array("hotel_images", 12), hotels_post);

	/**
	 * @type GET
	 * @description Get hotel by ID
	 */
	app.get('/api/hotels/:hotelsId', hotels_get_by_id);

	/**
	 * @type UPDATE/PATCH
	 * @description Update hotel by ID
	 * Schema to update
	 * [
	 {"propName": "hotel_adress", "value": "Kalifornia 92801, Stany Zjednoczone"},
	 {"propName": "hotel_city", "value": "Anaheim"}
	 *     ]
	 */
	app.patch('/api/hotels/:hotelsId', hotels_update);

	/**
	 * @type DELETE
	 * @description Delete hotel by ID
	 */
	app.delete('/api/hotels/:hotelsId', hotels_delete_by_id);
};