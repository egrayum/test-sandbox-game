var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
var i;
var x = 100;
var y = 100;
var world = [];
var randY = [100, 150, 200];
function init() {
 c.width = 800;
 c.height = 600;
 ctx.fillStyle = "#666";
 ctx.fillRect(0, 0, c.width, c.height);
 ctx.strokeStyle = "#000";
 ctx.lineWidth = 10;
 ctx.moveTo(50, 100);
 ctx.lineTo(750, 100);
 drawWorld();
}
function sq(X, Y, Length, Color) {
 ctx.fillStyle = Color;
 ctx.fillRect(X, Y, Length, Length);
}
function drawWorld() {
  for (y = randY[Math.floor(Math.random() * Math.floor(randY.length))]; y < 500; y += 50) {
   new sq(x, y, 50, "#000");
  }
 }
