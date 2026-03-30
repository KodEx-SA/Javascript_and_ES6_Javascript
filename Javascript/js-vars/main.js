"use strict"

// Here, we defined a number called "number1" which was equal to 5. However, on the second line, we changed the
// value to 3. To show the value of a variable, we log it to the console or use window.alert():
var number1 = 5;
number1 = 3;

console.log(number1); // 3
window.alert(number1); // 3

// To add, subtract, multiply, divide, etc., we do like so:
number1 = number1 + 5; // 3 + 5 = 8
number1 = number1 - 6; // 8 - 6 = 2
var number2 = number1 * 10; // 2 (times) 10 = 20
var number3 = number2 / number1; // 20 (divided by) 2 = 10;

// We can also add strings which will concatenate them, or put them together. For example:
var myString = "I am a " + "string!"; // "I am a string!

// Types of vars
var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5; // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myBoolean = true; // 1-bit true/false (0 or 1)
var myBoolean2 = false;
var myNotANumber = NaN;
var NaN_Example = 0/0; // NaN: Division by Zero is not possible
var notDefined; // undefined: we didn't define
var myNull = null; // null
// etc...