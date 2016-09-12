var db = require("./models");

var venuesList = [
  {
    name: "The Regency Ballroom",
    address: "1290 Sutter St, San Francisco, CA 94109",
    website: "http://www.theregencyballroom.com/",
    image: "https://pbs.twimg.com/profile_images/941986691/regency.jpg",
    comments: [{
      name: "Andrew C.",
      comment: "The venue is great. I can always find parking, and the setting is very intimate."
    },
  {
    name: "Alicia B.",
    comment: "I hate this venue. The tickets are pricey and it's standing room only."
  }
    ]
  },
  {
    name: "Boom Boom Room",
    address: "1601 Fillmore St, San Francisco, CA 94115",
    website: "http://www.boomboomroom.com/tickets-schedule/",
    image: "http://img1.sunset.timeinc.net/sites/default/files/image/city-guides/san-francisco/sf-attractions-boom-boom-room-0209-x.jpg"
  },
  {
    name: "Fox Theater",
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
  }
];

db.Venue.remove({}, function(err, venues){

  db.Venue.create(venuesList, function(err, venues){
    if(err) { return console.log('ERROR', err); }
    console.log("all venues:", venues);
    console.log("created", venues.length, "venues");
    process.exit();
  });
});
