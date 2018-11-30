const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

const {count_routes_get} = require("./../controllers/countRoutes");

/**
 * @type GET
 * @description GET number of all hotels
 */
module.exports = app => {
	app.get("/api/count", count_routes_get);
};
