"use strict";

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use map to create a new array with each number squared
// map is a higher-order function that takes a callback function and applies it to each element in the array, returning a new array.
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Use filter to create a new array with only even numbers
// filter is a higher-order function that takes a callback function and returns a new array containing only the elements that 
// satisfy the condition defined in the callback.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4]

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers); // Output: [1, 3, 5]

for (let i = 0; i < numbers.length; i++) { // Traditional for loop to iterate through the array
    console.log("Number at index", i, "is", numbers[i]);
}

var newNumbers = new Array(100);; // Create a new array with 100 undefined elements
console.log("New Numbers Array Length:", newNumbers.length); // Output: 100

// Use reduce to calculate the sum of all numbers in the array
// reduce is a higher-order function that takes a callback function and an initial value, and reduces the array to a single value by
// applying the callback function cumulatively to each element.
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers:", sum); // Output: 15

// Use forEach to log each number in the array
// forEach is a higher-order function that takes a callback function and executes it for each element in the array.
console.log("Logging each number:");
numbers.forEach(num => console.log(num)); // Output: 1 2 3 4 5 (each on a new line)

// Use find to locate the first number greater than 3
// find is a higher-order function that takes a callback function and returns the first element in the array that satisfies the condition
// defined in the callback.
const firstGreaterThanThree = numbers.find(num => num > 3);
console.log("First Number Greater Than 3:", firstGreaterThanThree); // Output: 4