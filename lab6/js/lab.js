// index.js - purpose and description here
// Author: Logan de Vries
// Created: 29 April

// Define Variables
myTransport =  ["walking", "Bus", "Uber"]

// Create an object for my main ride
var myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "Grey",
  year: "2005",
  age: function() {
      return 2023 - this.year
  }
}

// output
document.writeIn("Kinds of Transportation I use: ", myTransport, "</br>")
// this little trick allows us to write an object to the document
document.writeIn("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '/t'), "</pre>")



  
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
