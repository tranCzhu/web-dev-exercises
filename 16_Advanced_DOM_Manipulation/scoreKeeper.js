var maxScore = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");

// Set max score
var setMax = document.querySelector("#setMax");
setMax.addEventListener("input", function() {
    maxScore = this.value;
    document.querySelector("#max").textContent = maxScore;
});

// Increment player score
document.querySelector("#p1Add").onclick = function() {
    if (gameOver) {
        p1Dsiplay.textContent = p1Score;
    }
    else {
        p1Score++;
        p1Display.textContent = p1Score;
        checkWinner();
    }
}
document.querySelector("#p2Add").onclick = function() {
    if (gameOver) {
        p2Display.textContent = p2Score;
    }
    else {
        p2Score++;
        p2Display.textContent = p2Score;
        checkWinner();
    }
}

// Check whether game is over and turn the winning score green
function checkWinner() {
    if (p1Score >= maxScore) {
        gameOver = true;
        p1Display.classList.add("winner");
    }
    if (p2Score >= maxScore) {
        p2Display.classList.add("winner");
        gameOver = true;
    }
}

// Reset scores
document.querySelector("#reset").onclick = function() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}
