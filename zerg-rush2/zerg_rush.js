function createZergling() {
  const zergling = document.createElement('div');
  zergling.classList.add('zergling');
  zergling.textContent = 'O';
  const posX = Math.random() * window.innerWidth;
  zergling.style.left = posX + 'px';
  document.body.appendChild(zergling);

  const fallSpeed = 1 + Math.random() * 3;
  const interval = setInterval(() => {
    const posY = zergling.offsetTop;
    zergling.style.top = posY + fallSpeed + 'px';

    if (posY > window.innerHeight - 40) {
      clearInterval(interval);
      document.body.removeChild(zergling);
    }
  }, 20);

  zergling.addEventListener('click', () => {
    clearInterval(interval);
    document.body.removeChild(zergling);
  });
}

setInterval(createZergling, 1000);
