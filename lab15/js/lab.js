// index.js - purpose and description here
// Author: Logan de Vries
// Created: 31 June

// Define Variables

$(document).ready(function() {
  function getRandomChuckNorrisJoke() {
    $.ajax({
      url: "https://api.chucknorris.io/jokes/random",
      type: "GET",
      dataType: "json",
      success: function(data) {
        var joke = data.value;
        $("#output").html("<p>" + joke + "</p>");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
      }
    });
  }

  $("#activate").click(function() {
    getRandomChuckNorrisJoke();
  });
});