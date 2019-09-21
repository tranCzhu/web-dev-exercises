var express = require("express");
var app = express();
// tells express to look for css files in the public directory
app.use(express.static("public"));
// tells express to use ejs files for all render methods
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/love/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thing: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "monkey bread", author: "Suzie"},
        {title: "Kiddle", author: "me"},
        {title: "dinosaur world", author: "dinosaur"},
        {title: "hey you", author: "a person"}
    ];
    res.render("posts", {posts: posts});
});

app.listen(3000, function(){
    console.log("server is listening...");
});