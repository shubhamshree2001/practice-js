// colour change solution 1
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});

// form submission solution 2

// key point 1
// when form gets subimitted there is two ways --> get or post

// when form get submitted its values goes to the url or server it is by default thet we need to stop

const form = document.querySelector('form');
// if we will declare height outside the event it will capture the empty event
//const height = document.querySelector('#height').value
// there are different types of event listener like ("click", "submit") which we will study later
form.addEventListener('submit', function (e) {
  e.preventDefault(); //this will stops the default working of each event

  // now here declare the height and wight so that it captures the value

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter the valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
  }
});

// need time every sec submission solution 3


// both the method does the same thing
//const clock = document.getElementById('clock');
const clock = document.querySelector('#clock');

// let date = new Date();

// console.log(date.toLocaleDateString());

// a method that runs in every certain interval
// this method is required when you need to run certain thing after every certain intervals
// here we need time after certain intervals

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // callback function , time


// guess the number between 1 to 100 submission solution 4

// generate random numbers between 1 to 100

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInpt = document.querySelector('#guessField');
// use hash for id

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHighValue = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let noOfGuess = 1;

let playGame = true;

// when play game is true we will playthe game
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // blocking default when user input
    const guesedNumber = parseInt(userInpt.value);
    validateGuessedNumber(guesedNumber);
  });
}

// this function check for the number entered is correct
function validateGuessedNumber(number) {
  if (isNan(number)) {
    alert('please enter a valid number');
  } else if (number < 1) {
    alert('please enter a valid number');
  } else if (number > 100) {
    alert('please enter a valid number');
  } else {
    prevGuess.push(number); // it will add all the guess in an array
    if (noOfGuess === 11) {
      displayGuess(number);
      displayMessage(`Game over. Random number was : ${randomNumber}`);
      endGame();
    } else {
      displayGuess(number);
      checkGuess(number);
    }
  }
}

// this function willl check the guessed number with the random no. generated
function checkGuess(number) {
  if (number === randomNumber) {
    displayMessage(`You guessed it : ${randomNumber}`);
    endGame();
  }
  if (number < randomNumber) {
    displayMessage(`Number is low`);
  }
  if (number > randomNumber) {
    displayMessage(`Number is high`);
  }
}

// it will display all the things
function displayGuess(number) {
  userInpt.value = ''; // reset the input field
  guessSlot.innerHTML += `${number}  `; // showing the guessed number
  noOfGuess++; // increasing the guss count
  remaining.innerHTML = `${11 - noOfGuess}`; // updating the guess left count
}

function displayMessage(message) {
  lowOrHighValue.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInpt.value = ''; // reseting inout filet
  userInpt.setAttribute('disabled', ''); // restrincting user to enter
  // here creating new button to show option for start new game
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  // using the button creaed to play new game
  newGameButton.addEventListener('click',function (e) {
    // resetting all the fields
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    noOfGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - noOfGuess}`;
    userInpt.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

