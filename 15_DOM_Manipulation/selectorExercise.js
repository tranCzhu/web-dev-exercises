// 4 different way to select the first p in body
// <p id="first" class="special">Hello</p>
// 1
var par = document.getElementById("first");
// 2
var par = document.querySelector("#first");
// 3
var par = document.getElementsByTagName("p")[0];
// 4 
var par = document.querySelector("p");
// 5
var par = document.getElementsByClassName("special")[0];
// 6
var par = document.querySelector(".special");
// 7
var par = document.querySelector("h1 + p");