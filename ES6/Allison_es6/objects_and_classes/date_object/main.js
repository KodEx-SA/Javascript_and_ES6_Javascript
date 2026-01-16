"use strict";

// Date Object
var dateObject = new Date();
console.log(dateObject);
console.log(`Year: ${dateObject.getFullYear()}`);
console.log(`Month: ${dateObject.getMonth() + 1}`); // Months are zero-indexed
console.log(`Day of the Week: ${dateObject.getDay()}`); // 0 (Sunday) to 6 (Saturday)
console.log(`Date: ${dateObject.getDate()}`);
console.log(`Hours: ${dateObject.getHours()}`);
console.log(`Minutes: ${dateObject.getMinutes()}`);
console.log(`Seconds: ${dateObject.getSeconds()}`);
console.log(`Milliseconds: ${dateObject.getMilliseconds()}`);
console.log(`Time (ms since Jan 1, 1970): ${dateObject.getTime()}`);

console.log("");

console.log(`tostring: ${dateObject.toString()}`); // Full date and time
console.log(`toDateString: ${dateObject.toDateString()}`); // Date portion
console.log(`toTimeString: ${dateObject.toTimeString()}`); // Time portion

console.log("");
console.log(`toISOString: ${dateObject.toISOString()}`); // ISO 8601 format => YYYY-MM-DDTHH:mm:ss.sssZ => Coordinated Universal Time (UTC)
// YYYY-MM-DDTHH:mm:ss.sssZ -> Year-Month-Day T Hours:Minutes:Seconds.Milliseconds Z (indicates UTC)

console.log(`toUTCString: ${dateObject.toUTCString()}`); // UTC format => Day, DD Mon YYYY HH:mm:ss GMT
// Day, DD Mon YYYY HH:mm:ss GMT -> Day of week, Day Month Year Hours:Minutes:Seconds GMT

console.log("");

// Create a new Date object representing the current date and time
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Create a Date object for a specific date and time
const specificDate = new Date("2023-01-01T12:00:00");
console.log("Specific Date and Time:", specificDate);