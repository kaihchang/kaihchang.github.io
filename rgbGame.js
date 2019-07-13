var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll('.square');
var correctColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var message = document.querySelector('#message');
var navFirst = document.querySelector("#first");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function () {
    // lights of buttons on and off
    easyBtn.classList.add("difficultySelected");
    hardBtn.classList.remove("difficultySelected");
    // reset message
    message.textContent = "";
    // change number of squares
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    // randomize colors
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    // change the colors of the squares and hide the bottom 3
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function () {
    // lights of buttons on and off
    easyBtn.classList.remove("difficultySelected");
    hardBtn.classList.add("difficultySelected");
    // reset message
    message.textContent = "";
    // change number of squares
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    // randomize colors
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    // change the colors of the squares and show the bottom 3
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
})

for (var i = 0; i < squares.length; i++) {
    // giving colors to squares
    squares[i].style.backgroundColor = colors[i];
    // adding eventListeners to squares
    squares[i].addEventListener('click', function () {
        // grab the color of squares[i]
        var clickedColor = this.style.backgroundColor;
        // compare squares[i] color to correctColor
        if (clickedColor === correctColor) {
            changeToCorrectColors(correctColor);
            // change nav #first color
            navFirst.style.backgroundColor = correctColor;
            resetButton.textContent = "再玩一次？";
            message.textContent = "正確！";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "再試一次";
        }
    })
}

colorDisplay.textContent = correctColor;

resetButton.addEventListener("click", function () {
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick a new correctColor from the array
    correctColor = pickColor();
    // change colorDisplay to correctColor
    colorDisplay.textContent = correctColor;
    // change colors to squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        // change resetButton back to New Colors
        resetButton.textContent = "新遊戲";
        // reset nav #first color
        navFirst.style.backgroundColor = "#5581B0";
        // reset message
        message.textContent = "";
    }
})

function changeToCorrectColors(color) {
    // loop through all squares
    for (i = 0; i < squares.length; i++) {
        // change all colors to match the given correct color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // pick a random number
    // Math.floor chops of decimals, Math.random picks a random number between 0 and 1, times 6 to make the number go between 0 and 5
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (i = 0; i < num; i++) {
        // get random colors
        // push them into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

// generate 1 random color
function randomColor() {
    // R from 0-255, times 256 to make 255 possible
    var r = Math.floor(Math.random() * 256);
    // G from 0-255
    var g = Math.floor(Math.random() * 256);
    // B from 0-255
    var b = Math.floor(Math.random() * 256);
    // "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}