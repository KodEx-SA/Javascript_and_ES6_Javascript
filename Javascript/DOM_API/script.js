// Select the h4 element by its ID and apply styles
var heading = document.getElementById('heading-4');
heading.style.color = "blue";
heading.style.background = "lightgray";
heading.style.borderBottom = "2px solid black";
heading.style.padding = "10px";
heading.style.width = "fit-content";
heading.style.margin = "30px auto";

// Select the div with class 'middle' and apply styles
var middle_div = document.getElementsByClassName('middle');
middle_div[0].style.border = "2px dashed gray";
middle_div[0].style.padding = "15px";
middle_div[0].style.width = "60%";
middle_div[0].style.margin = "20px auto";

// Select the first paragraph element and apply styles
var paragraph = document.getElementsByTagName('p');
paragraph[0].style.fontSize = "18px";
paragraph[0].style.fontFamily = "Arial, sans-serif";
paragraph[0].style.lineHeight = "1.6";
paragraph[0].style.color = "green";
paragraph[0].style.background = "lightyellow";
paragraph[0].style.borderBottom = "2px solid orange";
paragraph[0].style.padding = "8px";
paragraph[0].style.width = "fit-content";
paragraph[0].style.margin = "auto";

// Set textContent of the paragraph with ID 'paragraph'
document.getElementById('paragraph').textContent = "Hello World!";

// Create a new paragraph element, set its text and styles, and append it to the body
var new_element = document.createElement('p');
new_element.textContent = "New element created successfully added!.";
new_element.style.color = "red";
document.body.appendChild(new_element); // Append the new element to the body

// Select the div with class 'second' and apply styles to its h5 child