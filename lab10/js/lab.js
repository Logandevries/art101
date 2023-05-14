// index.js - purpose and description here
// Author: Logan de Vries
// Created: 29 April

// Define Variables


function nameSort() {
  var userName = document.getElementById("user-name").value;
  //Split string to array
  var nameArray = userName.split('');
  //sort the array
  var nameArraySort = nameArray.sort();
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  return nameSorted;
}

function updateOutput() {
  const outputDiv = document.getElementById("output");
  const sortedValue = nameSort();
  outputDiv.innerHTML = sortedValue;
}

document.getElementById("my-button").addEventListener("click", updateOutput);


// output
document.writeln("Hello, I've fixed your name:  ", 
  sortUserName(), "</br>");



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
