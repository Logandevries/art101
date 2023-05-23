// index.js - purpose and description here
// Author: Logan de Vries
// Created: 29 April

// Define Variables

$(document).ready(function() {
  // Add button to the Challenge section
  var challengeButton = $("<button>").text("Press Me");
  $("#challenge").append(challengeButton);

  // Add button to the Problems section
  var problemsButton = $("<button>").text("Press Me");
  $("#problems").append(problemsButton);

  // Add button to the Results section
  var resultsButton = $("<button>").text("Press Me");
  $("#results").append(resultsButton);

  // Click event for the buttons
  $("button").on("click", function() {
    var section = $(this).closest(".minor-section");
    section.find("div").toggleClass("special");
  });
});