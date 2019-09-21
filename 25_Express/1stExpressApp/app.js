var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/dog", function(req, res){
    res.send("Meow!");
});

app.get("/r/:title", function(req, res) {
    res.send("welcome to a subreddit of " + req.params.title + "!");
});
// but /r/ewfwefwe/wefwefwe won't work because it has two things after r,
// it doesn't follow this specific pattern of only 1 thing after r/


// This stays at the end because order of routes matter, * is like else
app.get("*", function(req, res) {
    res.send("uh oh, 404 not found.");
})

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log("server listening on port 3000...")
});