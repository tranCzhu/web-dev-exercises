// Selecting w/ jQuery
$("selectorGoesHere"); 
// acts like a querySelectorAll, return a list of all matching elements

// Change css of a selected element
$("h1").css("color", "yellow");

// Change a bunch of css properties at the same time
var styles = {
    color: "red",
    background: "pink",
    border: "2px solid purple"
}
$("h1").css(styles);

// If selector selects multiple elements, then the css for all elements will change
$("li").css("color", "blue");
// changes the css for all li's
// to do this in vanilla JS, we use a for loop; jQuery is much faster

// use camel case instead of kebab case in JS/jQuery; i.g: fontSize, not font-size
$("li").css({
    fontSize: "10px"
});

