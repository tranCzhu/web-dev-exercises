var num = 4;
var guessed = Number(prompt("Guess a number."));
if(guessed !== num) {
    if(guessed >= num) {
        alert("Hmmm, a bit smaller than this.");
    }
    else {
        alert("Hmmm, a bit greater than this.");
    }
}
else {
    alert("yay you got it!");
}