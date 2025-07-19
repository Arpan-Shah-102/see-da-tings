let startBtn = document.querySelector('.start');
let testHeading = document.querySelector('.see');
let inputField = document.querySelector('.input');
let scoreField = document.querySelector('.score');
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let testStarted = false;
let score = 0;
let totalRounds = 10;

startBtn.addEventListener('click', function() {
    startBtn.style.display = 'none';
    testHeading.textContent = letters[Math.floor(Math.random() * letters.length)];
    inputField.value = '';
    testHeading.style.display = 'block';
    scoreField.style.display = 'block';
    testStarted = true;
    inputField.focus();
});

function checkGameOver() {
    testHeading.textContent = letters[Math.floor(Math.random() * letters.length)];
    inputField.value = '';
    let currentBlur = parseFloat(getComputedStyle(testHeading).filter.match(/blur\((.+)px\)/)?.[1] || 0);
    testHeading.style.filter = `blur(${currentBlur + 0.5}px)`;
    let currentSize = parseFloat(getComputedStyle(testHeading).fontSize);
    let newSize = (currentSize * 72 / 96) - 10; // Convert px to pt and subtract 10
    testHeading.style.fontSize = `${newSize}pt`;
    totalRounds--;
    if (totalRounds <= 0) {
        inputField.style.display = 'none';
        testHeading.style.display = 'none';

        if (score >= 8) {
            scoreField.textContent= 'You passed the test! You scored have normal vision.';
        } else {
            scoreField.textContent = 'You failed the test. You have bad vision.';
        }
    }
}

inputField.addEventListener('keypress', function(event) {
    if (testStarted && event.key === 'Enter') {
        if (inputField.value === testHeading.textContent) {
            score++;
            scoreField.textContent = score + '/10';
            checkGameOver();
        }
        else if (inputField.value.length == 0) {
            return;
        }
        else {
            checkGameOver();
        }
    }
});

let red = document.querySelector('.red.btn');
let orange = document.querySelector('.orange.btn');
let yellow = document.querySelector('.yellow.btn');
let green = document.querySelector('.green.btn');
let blue = document.querySelector('.blue.btn');
let purple = document.querySelector('.purple.btn');
let pink = document.querySelector('.pink.btn');
let brown = document.querySelector('.brown.btn');
let black = document.querySelector('.black.btn');
let white = document.querySelector('.white.btn');
let grey = document.querySelector('.grey.btn');
colors = [red, orange, yellow, green, blue, purple, pink, brown, black, white, grey];

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
        document.body.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'white', 'grey');
        document.body.classList.add(colors[i].classList[0]);
    });
}