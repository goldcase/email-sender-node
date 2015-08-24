var express    = require("express");
var nodemailer = require("nodemailer");
var app        = express();

app.listen(3000, function() {
    console.log("Listening on port 3000");
});

app.get("/", function(req, res) {
    res.sendfile("index.html");
});

app.get("/send", function(req, res) {

});
