// index.js - purpose and description here
// Author: Logan de Vries
// Created: 29 April

// Define Variables

$(document).ready(function() {
  // ...

  // Click event for the search button
  $('#search-button').on('click', function() {
    var apiKey = '7d06d4f6';
    var movieTitle = $('#movie-input').val(); // Get the movie title from the input field

    var apiUrl = 'http://www.omdbapi.com/?apikey=' + apiKey + '&t=' + encodeURIComponent(movieTitle);

    $.ajax({
      url: apiUrl,
      method: 'GET',
      success: function(response) {
        // Handle the response data
        console.log(response);
        $('#search-movie').html('<h2>' + response.Title + '</h2><p>' + response.Plot + '</p>');
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  });

});

  // Click event for the image buttons
  $('#mini .image-button').on('click', function() {
    $(this).toggleClass('clicked');
    $(this).find('.description').toggle();
  });
