var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VenueSchema = new Schema({
   name: String,
   address: String,
   website: String,
   image: String,
   amenities: {
     type: Schema.Types.ObjectId,
     ref: 'Amenities'
   }
});

 var Venue = mongoose.model('Venue', VenueSchema);

 module.exports = Venue;
