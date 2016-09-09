var express = require('express');
  bodyParser = require('body-parser');
  db = require('./models');


var app = express();

// serves static files in public directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

//sets the root route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all the venues

app.get('/api/venues', function (req, res) {
  db.Book.find()
  .populate('amenities')
  .exec(function(err, venues) {
    if(err) { return console.log("index error!"); }
    res.json(venues);
  });
});

//// creates new venue thru form
app.post('api/venues', function(req, res) {
  var newVenue = new db.Venue({
    name: req.body.name,
    address: req.body.address,
    website: req.body.website,
    image: req.body.image,

  });
});
