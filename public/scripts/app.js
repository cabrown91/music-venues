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

      console.log(nameData, addressData, websiteData, imageData);
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
