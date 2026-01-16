"use strict";

let boolObj = new Boolean(false); // Creates a Boolean object with the value false
console.log(boolObj); // Outputs: [Boolean: false]

// valueOf() method returns the primitive boolean value
console.log(boolObj.valueOf()); // Outputs: false
// typeof operator shows that boolObj is an object
console.log(typeof boolObj); // Outputs: object

if (boolObj) {
    console.log("This line is printed because boolObj is an object, which is truthy.");
}

console.log("");

let primBool = false; // Primitive boolean value
console.log(primBool); // Outputs: false