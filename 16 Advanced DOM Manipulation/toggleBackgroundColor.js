// starter html:
// <button>CLICK ME</button>

var btn = document.querySelector("button");
// var isWhite = true;
// btn.addEventListener("click", function() {
//     if (isWhite) {
//         document.querySelector("body").style.background = "purple";
//     } 
//     else {
//         document.querySelector("body").style.background = "white";
//     }
//     isWhite = !isWhite;
// });

// or, if there had been a CSS class added
// <style type="text/css"> 
// .purple { background: purple; }
// </style>

btn.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});

// classList does: if body belongs to class purple then disassociate it,
// otherwise associate it with class purple
// this way the bool isWhite is not needed

