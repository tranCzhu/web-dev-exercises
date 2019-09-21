if (jQuery) {
    alert("jQuery loaded");
} else {
    alert("jQuery NOT loaded");
}

// .text() = .textContent
$("ul").text();
// expected: "Skittles Starburst Twix"
$("li").text();
// expected: "SkittlesStarburstTwix"
$("h1").text("New Text");
// changes h1's textContent to "New Text"

// .html() = .innerHtml
$("ul").html();
// expected: "<li>Skittles</li> <li>Starburst</li> ..."
// can also pass in html content inside ()

// .attr()
$("input").attr("type");
// "text"
$("input").attr("type", "checkbox");
// change the type of input to checkbox
$("img").last().attr("src", "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg?itok=OC39JJLs")
// changes the source of the last image

// .val()
$("input").val();
// "" -> when the input value is null
// "some value" -> when user typed in "some value" to the input
$("input").val("content");
// "content" will show up in the input
$("input").val("");
// resets the text input to empty
$("select").val();
// tells us the user's choice

// .addClass()
$("h1").addClass("someClass");
// .removeClass()
$("h1").removeClass("someClass");
// .toggleCLass()
$("h1").toggleClass("SomeClass");
// if "SomeClass" is added then it will remove, if not added it will add