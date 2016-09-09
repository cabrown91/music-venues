var $venues;
var template;
var venuesList = [];

venuesList.push({
  name: "Billy Graham Civic Auditorium",
  address: "99 Grove St, San Francisco, CA 94102",
  website: "http://www.billgrahamcivicauditorium.com/",
  image: "http://www.inetours.com/Pages/images/Civic-Center/Cvic-Auditorium_9865.jpg"
});
venuesList.push({
  name: "Billy Graham Civic Auditorium",
  address: "99 Grove St, San Francisco, CA 94102",
  website: "http://www.billgrahamcivicauditorium.com/",
  image: "http://www.inetours.com/Pages/images/Civic-Center/Cvic-Auditorium_9865.jpg"
});
venuesList.push({
  name: "Billy Graham Civic Auditorium",
  address: "99 Grove St, San Francisco, CA 94102",
  website: "http://www.billgrahamcivicauditorium.com/",
  image: "http://www.inetours.com/Pages/images/Civic-Center/Cvic-Auditorium_9865.jpg"
});
venuesList.push({
  name: "Billy Graham Civic Auditorium",
  address: "99 Grove St, San Francisco, CA 94102",
  website: "http://www.billgrahamcivicauditorium.com/",
  image: "http://www.inetours.com/Pages/images/Civic-Center/Cvic-Auditorium_9865.jpg"
});
venuesList.push({
  name: "Billy Graham Civic Auditorium",
  address: "99 Grove St, San Francisco, CA 94102",
  website: "http://www.billgrahamcivicauditorium.com/",
  image: "http://www.inetours.com/Pages/images/Civic-Center/Cvic-Auditorium_9865.jpg"
});
venuesList.push({
  name: "Billy Graham Civic Auditorium",
  address: "99 Grove St, San Francisco, CA 94102",
  website: "http://www.billgrahamcivicauditorium.com/",
  image: "http://www.inetours.com/Pages/images/Civic-Center/Cvic-Auditorium_9865.jpg"
});

$(document).ready(function(){
  console.log('app.js loaded!');
  $venues = $('#venues');

  var source = $('#venues-template').html(),
      template = Handlebars.compile(source);

  // $.ajax({
  //   method: 'GET',
  //   url: '/api/venues',
  //   success: renderVenues,
  //   error: renderError
  // });

function renderVenues() {
  var venuesHtml = template({ venues: venuesList });
  console.log(venuesHtml);
  $venues.append(venuesHtml);
}
renderVenues();

function renderError() {
  console.log("Sorry, that didn't work out!");
}

});
