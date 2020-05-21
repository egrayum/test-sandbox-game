var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
var i;
var x;
var y;
var world = [];
var randY = [200, 250, 300];
var depth;
var prevDepth;
function init() {
 c.width = 800;
 c.height = 600;
 ctx.fillStyle = "#05a0fb";
 ctx.fillRect(0, 0, c.width, c.height);
 drawWorld();
}
function block(X, Y, Length, Color) {
 ctx.fillStyle = Color;
 ctx.fillRect(X, Y, Length, Length);
}
function drawWorld() {
 y = randY[Math.floor(Math.random() * Math.floor(randY.length))];
 prevDepth = y;
 for (x = 0; x < 800; x += 50) {
  depth = 0;
  y = prevDepth + ((Math.floor(Math.random() * Math.floor(3)) - 1) * 50);
  new block(x, y, 50, "#179d06");
  for (y = y + 50; y < 600; y += 50) {
   new block(x, y, 50, "#7c4f27");
   depth++;
  }  
 }
}
