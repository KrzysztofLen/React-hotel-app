const multer = require("multer");
const uuidv4 = require("uuid/v4");
const {
	hotels_get,
	hotels_get_by_id,
	hotels_update,
	hotels_post,
	hotels_delete_by_id
} = require("./../controllers/hotelRoutes");

// // Storage image file
// const storage = multer.diskStorage({
// 	destination: function(req, file, cb) {
// 		cb(null, "./uploads/");
// 	},
// 	filename: function(req, files, cb) {
// 		cb(null, new Date().toISOString().replace(/:/g, "-") + files.originalname);
// 	}
// });

// const upload = multer({ storage: storage });

// const upload = multer({
// 	limits: {
// 		fileSize: 10000000
// 	},
// 	fileFilter(req, file, cb) {
// 		if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
// 			return cb(new Error("Please upload a Image"));
// 		}
// 		cb(undefined, true)
// 	}
// });

const DIR = "public/";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname
			.toLowerCase()
			.split(" ")
			.join("-");
		cb(null, uuidv4() + "-" + fileName);
	}
});

const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
		}
	}
});

module.exports = app => {
	/**
	 * @type GET
	 * @description Get all hotel's
	 */
	app.get("/api/hotels", hotels_get);

	/**
	 * @type POST
	 * @description Send new hotel to DB
	 */
	app.post("/api/hotels", upload.array("hotel_images", 6), hotels_post);

	/**
	 * @type GET
	 * @description Get hotel by ID
	 */
	app.get("/api/hotels/:hotelsId", hotels_get_by_id);

	/**
	 * @type UPDATE/PATCH
	 * @description Update hotel by ID
	 * Schema to update
	 * [
	 {"propName": "hotel_adress", "value": "Kalifornia 92801, Stany Zjednoczone"},
	 {"propName": "hotel_city", "value": "Anaheim"}
	 *     ]
	 */
	app.patch("/api/hotels/:hotelsId", hotels_update);

	/**
	 * @type DELETE
	 * @description Delete hotel by ID
	 */
	app.delete("/api/hotels/:hotelsId", hotels_delete_by_id);
};
