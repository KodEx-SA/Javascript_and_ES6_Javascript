"use strict"

// what is a void operator? => The void operator evaluates the given expression and then returns undefined.
// Using the void operator to execute an anonymous function immediately

void function() {
    console.log("This function runs immediately and returns undefined.");
} ();

void function namedFunction() {
    console.log("This named function also runs immediately and returns undefined.");
} ();
namedFunction(); // This will throw an error because namedFunction is not defined in this scope

// Using the void operator with a regular function
function exampleFunction() {
    return "This function returns a value.";
}
const result = void exampleFunction();
console.log(result); // Output: undefined