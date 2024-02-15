/*
    Example from slide 46 in W44 Intro to Node lecture
*/

const http = require("http");
const server = http.createServer((request, response) => {
    console.log("In comes a request to : " + request.url);
    response.end("Hello world!");
});

server.listen(3000);