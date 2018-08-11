const mongoose = require('mongoose');
const {Schema} = mongoose;

const authenticateSchema = new Schema({
	email: {
		type: String,
		isRequired: true
	},
	password: {
		type: String,
		isRequired: true
	}
});

authenticateSchema.statics.findByCredential = function(email) {
	const User = this;

	return User.find({email}).then(email => {
		console.log(email);
		if (email.length >= 1) {
			return Promise.reject({
				message: "Email exist!!"
			});
		}
	});
};

authenticateSchema.statics.hashPassword = function(password) {
	const User = this;

	console.log(password);
};

mongoose.model('authenticate', authenticateSchema);