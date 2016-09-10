$(document).ready(function(){
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/api/venues',
    success: renderVenues
  });

function renderVenues(venues) {
  var source = $('#venues-template').html(),
      template = Handlebars.compile(source);
      $venues = $('#venues');

  var venuesHtml = template({ venues: venues });
  $venues.append(venuesHtml);
}
  renderVenues();


$('#venues').on('click', '.delete-btn', handleDeleteVenue);

function handleDeleteVenue(e) {
  var venueId = $(this).parents('.venue').data('venue-id');
  console.log('someone wants to delete venue', venueId);
  $.ajax({
    url: '/api/venues/' + venueId,
    method: 'DELETE',
    success: handleDeleteVenueSuccess,
    error: handleDeleteVenueError
  });
}

function handleDeleteVenueSuccess(data){
console.log(data);
var deletedVenueId = data._id;
console.log('removing the following venue from the page:', deletedVenueId);
$('data-venue-id=' + deletedVenueId).remove();
}

function handleDeleteVenueError(err) {
  console.log('ERROR', err);
}













});
