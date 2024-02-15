const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("index", {
        name: "Tony Hawk", 
        birthyear: 1968,
        career: "skateboarding", 
        bio: "<b>Tony Hawk</b> is the coolest skateboarder around."
    });
});

app.listen(3000);