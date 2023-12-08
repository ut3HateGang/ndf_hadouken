import { snake } from '../snake/snake.mjs';

let konamiCount = 0;
let timer;

const keypress = (e) => {
  console.log('oui', e);
  if (e.keyCode === 83) {
    snake();
  }
  if (e.keyCode === 77) {
    console.log('mes');
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
        snake();
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
});
