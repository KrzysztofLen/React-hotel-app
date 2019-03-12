const mongoose = require('mongoose');
const keys = require('./../config/keys');

// CONFIGURATION #######################################################################################################
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI); // connect to our database