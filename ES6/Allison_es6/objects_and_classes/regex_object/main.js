"use strict";

var re = /(\w+)\s(\w+)/; // Regular expression to match first and last names

var str = "John Smith";
// Replaces "John Smith" with "Smith, John". $1 -> "John", $2 -> "Smith"(they represent the captured groups from the regex)
var newstr = str.replace(re, "$2, $1");
console.log(newstr); // "Smith, John"

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