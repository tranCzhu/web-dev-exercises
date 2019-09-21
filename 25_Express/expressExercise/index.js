var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    // one problem: if animal is not defined in sounds, it says 'undefined'
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'!");
});

app.get("/speak/cow", function(req, res) {
    res.send("The cow says 'Moo'!");
});

app.get("/speak/dog", function(req, res) {
    res.send("The dog says 'Woof Woof'!");
});

app.get("/repeat/:phrase/:times", function(req, res) {
    res.send(repeat(req.params.phrase, req.params.times));
});

app.get("*", function(req, res) {
    res.send("yikes, 404 not found!");
})

app.listen(3000, function() {
    console.log("listening on port 3000...");
});

function repeat (p, n) {
    var output = "";
    for (i = 0; i < n; i++) {
        output += p + " ";
    }
    return output;
}