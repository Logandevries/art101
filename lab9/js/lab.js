// index.js - purpose and description here
// Author: Logan de Vries
// Created: 29 April

// Define Variables
var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML = "This is the first new element!";

var new2El = document.createElement("p");
new2El.innerHTML = "This is the second new element!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

outputEl.style.backgroundColor = "lightblue";
new1El.style.color = "red";




function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();




// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
