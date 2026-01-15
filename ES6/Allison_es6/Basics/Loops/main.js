"use strict";

// Clean code practices applied:
// 1. Use meaningful variable names
// 2. Add comments to explain the purpose of each loop
// 3. Maintain consistent indentation and spacing
// 4. Separate different loop examples with blank lines for better readability

// Log the numbers from 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration number: ${i}`);
}
console.log("");

var _temp = function() {
  // Demonstrating block scope with let

  // What is block scope? Block scope means that a variable declared within a 
  // block(denoted by curly braces {}) is only accessible within that block.

  // The variable blockScopedVar is only accessible within this block
  for (let j = 0; j < 3; j++) {
    let blockScopedVar = `Block scoped variable at iteration ${j}`;
    console.log(blockScopedVar);
  }
}
_temp();
console.log("");

// For in loop => to iterate over an array of fruits
const fruits = ["apple", "banana", "cherry"];
for (const index in fruits) { // Using for...in to iterate over array indices
  console.log(`Fruit at index ${index}: ${fruits[index]}`);
}
console.log("");

// Another example of for in loop => to iterate over an object with numeric values
var numObject = {
  one: 1,
  two: 2,
  three: 3
};
for (const key in numObject) {
  // console.log(numObject[key]);
  console.log(key + " is a key of: " + numObject[key]);
}
console.log("");


// Another example of for in loop => to iterate over an object's properties
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
for (const key in person) { // Using for...in to iterate over object properties
  console.log(`${key}: ${person[key]}`); // Accessing property value using the key
}
console.log("");

// For of loop => to iterate over the same array of fruits
for (const fruit of fruits) { // Using for...of to iterate over array values
  console.log(`Fruit: ${fruit}`);
}
console.log("");

// While loop => to log numbers from 1 to 5
let count = 1;
while (count <= 5) {
  console.log(`Count is: ${count}`);
  count++;
}
console.log("");

// Do while loop => to log numbers from 1 to 5
let num = 1;
do {
  console.log(`Number is: ${num}`);
  num++;
} while (num <= 5);