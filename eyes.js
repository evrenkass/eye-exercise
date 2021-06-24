const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  // mouse position relative
  // to screen width and height
  const rx = event.clientX / window.innerWidth;
  const ry = event.clientY / window.innerHeight;

  // convert to percentages
  const x = (rx * 100) + '%';
  const y = (ry * 100) + '%';

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
