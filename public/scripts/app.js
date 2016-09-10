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
});

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
