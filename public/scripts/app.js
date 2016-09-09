var $venues;
var template;
var venuesList = [];

venuesList.push({
  name: "Fox Theater",
  address: "1807 Telegraph Ave, Oakland, CA 94612",
  website: "http://www.apeconcerts.com/venues/fox-theater-oakland/",
  image: "https://resize.rbl.ms/simage/https%3A%2F%2Fassets.rbl.ms%2F5501727%2F980x.jpg/2000,2000/jUdFKqL6Ake8Kqoy/img.jpg"
});
venuesList.push({
  name: "Billy Graham Civic Auditorium",
  address: "99 Grove St, San Francisco, CA 94102",
  website: "http://www.billgrahamcivicauditorium.com/",
  image: "http://www.inetours.com/Pages/images/Civic-Center/Cvic-Auditorium_9865.jpg"
});
venuesList.push({
  name: "The Fillmore",
  address: "1805 Geary Blvd, San Francisco, CA 94115",
  website: "http://thefillmore.com/",
  image: "http://www.sanfranciscodays.com/photos/large/the-fillmore.jpg"
});
venuesList.push({
  name: "Great American Music Hall",
  address: "859 O'Farrell St, San Francisco, CA 94109",
  website: "http://www.slimspresents.com/",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Great_American_Music_Hall_(April_1976).jpg"
});
venuesList.push({
  name: "The Independent",
  address: "628 Divisadero St, San Francisco, CA 94117",
  website: "http://www.theindependentsf.com/",
  image: "http://ww2.kqed.org/bayareabites/wp-content/uploads/sites/24/2013/12/indysf-guide1000.jpg"
});
venuesList.push({
  name: "Boom Boom Room",
  address: "1601 Fillmore St, San Francisco, CA 94115",
  website: "http://www.boomboomroom.com/tickets-schedule/",
  image: "http://img1.sunset.timeinc.net/sites/default/files/image/city-guides/san-francisco/sf-attractions-boom-boom-room-0209-x.jpg"
});

$(document).ready(function(){
  console.log('app.js loaded!');
  $venues = $('#venues');

  var source = $('#venues-template').html(),
      template = Handlebars.compile(source);


function renderVenues() {
  var venuesHtml = template({ venues: venuesList });
  $venues.append(venuesHtml);
}
renderVenues();

function renderError() {
  console.log("Sorry, that didn't work out!");
}

$('.card').on('click', '.delete-btn', handleDeleteVenue);

function handleDeleteVenue(e) {
  var venueId = $(this).data('data-venue-id');
  console.log(venueId);

  $.ajax({
    url:'/api/albums/' + venueId,
    method: 'DELETE',
    success: handleDeleteVenueSuccess
  });

  function handleDeleteVenueSuccess(data) {
    var deletedVenueId = data._id;
    console.log('removng the following venue:', deletedVenueId);
    $('div[data-venue-id=' + deletedVenueId + ']');
  }
}








});
