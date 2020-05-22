var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
var i;
var x;
var y;
var world = [];
var randY = [200, 250, 300];
var prevDepth;
var moveDist = 0;
var i;
var j;
var drawingX;
var drawingY;
var drawingColor;
function init() {
 c.width = 800;
 c.height = 600;
 ctx.fillStyle = "#05a0fb";
 ctx.fillRect(0, 0, c.width, c.height);
 makeWorld();
 window.setInterval(drawWorld, 25);
}
function block(X, Y, Length, Color) {
 ctx.fillStyle = Color;
 ctx.fillRect(X, Y, Length, Length);
}
function makeWorld() {
 y = randY[Math.floor(Math.random() * Math.floor(randY.length))];
 prevDepth = y;
 for (x = 0; x < 800; x += 50) {
  y = prevDepth + ((Math.floor(Math.random() * Math.floor(3)) - 1) * 50);
  new block(x, y, 50, "#179d06");
  prevDepth = y;
  world[world.length] = [x, y, "#179d06"];
  for (y = y + 50; y < 600; y += 50) {
   new block(x, y, 50, "#7c4f27");
   world[world.length] = [x, y, "#7c4f27"];
  }  
 }
}
function drawWorld() {
 ctx.fillStyle = "#05a0fb";
 ctx.fillRect(0, 0, c.width, c.height);
 document.addEventListener("keydown", function(event) {
  if (event.keyCode == 38) {
   moveDist = 50;  
  } else if (event.keyCode == 40) {
   moveDist = -50; 
  }
 })
 document.addEventListener("keyup", function(event) {
  if (event.keyCode == 38) {
   moveDist = 0;  
  } else if (event.keyCode == 40) {
   moveDist = 0; 
  }
 })
 for (i = 0; i < world.length; i++) {
  drawingX = world[i][0];
  drawingY = world[i][1] + moveDist;
  drawingColor = world[i][2];
  new block(drawingX, drawingY, 50, drawingColor);
 }
}
