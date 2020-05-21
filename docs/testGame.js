var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
var i;
var x;
var y;
var world = [];
var randY = [100, 150, 200];
function init() {
 c.width = 800;
 c.height = 600;
 ctx.fillStyle = "#05aofb";
 ctx.fillRect(0, 0, c.width, c.height);
 drawWorld();
}
function sq(X, Y, Length, Color) {
 ctx.fillStyle = Color;
 ctx.fillRect(X, Y, Length, Length);
}
function drawWorld() {
 for (x = 50; x < 750; x += 50) {
  for (y = randY[Math.floor(Math.random() * Math.floor(randY.length))]; y < 500; y += 50) {
   new sq(x, y, 50, "#000");
  }  
 }
}
