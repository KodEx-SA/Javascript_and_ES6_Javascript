"use strict";

// What is a number object?
// A Number object is a wrapper object that allows you to work with numerical values as objects. 
// In JavaScript, primitive number values are not objects, but when you create a Number object using the Number constructor,
// it wraps the primitive value in an object.

// What are primitive number values?
// Primitive number values are the basic data type for numbers in JavaScript. 
// They are not objects and do not have methods or properties.
// Examples of primitive number values include: 42, -3.14, 0, and NaN.

// Create a Number object with the value 123
// new => is used to create an instance of an object.
let numObj = new Number(123);
console.log(typeof numObj);

var i = new Number(67.463098);
console.log(i); // Output: [Number: 67.463098]
console.log(`Precision of: ${i.toPrecision(4)}`); // Output: "67.46" => formats number to specified precision -> 4 significant digits
// toPrecision() method formats a number to a specified length

// Demonstrating that numObj is an object
console.log(numObj instanceof Number); // Output: true

console.log("");
console.log("Demo of Number object vs Primitive number value:");

// Demonstrating that primitive number is not an object
let primitiveNum = 123;
console.log(typeof primitiveNum);
console.log(primitiveNum instanceof Number); // Output: false

console.log("");
console.log("Using Number object methods:");

// Using methods of Number object
console.log(numObj.toFixed(2)); // Output: "123.00"
console.log(numObj.valueOf());   // Output: 123