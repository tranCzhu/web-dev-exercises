var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// body parser helps create a javascript object from a request body
app.use(bodyParser.urlencoded({extended: true}));
var friends = ["Kiki", "Hailey", "Kyrine", "Kyrena", "Irene", "Kaci"];


app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res) {
    friends.push(req.body.newFriend);
    res.redirect("/friends");
})

app.listen(3000, function(){
    console.log("server is up...");
});