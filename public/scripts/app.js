function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 13,
    mapTypeId: 'roadmap'
  });
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    if (places.length === 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

function getVenues() {
  $.ajax({
    method: 'GET',
    url: '/api/venues',
    success: renderVenues
  });
}

function renderVenues(venues) {
  var source = $('#venues-template').html(),
      template = Handlebars.compile(source);
      $venues = $('#venues');

  var venuesHtml = template({ venues: venues });
  $venues.prepend(venuesHtml);
}


$(document).ready(function(){
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/venues',
    success: renderVenues
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

    $( '#newVenueForm' ).each(function(){
    this.reset();
    window.location.reload();
});
  });
  

  $('#venues').on('click', '.comment-btn', commentBtnClick);

  function commentBtnClick(e){
    $('#comment-section').show();
    $('.comment-btn').hide();
    $('.delete-btn').hide();
    $('.edit-btn').hide();
  }

  $('#venues').on('click', '.post-btn', handleComment);

  function handleComment() {
    var venueId = $(this).parents('.venue').data('venue-id');
    var comment = $('#body');
    var name = $('#title');
    $.ajax({
      url: '/api/venues/' + venueId + '/comments',
      method: 'PUT',
      data: {name: name.val(), comment: comment.val() },
      success: handleCommentSuccess,
      error: handleCommentError
    });

    function handleCommentSuccess(comment) {
      console.log('The comment:', comment, 'was created!');
      // re-render whole page to maintain state
      getVenues();
      $('#comment-section').hide();
      $('.delete-btn').show();
      $('edit-btn').show();
      $('.comment-btn').show();
    }
    handleCommentSuccess();

    function handleCommentError(err) {
      console.log("The comment couldn't post:", err);
    }

  }
});
