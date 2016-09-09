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

  var $venueHtml = $('#venues-template').html(),
      venueTemplate = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/venues',
    success: renderVenues,
    error: renderError
  });
});

function renderVenues(venue) {
  console.log('rendering venue:', venue);

  var venueHtml = template(venue);
  $('#venues').append(venueHtml);
}

function renderError(err) {
  console.log('error', err);
}
