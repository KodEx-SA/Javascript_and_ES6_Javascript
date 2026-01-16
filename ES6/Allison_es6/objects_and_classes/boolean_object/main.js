"use strict";

let boolObj = new Boolean(false); // Creates a Boolean object with the value false

if (boolObj) {
    console.log("This line is printed because boolObj is an object, which is truthy.");
}