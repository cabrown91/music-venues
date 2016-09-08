var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var AmenitiesSchema = new Schema ({
   general_admission: Boolean,
   food: Boolean,
   parking: Boolean
});

var Amenities = mongoose.model('Amenities', AmenitiesSchema);

module.exports = Amenities;
