var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/music-venue-app");


var Venue = require('./venues');

module.exports.Venue = Venue;
