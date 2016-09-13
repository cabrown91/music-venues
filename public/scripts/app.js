// function definitions

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
  getVenues();

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

$('body').on('click', '.comment-btn', commentBtnClick);

function commentBtnClick(e){
  var venueId = $(this).data('venue-id');


  $(this).siblings('#comment-section').show();
  $(this).siblings('.comment-btn').hide();
  $(this).siblings('.delete-btn').hide();
  $(this).siblings('.edit-btn').hide();
}

$('body').on('click', '.post-btn', handleComment);
var $body = $('#body');
var $title = $('#title');

function handleComment(e) {
  var venueId = $(this).data('venue-id');
  var commentUrl = '/api/venues/' + venueId + '/comments';
  var venueCommentId = e.currentTarget.attributes[1].value;

  $.ajax({
    url: commentUrl,
    method: 'POST',
    data: $('#comment-section-' + venueCommentId).serialize() ,
    success: handleCommentSuccess,
    error: handleCommentError
  });

  function handleCommentSuccess(comment) {
    console.log('The comment:', comment, 'was created!');
    // re-render whole page to maintain state
    getVenues();
    
    $('.comment-section').hide();
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
