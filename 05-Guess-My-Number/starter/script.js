'use strict';
//we can select html elements by class

// How to select elements
//console.log(document.querySelector('.message').textContent);

// ************** What's the DOM and DOM Manipulation **********************
//Document is the entry point to the DOM. We need it to start selecting elements.

// ************ Selecting & Manipulating Elements ***************************

//We can set the content of the element

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;

//Define secret number.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessasge = function (message) {
  document.querySelector('.message').textContent = message;
};
//When we select an input field we use the .value keyword
document.querySelector('.guess').value = '';
console.log(document.querySelector('.guess').value);

// *************** Handling Click Events **************************
//An event listerner listens for some event on the screen. Like a mouse click, keyboard entry etc. When it 'hears' it, it will do an action.
//We change it to Number because all inputs will be strings. We have to do this to compare thnis number with a randomly selected number later.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //First we have to see if there is a value.
  if (!guess) {
    displayMessasge('⛔️ No Number!');

    //When player wins this will run
  } else if (guess === secretNumber) {
    displayMessasge('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessasge(guess > secretNumber ? '🙌  Too High' : '⬇️ Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessasge('😭 You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//************ This is STATE ****************** */
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessasge('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
});
//************************************************** */
