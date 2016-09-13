var db = require('../models');

// POST '/api/venues/:venuesId/'

function create(req, res) {
  db.Venue.findById({ _id: req.params.venuesId }, function(err, foundVenue){
    console.log(req.body);

    var newComment = new db.Venue(req.body);
    foundVenue.comments.push({name : req.body.name, comment: req.body.comment});
    foundVenue.save(function(err, savedComment){
      console.log('error', err);
      console.log('new comment created: ', savedComment);
      res.json(newComment);
    });
  });
}

module.exports = {
  create: create
};
