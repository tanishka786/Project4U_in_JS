let randomNumber = parseInt(Math.random() * 100 + 1);

const submit        = document.querySelector('#subt');
const userInput     = document.querySelector('#guessField');
const remaining     = document.getElementById('remaining-count');
const guessCount    = document.getElementById('guess-count');
const chipsWrap     = document.getElementById('chips');
const messageBox    = document.getElementById('message');
const restartBtn    = document.getElementById('restart-btn');

let prevGuess = [];
let numGuess  = 0;
let playGame  = true;

function setMessage(text, type = '') {
    messageBox.textContent = text;
    messageBox.className   = 'message-box' + (type ? ' ' + type : '');
}

function addChip(num) {
    const chip = document.createElement('span');
    chip.className   = 'chip';
    chip.textContent = num;
    chipsWrap.appendChild(chip);
}

submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (!playGame) return;

    const guess = parseInt(userInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('⚠️ Please enter a valid number between 1 and 100.');
        return;
    }

    numGuess++;
    prevGuess.push(guess);
    userInput.value = '';
    addChip(guess);

    guessCount.textContent   = numGuess;
    remaining.textContent    = Math.max(0, 10 - numGuess);

    if (guess === randomNumber) {
        setMessage(`🎉 Correct! The number was ${randomNumber}. Got it in ${numGuess} guess${numGuess > 1 ? 'es' : ''}!`, 'win');
        endGame();
    } else if (numGuess >= 10) {
        setMessage(`💀 Game Over! The number was ${randomNumber}.`, 'lose');
        endGame();
    } else if (guess < randomNumber) {
        setMessage('📈 Too low! Try going higher.', 'low');
    } else {
        setMessage('📉 Too high! Try going lower.', 'high');
    }
});

function endGame() {
    playGame = false;
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    restartBtn.classList.add('show');
}

restartBtn.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess    = [];
    numGuess     = 0;
    playGame     = true;

    chipsWrap.innerHTML         = '';
    guessCount.textContent      = 0;
    remaining.textContent       = 10;
    userInput.value             = '';
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    restartBtn.classList.remove('show');
    setMessage('Pick a number and take a shot! 🎯');
});
