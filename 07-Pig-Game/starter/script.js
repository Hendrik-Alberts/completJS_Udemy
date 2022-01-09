'use strict';
//First player to reach 100 points win the game. If you roll 1 you loose all your points. Hold will stop player turn and go to next player. Note color changes!! Roll dice will be a random roll of the dice. Current score will keep accumilating until you press hold (then added to total score), or go to zero if 1 is rolled on dice. New Game: Dice dissapears everything set to zero.

//Global Execution Context Variables - Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  //Starting Conditions

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Dice roll's random number and displays to dice class
rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    const diceRoll = Number(Math.trunc(Math.random() * 6) + 1);

    //Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;

    //Check for 1.
    // Add dice to current score
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if score >= 100
    if (scores[activePlayer] >= 100) {
      //3. Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //4. Switch to next player
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', init);
