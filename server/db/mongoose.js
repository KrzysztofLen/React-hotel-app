const mongoose = require("mongoose");
const keys = require("./../config/keys");

// CONFIGURATION #######################################################################################################
mongoose.Promise = global.Promise;

mongoose.connect(keys.MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true
});

mongoose.connection.on("connected", () => {
	console.log("============= Connected to Mongo instance =============");
});

mongoose.connection.on("error", error => {
	console.log(
		"============= Error connecting to Mongo instance =============",
		error
	);
});
