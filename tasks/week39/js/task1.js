// Variables for storing the boolean values
const shipping = true;
const inStock = false;

// Retrieving the ids and storing them in variables.
let elementShipping = document.getElementById('shipping');
let elementStock = document.getElementById('stock');

// Assigning true or false to the properties
elementShipping.className = shipping
elementStock.className = inStock;