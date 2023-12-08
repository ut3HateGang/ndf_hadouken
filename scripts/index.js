import { startgame } from '../radioactive-attack/script.mjs';
import { snake } from '../snake/snake.mjs';
let konamiCount = 0;
let timer;
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const keypress = (e) => {
  if (e.keyCode === 77) {
    openModal();
  }
  timer = clearTimeout(timer);
  timer = setTimeout(() => {
    konamiCount = 0;
  }, 3000);
  switch (konamiCount) {
    case 0:
    case 1:
      if (e.keyCode === 38) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 2:
      if (e.keyCode === 38) {
        break;
      }
    case 3:
      if (e.keyCode === 40) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 4:
    case 6:
      if (e.keyCode === 37) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 5:
    case 7:
      if (e.keyCode === 39) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 8:
      if (e.keyCode === 66) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 9:
      if (e.keyCode === 65) {
        console.log('KONAMI CODE');
        openModal();
      } else {
        konamiCount = 0;
      }
      break;
    default:
      break;
  }
};
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => keypress(e));

  const closeModalBtn = document.querySelector('.btn-close');

  // close modal function
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  // close the modal when the close button and overlay is clicked
  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // close modal when the Esc key is pressed
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  const btnRa = document.getElementById('btnRa');
  const btnSnake = document.getElementById('btnSnake');
  const btnTetris = document.getElementById('btnTetris');
  btnRa.addEventListener('click', () => {
    closeModal();
    startgame();
  });
  btnSnake.addEventListener('click', () => {
    closeModal();
    snake();
  });
  btnTetris.addEventListener('click', () => {
    window.location = 'https://tetris404-6wko0ee43-valps-projects.vercel.app/';
  });
  // open modal function

  // open modal event
});

//
