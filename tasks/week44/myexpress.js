const express = require("express");
const http = require("http");

const app = express();

app.use((request, response) => {
    console.log("In comes a request to: " + request.url);
    response.end("Hello world!");
});

app.listen(3000);