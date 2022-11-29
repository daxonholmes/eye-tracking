const balls = document.getElementsByClassName('ball');
// Track mouse movement
document.onmousemove = (event) => {

  // Get position of mouse
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // Move the eyes based on mouse position

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
