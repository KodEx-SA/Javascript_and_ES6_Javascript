"use strict";

// What are cookies? => Small pieces of data stored on the user's computer by the 
// web browser while browsing a website.
// They are used to remember information about the user, 
// such as login status, preferences, and tracking data.

// Setting a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
document.cookie = "theme=dark; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// Getting cookies
function getCookie(name) {
    const value = `; ${document.cookie}`; // Add a semicolon at the beginning to simplify the search
    const parts = value.split(`; ${name}=`); // Split the string to find the cookie
    if (parts.length === 2) return parts.pop().split(';').shift(); // Return the cookie value
    return null;
}
console.log("Username:", getCookie("username")); // Output: JohnDoe
console.log("Theme:", getCookie("theme")); // Output: dark

// Do it in a more simpler way
function getCookieSimple(name) {
    const cookies = document.cookie.split('; '); // Split all cookies into an array
    for (let cookie of cookies) { // Iterate through each cookie
        const [key, value] = cookie.split('='); // Split the cookie into key and value
        if (key === name) return value; // Return the value if the key matches
    }
    return null;
}
console.log("Username (simple):", getCookieSimple("username")); // Output: JohnDoe
console.log("Theme (simple):", getCookieSimple("theme")); // Output: dark