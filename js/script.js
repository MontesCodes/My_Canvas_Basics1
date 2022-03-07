'use strict';
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = 'white';
// ctx.fillRect(10, 20, 150, 50);

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};
canvas.addEventListener('click', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
  //   console.log(event);
});

canvas.addEventListener('mousemove', function () {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
});

function drawCircle() {
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  console.log(ctx);
}
drawCircle();
