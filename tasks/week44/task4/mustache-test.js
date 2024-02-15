const mustache = require("mustache");
let result = mustache.render("Hi, {{first}} {{last}}!", {
             first: "Nicolas",
             last: "Cage"});
console.log(result);