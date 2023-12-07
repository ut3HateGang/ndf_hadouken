let konamiCount = 0;
// haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
const keypress = (e) => {
  console.log(e.keyCode);
  console.log('konamiCount =>', konamiCount);
  switch (konamiCount) {
    case 0:
    case 1:
      //haut
      // on veut le keyCode 38
      console.log('oui');
      if (e.keyCode === 38) {
        konamiCount++;
      } else {
        console.log('Pas dans le konami code');
        konamiCount = 0;
      }
      break;
    case 2:
    case 3:
      //bas
      // on veut le keyCode 40
      if (e.keyCode === 40) {
        konamiCount++;
      } else {
        console.log('Pas dans le konami code');
        konamiCount = 0;
      }
      break;
    case 4:
    case 6:
      // on veut le keyCode 37
      //gauche
      if (e.keyCode === 37) {
        konamiCount++;
      } else {
        console.log('Pas dans le konami code');
        konamiCount = 0;
      }
      break;
    case 5:
    case 7:
      // on veut le keyCode 39
      //droite
      if (e.keyCode === 39) {
        konamiCount++;
      } else {
        console.log('Pas dans le konami code');
        konamiCount = 0;
      }
      break;
    case 8:
      //b
      // on veut le keyCode 66
      if (e.keyCode === 66) {
        konamiCount++;
      } else {
        console.log('Pas dans le konami code');
        konamiCount = 0;
      }
      break;
    case 9:
      //a
      // on veut le keyCode 65
      if (e.keyCode === 65) {
        console.log('Fin du konami code gg ');
      } else {
        console.log('Pas dans le konami code');
        konamiCount = 0;
      }
      break;
    default:
      console.log('default');
      break;
  }
};
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => keypress(e));
});
