var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models');


// serves static files in public directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

//sets the root route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

var controllers = require('./controllers');
// get all the venues


app.get('/api', controllers.venues.index);


app.get('/api', controllers.api.index);
// get all the venues
app.get('/api/venues', controllers.venues.index);
//create a new venue
app.post('/api/venues',controllers.venues.create);
//delete a venue
app.delete('/api/venues/:venuesId', controllers.venues.destroy);
//get one venue
app.get('/api/venues/:venuesId', controllers.venues.show);
//add comments to a venue
app.put('/api/venues/:venuesId/comments', controllers.venueComments.create);


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
