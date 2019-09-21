if (jQuery) {
    console.log("jQuery connected!");
} else {
    console.log("not connected oops");
}

$("button").on("click", function() {
    $("div").fadeOut(1000, function() {
        console.log("Fade Completed!");
        $(this).remove();
    });
    // console.log("Fade Completesd");
    //don't put it here cuz the message will not wait till all elements have faded out
});
// the elements' display turns to none in the fade function

// There's also fade in
$("button").on("click", function() {
    $("div").fadeIn(1000, function() {
        console.log("Fade Completed!");
        $(this).remove();
    });
    // console.log("Fade Completesd");
    //don't put it here cuz the message will not wait till all elements have faded out
});

// There's also fade toggle
$("button").on("click", function() {
    $("div").fadeToggle(500);
});

// There's also slideDown, slideUp, or slide toggle
$("button").on("click", function() {
    $("div").slideDown(500);
})