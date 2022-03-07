'use strict';
const canvas = document.gerElementById('canvas1');
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

ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.lineWidth - 5;
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.strokeStyle();
ctx.fill();
console.log(ctx);
