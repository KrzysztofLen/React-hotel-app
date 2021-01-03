const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	name: String,
	emails: Array,
	photos: Array
});

mongoose.model("users", userSchema);
