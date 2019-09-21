var Options = document.querySelectorAll(".bar");
var easyMode = document.querySelector("#easy");
var hardMode = document.querySelector("#hard");
var newColors = document.querySelector("#new");
var message = document.querySelector("#message");
var rgbDisplay = document.querySelector("#colorData");
var target = "";
var grids = document.querySelectorAll(".color-grid")
var colors = [];
var isEasyGame = false;

// After page loads, pull up a new game (default is hard game)
window.onload = function() {
    hardGame();
};

// Easy Game
easyMode.addEventListener("click", function() {
    easyGame()
});

// Hard Game (default)
hardMode.addEventListener("click", function() {
    hardGame()
});

// User clicks a color
for (i = 0; i < grids.length; i++) {
    grids[i].addEventListener("click", function() {
        console.log(this);
        // User guessed correctly
        if (this.style.backgroundColor === target) {
            message.textContent = "Yay!";
            for (i = 0; i < colors.length; i++) {
                grids[i].style.display = "block";
                grids[i].style.backgroundColor = target;
            };
        }
        // User guessed wrong
        // Change the color of grid to the same as body background color so it "disappears"
        else {
            message.textContent = "Try again!";
            this.style.backgroundColor = document.querySelector("body").style.backgroundColor;
        }
    })
};

// New Colors clicked
newColors.addEventListener("click", function() {
    newGame();
});

// Generate RGB returns a string of the RGB value
function generateRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Generate an array of an arbitrary amount of colors
function generateColors(num) {
    colors = [];
    for (i = 0; i < num; i++) {
        colors.push(generateRGB());
    };
    target = colors[Math.floor(Math.random() * num)];
    rgbDisplay.textContent = target;
    // This is for testing, delete later
    rgbDisplay.style.color = target;
    message.textContent = "";
}

function easyGame() {
    isEasyGame = true;
    generateColors(3);
    for (i = 0; i < grids.length; i++) {
        if (colors[i]) {
            grids[i].style.display = "block";
            grids[i].style.backgroundColor = colors[i];
        }
        else {
            grids[i].style.display = "none";
        }
    }
}

function hardGame() {
    isEasyGame = false;
    generateColors(6);
    for (i = 0; i < grids.length; i++) {
        if (colors[i]) {
            grids[i].style.display = "block";
            grids[i].style.backgroundColor = colors[i];
        }
    }
}

function newGame() {
    if (isEasyGame) {
        easyGame();
    }
    else {
        hardGame();
    }
}

// Lessons learned:
// grids.addEventListener won't work because grids as a class contains more than 1 element
// create a loop then grids[i].addEventListener would work
// for if user clicks wrong color then the wrong color "disappears":
// don't do it thru changing the display, but simply change the background color of the grid to
// the same as the background of the webpage
// because if you put display of the grid to "none", the other visible blocks will shift up to fill
// the space
// onClick is for buttons only, for other elements use addEventListener