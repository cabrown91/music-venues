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

// get all the venues


var venuesList = [
  {name: "Fox Theater",
  address: "1807 Telegraph Ave, Oakland, CA 94612",
  website: "http://www.apeconcerts.com/venues/fox-theater-oakland/",
  image: "https://resize.rbl.ms/simage/https%3A%2F%2Fassets.rbl.ms%2F5501727%2F980x.jpg/2000,2000/jUdFKqL6Ake8Kqoy/img.jpg"
},
{
  name: "Billy Graham Civic Auditorium",
  address: "99 Grove St, San Francisco, CA 94102",
  website: "http://www.billgrahamcivicauditorium.com/",
  image: "http://www.inetours.com/Pages/images/Civic-Center/Cvic-Auditorium_9865.jpg"
},
{
  name: "The Fillmore",
  address: "1805 Geary Blvd, San Francisco, CA 94115",
  website: "http://thefillmore.com/",
  image: "http://www.sanfranciscodays.com/photos/large/the-fillmore.jpg"
},
{
  name: "Great American Music Hall",
  address: "859 O'Farrell St, San Francisco, CA 94109",
  website: "http://www.slimspresents.com/",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Great_American_Music_Hall_(April_1976).jpg"
},
{
  name: "The Independent",
  address: "628 Divisadero St, San Francisco, CA 94117",
  website: "http://www.theindependentsf.com/",
  image: "http://ww2.kqed.org/bayareabites/wp-content/uploads/sites/24/2013/12/indysf-guide1000.jpg"
},
{
  name: "Boom Boom Room",
  address: "1601 Fillmore St, San Francisco, CA 94115",
  website: "http://www.boomboomroom.com/tickets-schedule/",
  image: "http://img1.sunset.timeinc.net/sites/default/files/image/city-guides/san-francisco/sf-attractions-boom-boom-room-0209-x.jpg"
}
];


app.get('/api/venues', function (req, res) {
  res.json({venues: venuesList});
  // db.Book.find()
  // .populate('amenities')
  // .exec(function(err, venues) {
  //   if(err) { return console.log("index error!"); }
  //   res.json(venues);
  // });
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




app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
