
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
      $venues.prepend(venuesHtml);
    }
      renderVenues();


    $('#form-btn').on('click', function(e) {
      e.preventDefault();

      var nameData= $('#nameData');
      var addressData = $('#addressData');
      var websiteData = $('#websiteData');
      var imageData = $('#imageData');

      $.ajax({
        method: 'POST',
        url: '/api/venues',
        data:
          {name: nameData.val(), address: addressData.val(), website: websiteData.val(), image: imageData.val()},
        success: renderVenues
      });
      window.location.reload();
    });

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
