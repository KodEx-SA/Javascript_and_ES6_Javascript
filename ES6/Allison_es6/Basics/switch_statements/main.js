"use strict";
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "apple":
        console.log("Some Apples are red, some are green.");
        break;
    case "grape":
        console.log("Grapes are purple.");
        break;
    default:
        console.log("Unknown fruit color.");
}

let variable = 10;
switch (true) {
    case (variable < 5):
        console.log("Variable is less than 5.");
        break;
    case (variable >= 5 && variable <= 15):
        console.log("Variable is between 5 and 15.");
        break;
    case (variable > 15):
        console.log("Variable is greater than 15.");
        break;
    default:
        console.log("Variable is not a number.");
}

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day.");
}