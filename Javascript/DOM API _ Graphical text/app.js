/*
HTML provides the canvas element for building raster-based images.
First build a canvas for holding image pixel information.
*/

// ==================== Using Canvas ====================
var canvas_text = document.getElementById('canvas-element');
canvas_text.textContent = "Canvas Elements Usage";
canvas_text.style.margin = "auto";
canvas_text.style.padding = "10px";
canvas_text.style.textAlign = "center";
canvas_text.style.fontSize = "24px";
canvas_text.style.fontWeight = "bold";

// Create a canvas element with desired dimensions and styles:
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 75;
canvas.style.backgroundColor = "#f0ff0f";
canvas.style.border = "2px solid black";

// Then select a context for the canvas, in this case 2D context:
var ctx = canvas.getContext('2d');

// set properties related to the text:
ctx.font = '30px Cursive';
ctx.fillText("Hello World!", 150, 50);

// Now insert the canvas element into the page to take effect:
document.body.appendChild(canvas);



// ===================== Using SVG =========================

/*
SVG is for building scalable vector-based graphics and can be used 
within HTML.
First create an SVG element container with dimensions:
*/

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 40;
svg.style.backgroundColor = "#f0f0ff";
svg.style.border = "2px solid black";
svg.style.display = "block";
svg.style.margin = "auto";
svg.style.padding = "10px";
svg.style.padding = "30px";

//  Then build a text element with the desired positioning and font characteristics:
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '30');
text.setAttribute('y', '80');
text.style.fontFamily = "Times New Roman";
text.style.fontSize = "30";

// Then add the actual text to display to the text_element:
text.textContent = "SVG Text element!";

// Finally add the text element to our svg container and add the svg container element to the HTML document:
svg.appendChild(text);
document.body.appendChild(svg);


// ================ Image file ===================

/*
If you already have an image file containing the desired text and have it placed on a server, you can add the URL of
the image and then add the image to the document as follows:
*/

var img = new Image();
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);
img.style.width = "250px";
img.style.height = "150px";
img.style.display = "block";
img.style.margin = "auto";
img.style.padding = "10px";
img.style.border = "2px solid black";