var express    = require("express");
var nodemailer = require("nodemailer");
var fs         = require("fs");
var app        = express();

var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "sm@johnnychang.com",
        pass: "hoopdadoopda"
    }
});

function logRequest(request) {
    fs.appendFile("email_logs.txt", JSON.stringify(request) + "\n");
}

app.use("/", express.static(__dirname + "/"));

app.get("/", function(req, res) {
    res.sendfile("index.html");
});

app.get("/send", function(req, res) {
    console.log(req.query);

    var emailRequest = {
        to: req.query.email,
        subject: "Request to Access Subsistence Marketplace Materials",
        text: "Hi there " + req.query.name + ", \n" +
            "We've received your request. Here's everything.\n" +
            "Thanks!"
    };

    logRequest(req.query);

    smtpTransport.sendMail(emailRequest, function(error, info) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Request sent.");
            res.end("sent");
        }
    });
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});
