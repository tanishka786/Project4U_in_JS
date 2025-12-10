const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    });
}


// for adding the range of number that is valid
function validateGuess(guess) {
    // if  entered number in Nan
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// checking how near or far the guessed value is
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('Your guessed it right');
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage('Number is Tooo Low');
    }
    else if (guess > randomNumber) {
        displayMessage('Number is Tooo High');
    }
}

// to calculate  no of guesses left for the user to guess a number
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}    `;
    numGuess++;
    remaining.innerHTML = `${12 - numGuess}`;
}

//for printing the msg of valid guess 
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

//func to start new game or to end game
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {

        // resting all variables
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${12 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}

