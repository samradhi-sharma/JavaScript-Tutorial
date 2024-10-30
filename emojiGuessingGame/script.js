const emojiDetails = [
    { description: 'smiling face with sunglasses', emoji: '😎' },
    { description: 'thumbs up', emoji: '👍' },
    { description: 'heart eyes', emoji: '😍' },
    { description: 'crying face', emoji: '😭' },
    { description: 'party popper', emoji: '🎉' }
];

let currentEmojiIndex = 0;
let score = 0;
let seconds =30;
let timer;   

// this is DOM manipulation by which you can manipulate html content in javascript
// so here we are calling them from index.html in js in the below given manner
const timerElement = document.getElementById("timer");
const guessInput = document.getElementById('guess-input');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

// Display the current emoji
function displayEmoji() {
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent= `Time: ${seconds}s`
}

// Check if the user's guess is correct
function checkGuess() {
    // the below line is written if in case user give space in between while writing the emoji name or else
    // in lowercase for all this this won't give any error
    const guess = guessInput.value.trim().toLowerCase(); 
    const correctEmojiDescription = emojiDetails[currentEmojiIndex].description;

    if (guess === correctEmojiDescription) {
        resultElement.textContent = 'Correct!';
        score++;
    } else {
        resultElement.textContent = 'Incorrect!';
    }

    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = '';
    guessInput.focus();
    nextEmoji();
}

// Move to the next emoji
function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(() =>{ resultElement.textContent = '';}, 1000)

    if (currentEmojiIndex === emojiDetails.length) {
        currentEmojiIndex = 0;
    }

    displayEmoji();
}

// Add event listener to check the guess when Enter is pressed
document.getElementById('guess-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// Initialize the game when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayEmoji();
    startTimer();
});


function startTimer(){
    timer = setInterval(()=>{
        seconds--;
        timerElement.textContent= `Time: ${seconds}s`;
        if(seconds <= 0){
            endGame();
        }
    }, 1000);
}

function endGame(){
    clearInterval(timer);
    guessInput.disabled = true;
    timerElement.textContent="";
}