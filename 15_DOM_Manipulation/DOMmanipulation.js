// changing an element's style
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontsize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";


// adding/removing classes
// classList is a read-only list that contains the classes for a given element
// it's not an array
var tag = document.querySelector("h1");
// add a class to the selected element
// we define:
// .another-class {color: purple; fontSize: 76px}
// in our CSS document
tag.classList; // returns [] because this h1 element had not been assigned to a class yet
tag.classList.add("another-class"); // added a class to the selected element
tag.classList.remove("another-class"); // removed a class

// changing the content of a tag
var p = document.querySelector("p");
p.textContent; // shows content of text
// can be used on ul; returns all <li> elements spaced out with 1 blank space
p.textContent = "hahaha you can also overwrite text content like this";
p.innerHTML; // returns all html elements in content, not only the text but also the bold tags, for example
// you can also overwrite innerHTML but it replaces all the original html elements


// changing attributes
var img1 = document.getElementsByTagName("img")[0];
img1.getAttribute("src"); // gets the source of image
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "www.dogs.com"); // sets new attribute for link
img1.setAttribute("src". "http://www.google.com"); // sets new attribute for image

