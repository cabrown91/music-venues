var db = require('../models');


function index(req, res) {
  db.Venue.find({}, function(err, allVenues) {
    res.json(allVenues);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.Venue.create(req.body, function(err, venue) {
    if (err) { console.log('error', err); }
    console.log(venue);
    res.json(venue);
  });
}

function show(req, res) {
  db.Venue.findById(req.params.venueId, function(err, foundVenue) {
    if(err) { console.log('venuesController.show error', err); }
    console.log('venuesController.show responding with', foundVenue);
    res.json(foundVenue);
  });
}

// function destroy(req, res) {
//   db.Venue.findOneAndRemove({ _id: req.params.venueId }, function(err, foundVenue){
//     // note you could send just send 204, but we're sending 200 and the deleted entity
//     res.json(foundVenue);
//   });
// }




module.exports = {
  index: index,
  create: create,
  show: show,
  // destroy: destroy,
  // update: update
};
