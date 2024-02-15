let express = require("express");
let http = require("http");
let app = express();

app.use((request, response, next) => {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, world!");
});

app.listen(3000);