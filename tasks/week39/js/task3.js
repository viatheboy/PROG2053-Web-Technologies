const customerName = "Toddy";     // Name to be printed on the sign
const message = "Hello " + customerName + ". Review your order:";  // message to be displayed
let numOfTiles = customerName.length; // One tile per letter
const pricePerTile = 3;
const shippingPrice = 8;

// Display the message + name on the top of the display
elemMessage = document.getElementById('greeting');  // Stores the element in the variable
elemMessage.textContent = message;  // Displays the message on the site


// Display the name on the customer sign
elemName = document.getElementById('userSign');
elemName.textContent = customerName;


// Display the total number of tiles
elemTiles = document.getElementById('tiles');
elemTiles.textContent = "$" + numOfTiles;

// Calculate the total price for tiles
let subTotal = pricePerTile * numOfTiles;

// Display the subtotal
elemSub = document.getElementById('subTotal');
elemSub.textContent = "$" + subTotal;

// Display the shipping cost
elemShipping = document.getElementById('shipping');
elemShipping.textContent = "$" + shippingPrice;

// Calculating the total and displaying it
let grandTotal = subTotal + shippingPrice;
elemTotal = document.getElementById('grandTotal');
elemTotal.textContent = "$" + grandTotal;

