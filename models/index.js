var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/music-venues");

var Venue = require('./venues');
var Amenities = require('.amenities');

module.exports.Venue = Venue;
module.exports.Amenities = Amenities;
