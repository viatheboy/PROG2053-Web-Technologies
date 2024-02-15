const express = require("express");
const path = require("path");
const fs = require("fs");

let app = express();

app.use((req, res, next) => {
    console.log("Request URL: " + req.url);
    console.log("Request Date: " + new Date());
    next();
});

const staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use((req, res) => {
    res.status(404);
    res.send("File not found");
});

app.listen(3000, () => {
    console.log("App started on port 3000");
});