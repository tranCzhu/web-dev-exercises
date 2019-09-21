var kitty = document.querySelector("#kitty");
var kitten = document.querySelector("#kitten");

// hover  
kitty.addEventListener("mouseover", function(){
    this.classList.add("hover");
});

// unhover
kitty.addEventListener("mouseout", function(){
    this.classList.remove("hover");
});

// toggle lets you click to do the effect then click again to undo the effect
kitty.addEventListener("click", function(){
    this.classList.toggle("done");
});