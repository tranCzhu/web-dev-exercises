// .click();
$("#submit").click(function() {
    // some function
});
// this can be apply to any elements, not just buttons

// .keypress()
$("input[type=text]").keypress(function() {
    console.log("you pressed a key!");
    console.log("This function gets trigger for every time you type in a character.");
});
// use .keypress() to achieve: when the user hits enter, the input gets submitted
// JS have key codes for different keys
// for enter the key code is 13
$("input[type=text]").keypress(function(event) {
    if(event.which === 13){
        alert("YOU HIT ENTER!");
    }
});

// on(): same as addEventListener()
// all types of events, not just click
$("h1").on("click", function() {
    // $("h1").css("color", "purple");
    // problem of selecting h1 is: all h1's turn purple
    // use "this" to specify it's only the one selected
    $(this).css("color", "purple");
});
// hover
$("button").on("mouseenter", function() {
    console.log("MOUSE ENTER!");
    $(this).css("font-weight", "bold");
})
$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
})

// Difference between click() and on("click")
// click() only adds listener for existing elements
// on() will add listeners for all potential future elements
