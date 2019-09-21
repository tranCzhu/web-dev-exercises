var item = document.getElementById("something");
var classy = document.getElementByClassName("Bold");
// If multiple elements belong to the same class and are retrieved by the selector
// then the return value is a html collection (a "lightweight" array) of these elements
// cannot use forEach on html collection, but other array methods should be valid

var tags = document.getElementsByTagName("li");
// returns a list even if there's only 1 element
var tags = document.getElementsByTagName("li")[0];
// do this to retrieve 1 element only

// Query Selector:
// uses CSS syntax, for example the # in front of an id selection
// only gives the FIRST MATCH

// select by id
var selected = document.querySelector("#highlight");
// select by class
var selected = document.querySelector(".bolded");

// select ALL MATCHES
var selected = document.querySelectorAll(".bolded");
// returns a list even if there's only 1 element

// returns a list/html collection no matter what
var tags = document.getElementsByTagName("li");
var tags = document.getElementByClassName("li");
var selected = document.querySelectorAll(".bolded");