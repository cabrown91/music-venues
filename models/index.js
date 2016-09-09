var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/music-venues");

var Venue = require('./venues');

module.exports.Venue = Venue;
