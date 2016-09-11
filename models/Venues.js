var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VenueSchema = new Schema({
   name: String,
   address: String,
   website: String,
   image: String,
   comments: [{
     name: String,
     comment: String
 }]
});

 var Venue = mongoose.model('Venue', VenueSchema);

 module.exports = Venue;
