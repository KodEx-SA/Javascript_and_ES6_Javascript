"use strict"

// Bitwise AND(&) not &&
let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011
let andResult = a & b;
console.log(`Bitwise AND of ${a} & ${b} = ${andResult}`); // Output: 1 (Binary: 0001)
let and = 22 & 26;
console.log(`Bitwise AND of 22 & 26 = ${and}`); // Output: 18 (Binary: 10010)

// Bitwise OR?(|) not ||
let orResult = a | b;
console.log(`Bitwise OR of ${a} | ${b} = ${orResult}`); // Output: 7 (Binary: 0111)
let or = 22 | 26;
console.log(`Bitwise OR of 22 | 26 = ${or}`); // Output: 30 (Binary: 11110)

// How are the results calculated step by step?
// For Bitwise AND (&):
//  0101  (5 in binary)
//& 0011  (3 in binary)
//-------
//  0001  (Result is 1 in decimal)

// What are their binary representations?
// 5 in binary is 0101
// 3 in binary is 0011

// How do these operators differ from logical operators?
// Bitwise operators operate on the binary representations of numbers, performing operations on each corresponding bit.
// Logical operators (&&, ||) operate on boolean values and return true or false based on the logical relationship between the operands.