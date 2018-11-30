const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const authenticateSchema = new Schema({
	username: {
		type: String,
		isRequired: true,
		unique: false
	},
	password: {
		type: String,
		isRequired: true,
		unique: false
	}
});

authenticateSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};

// Define pre hooks for the save method
authenticateSchema.pre('save', function (next) {
	if(!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next();
	} else {
		console.log('models/user.js hashPassword in pre save');
		this.password = this.hashPassword(this.password);
		next();
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

mongoose.model('authenticate', authenticateSchema);