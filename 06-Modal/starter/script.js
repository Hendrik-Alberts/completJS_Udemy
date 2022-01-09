'use strict';
//Started by assigning all the elements I'm selecting to variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//Loop through the btnOpenModal and add a click event to eace.

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

//Add eventlistener for click on x to close modal. Addd the 'hidden' classlist to both again.

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Keyboard events are global events. So we usually code then for the whole program.
//Set escape key to close modaleees
document.addEventListener('keydown', function (e) {
  //console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    {
      closeModal();
    }
  }
});
//keydown, keypress(contin), keyup
