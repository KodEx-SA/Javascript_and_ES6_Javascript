var a = 50;
var b = 100;
var result;
result = (a < b) ? "a is less than b" : "a is not less than b";
console.log(result); // "a is less than b"

var max = (a > b) ? "correct" : "wrong";
console.log(max); // "wrong"

var access = (a < b) ? true : false; // Nested ternary operator
console.log(access); // true

var message = (a === b) ? "Equal" : (a > b) ? "A is greater" : "B is greater"; // Chained ternary operator
console.log(message); // "B is greater"

var result = (a !== b) ? ((a > b) ? "A is greater" : "B is greater") : "Equal"; // Nested ternary operator
console.log(result); // "B is greater"