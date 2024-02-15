let express = require("express");
let http = require("http");
let app = express();

app.use((request, response, next) => {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

app.use((request, response, next) => {
    let minute = (new Date()).getMinutes();
    if ((minute % 2) == 0) {
        next();
    } else {
        response.statusCode = 403;
        response.end("Not authorized.");
    }
});

app.use((request, response) => {
    response.end("Secret Info: the password is 'swordfish'!");
});

app.listen(3000);