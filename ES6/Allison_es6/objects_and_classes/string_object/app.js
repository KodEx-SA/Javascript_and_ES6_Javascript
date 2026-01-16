"use strict";

let strObj = new String("Hello, World!"); // Create a String object
console.log("strObj instanceof String:", strObj instanceof String); // true
console.log("strObj value:", strObj.valueOf()); // "Hello, World!"

console.log("\n--- String Object Methods Demonstration ---");
console.log("-------------------------------");

// Demonstrating String object methods
console.log("strObj length:", strObj.length); // 13 => Length of the string => from 0 to 12
console.log("strObj toUpperCase():", strObj.toUpperCase()); // "HELLO, WORLD!"
console.log("strObj charAt(7):", strObj.charAt(7)); // "W" => Character at index 7

// Demonstrating indexOf method
// How does it work? => It searches for the substring "World" in the string "Hello, World!" and returns the 
// starting index of the first occurrence.
// In this case, "World" starts at index 7 (H=0, e=1, l=2, l=3, o=4, ,=5, space=6, W=7)
console.log("strObj indexOf('World'):", strObj.indexOf("World")); // 7 => Starting index of substring "World" => from 7 to 11 => 5 characters => W,o,r,l,d > substring


console.log("strObj slice(7, 12):", strObj.slice(7, 12)); // "World"
console.log("strObj includes('Hello'):", strObj.includes("Hello")); // true
console.log("strObj replace('World', 'ES6'):", strObj.replace("World", "ES6")); // "Hello, ES6!"
console.log("strObj split(', '):", strObj.split(", ")); // ["Hello", "World!"]
console.log("strObj trim():", strObj.trim()); // "Hello, World!"
console.log("strObj toString():", strObj.toString()); // "Hello, World!"

console.log("\n--- Immutability Demonstration ---");
console.log("-------------------------------");

// Demonstrating immutability of String objects
let modifiedStrObj = strObj.toUpperCase();
console.log("Original strObj after toUpperCase():", strObj.valueOf()); // "Hello, World!"
console.log("Modified strObj:", modifiedStrObj); // "HELLO, WORLD!"