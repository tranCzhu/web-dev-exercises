if(jQuery){
    alert("jQuery Loaded!");
} else {
    alert("No");
}

$("div").css("background", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "2px solid orange");
$("div:first-of-type").css("color", "pink");
// $("div:first") also works but slower since it's a jQuery shortcut
