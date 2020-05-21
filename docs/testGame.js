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
 drawWorld();
}
function sq(X, Y, Length, Color) {
 ctx.fillStyle = Color;
 ctx.fillRect(X, Y, Length, Length);
}
function drawWorld() {
  for (y = 100; y < 400; y += 50) {
   new sq(x, y, 50, "#000");
  }
 }
