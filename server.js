var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./models');


var app = express();

// serves static files in public directory


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

//sets the root route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

var controllers = require('./controllers');

app.get('/api', controllers.api.index);
// get all the venues
app.get('/api/venues', controllers.venues.index);

app.post('/api/venues',controllers.venues.create);

// app.get('/api/venues/:venuesId', controllers.venues.show);
// app.post('/api/amenitites', controllers.amenities.create);

//// creates new venue thru form





app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
