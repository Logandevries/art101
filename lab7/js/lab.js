// index.js - purpose and description here
// Author: Logan de Vries
// Created: 29 April

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
//Split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
//sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
//join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}


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
