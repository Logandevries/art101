// index.js - purpose and description here
// Author: Logan de Vries
// Created: 21 may

// Define Variables



function fizzBuzzBoom(maxNums, factorobj) {
  for (var num = 0; num < maxNums; num++) {
    var outputStr = "";
    for (var factor in factorobj) {
      if (num % factor == 0) {
        outputStr += factorobj[factor];
      }
    }
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr);
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  console.log("max:", max);
  if (!max) {
    reportError("You must provide a maximum");
  }
});