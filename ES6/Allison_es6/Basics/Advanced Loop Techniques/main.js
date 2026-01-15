"use strict";

for (var i = 0; i <= 10; i += 2) { // increments by 2
    if(i === 6) {
        //break; // exits the loop when i is 6
        continue; // skips the rest of the loop when i is 6
    }
    console.log(`Position: ${i}`);
}

console.log("");

let fruit = "apple";
for (let char of fruit) { // iterates over each character in the string
  console.log(char);
}