// The DOM (Document Object Model) is the interface between javascript and html + css
var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
    if (isBlue) {
        body.style.background = "white";
    }
    else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);

// Above codes: execute the function every 1000 milisec to 
// change the background of the body to alternate colors