// Array with 5 elements
let colors = ["Red", "Yellow", "Blue", "Beige", "Green"];

// Storing the old color for display later
const oldColor = colors[2];

// Changing the value "Blue" to "Orange"
colors[2] = "Orange";

// Fetching the HTML elements and storing them in variables
const colorElement = document.getElementById('colors');
const colorElement2 = document.getElementById('colors2');

// Displaying the color at index 2 in the array
colorElement.textContent = colors[2];

// Displaying the old color
colorElement2.textContent = oldColor;
