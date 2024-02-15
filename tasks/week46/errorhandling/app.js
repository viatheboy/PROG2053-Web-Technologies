const express = require("express");
const path = require("path");

const app = express();

const filePath = path.join(__dirname, "itsadog.jpg");
app.use((req, res, next) => {
    res.sendFile(filePath, (err) => {
        if (err) {
            next(new Error("Error sending file!"));
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500);
    res.send("Internal Server Error");
}),

app.listen(3000, () => {
    console.log("App started on port 3000");
});