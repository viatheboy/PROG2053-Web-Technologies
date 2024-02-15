let express = require("express");
let path = require("path");
let http = require("http");

let app = express();

let publicPath = path.resolve(__dirname, "week45");
app.use(express.static(publicPath));

app.get("/", (request, response) => {
    response.end("Welcome to my homepage!");
});

app.get("/about", (request, response) => {
    response.end("Welcome to the about page!");
});

app.get("/weather", (request, response) => {
    response.end("The current weather is SNOWY.");
});

app.use((request, response) => {
    response.statusCode = 404;
    response.end("404!");
});

app.listen(3000);