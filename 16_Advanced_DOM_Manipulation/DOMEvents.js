// Events include clicking on a button, hovering over a link, etc.
// select an element and add an event listener
var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!");
})
// "click" is the event we're listening for and function() is the codes we execute when event happens
h1.addEventListener("click", function(){
    h1.style.background = "orange";
})
// There can be MULTIPLE event listeners for 1 element
// They execute in order
// Inside a listener, "this" refers to the element that the event occurs on
var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
    });
}