const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

// Define our model
const localAuthenticateSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});

// On save Hook, encrypt password
localAuthenticateSchema.pre('save', function (next) {
	const user = this;
	const saltRounds = 10;

	bcrypt.genSalt(saltRounds, function(err, salt) {
		if(err) {
			return next(err);
		}

		//TODO refactor using schema methods => authenticate[OLD]
		bcrypt.hash(user.password, salt, function(err, hash) {
			if(err) {
				return next(err);
			}

			user.password = hash;
			next();
		});
	});
});

localAuthenticateSchema.methods.comparePassword = function (candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) {
			return callback(err);
		}

		callback(null, isMatch);
	})
};

// Create the model class
//const ModelClass = mongoose.model('localAuthenticate', localAuthenticateSchema);
mongoose.model('localAuthenticate', localAuthenticateSchema);

// Export the model
// module.exports = ModelClass;