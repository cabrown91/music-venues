// var $venues;
//

// now works thru server, no need for source code. have not committed since making changes

$(document).ready(function(){
  console.log('app.js loaded!');


    $.ajax({
      method: 'GET',
      url: '/api/venues',
      success: renderVenues
    });

    $('#newVenueForm').on('submit', function(e) {
      e.preventDefault();
      // var formData = $(this).serialize();
      console.log('formData', formData);
      $.ajax({
        method: 'POST',
        url: '/api/venues',
        data: $(this).serializeArray(),
        sucess: renderVenues,
      });
      $(this).trigger("reset");
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


  // $.post('/api/venues', formData, function(venue) {
  //   console.log('venue after POST', venue);
  //   renderVenue(venue);  //render the server's response
