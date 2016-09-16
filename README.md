# Music Venues App-Project 1

Check out our app on <a href="https://stark-tundra-16200.herokuapp.com/"> Heroku

## Objective
Our goal was to create a CRUD app to locate and build a directory of local SF/East Bay music venues. People that are new to the city often need word-of-mouth reference or a comprehensive guide to break through the mainstream, which is where our app comes into place!
The main focus/inspiration stemmed from the fact that "big room" venues (think Civic Center, SFJazz, etc) are the most-frequented and well-known, but there are unique atmospheres, amenities, and artists that can only be found at smaller neighborhood venues.
Smaller venues also provide more flexibility and spontaneity for artists in some circumstances which
allow for more engaging, unique performances.

## Technologies Used
The front end is comprised of:
JavaScript, jQuery, Ajax, HTML, CSS, SCSS, and built on the Foundation framework (css+sass).

Back end is comprised of:
Node.js, Express, MongoDB, and Mongoose.

We needed to install Compass as the SASS pre-compiler to get Foundation up and running, but we did not
put emphasis on utilizing the scss files. The main challenge was getting all of the new dependencies
set up correctly and dealing with the inherited styling patterns when aiming to modify
specific elements.

## User Stories <br>
You can learn more about our user stories on <a href="https://trello.com/b/7lwJetKR/project-1-crud-music-venues">Trello</a>.

As a user, I want to be able to comment on a venue.

As a user, I want to create (add) a new music venue

As a user, I want to be able to see (get) all the music venues in the "database"

As a user, I want to be able to see one music venue (find one)

As a user, I want to be able to edit a music venue



## Wireframe
Parallax, one-page app design. Created in Balsamiq

![screen shot 2016-09-08 at 12 17 03 pm](https://cloud.githubusercontent.com/assets/19937807/18363263/38ca2a52-75be-11e6-86f6-6f7a757bb8a4.png)

## Control Flow

We made a new branch for each respective feature we built out, and encountered minimal issues
with pulling, merging, and pushing our respective files. We had over 60 commits by EOD on 9/12/16.


## Code Snippets (Code We're Proud Of!)

```JavaScript
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
    $( '#newVenueForm' ).each(function(){
    this.reset();
    window.location.reload();
  });
    });
```
