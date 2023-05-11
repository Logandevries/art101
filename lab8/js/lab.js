// index.js - purpose and description here
// Author: Logan de Vries
// Created: 9 May 2023 


function funcLab(x) {
  var results = x + 10;
  return results;
}

var labArray = [14, 23, 2, 21, 5];
console.log("My Array", labArray);

console.log(funcLab(9));
console.log(funcLab(13));
console.log(funcLab(196));

console.log(labArray.map(funcLab));
console.log(labArray.map(function(x) {
  var results = x * 10;
  return results;
}));

var LabResult = labArray.map(funcLab);
console.log("Here is the result:", LabResult);

var result = labArray.map(function(x) {
  var results = x * 10;
  return results;
});

console.log("Here is the result:", result);



