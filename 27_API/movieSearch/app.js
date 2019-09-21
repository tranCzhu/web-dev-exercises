var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/results", function(req, res) {
    // req.query not req.body
    var keyword = req.query.movieName;
    console.log(keyword);
    var url = "http://www.omdbapi.com/?s=" + keyword + "&apikey=thewdb"
    request(url, function(error, response, body) {
        if (!error && res.statusCode == 200) {
            var parsedData = JSON.parse(body);
            res.render("results", {data: parsedData});
        }
        else {
            res.send("something went wrong, {$error}");
        }
    });
});

app.listen(3000, function() {
    console.log("server is up...");
})