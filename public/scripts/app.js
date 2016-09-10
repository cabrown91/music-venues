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
  $.ajax({
    url: '/api/venues/' + venueId,
    method: 'DELETE',
    success: handleDeleteVenueSuccess,
    error: handleDeleteVenueError
  });
}

function handleDeleteVenueSuccess(data){
var deletedVenueId = data._id;
$('div[data-venue-id=' + deletedVenueId +']').remove();
}

function handleDeleteVenueError(err) {
  return 'Error deleting the venue:', err;
}













});
