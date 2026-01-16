"use strict";

// Create a regular expression that matches any string containing "cat" or "dog"
const regex = /cat|dog/;

// Test the regex with different strings
console.log(regex.test("I have a cat.")); // true
console.log(regex.test("I have a dog.")); // true
console.log(regex.test("I have a fish.")); // false

// regular expression object
const regexObj = new RegExp("cat|dog");

// Test the regex object with different strings
console.log(regexObj.test("My pet is a cat.")); // true
console.log(regexObj.test("My pet is a dog.")); // true
console.log(regexObj.test("My pet is a bird.")); // false