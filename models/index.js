var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/music-venues" );

var Venue = require('./venues');

module.exports.Venue = Venue;
