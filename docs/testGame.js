var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
var i;
var x;
var y;
var world = [];
var surface = [];
var randY = [200, 250, 300];
var prevDepth;
var moveDistY = 0;
var i;
var j;
var drawingX;
var drawingY;
var drawingColor;
var moveDistX = 0;
var depth;
var stoneOrDirt;
var pX = 375;
var pY = 500;
var pLength = 50;
var pYVel = 0;
var pXVel = 0;
var touchingWorld = false;
var key;
document.addEventListener("keyDown", function(event) {
 if (event.keyCode == 38) {
  key = "UP";
 } else if (event.keyCode == 39) {
 } else {
  key = "none";
 }
})
// senses if you are touching the world
function collision() {
 if (275 > drawingY && 375 > drawingX - 1 && 375 < drawingX + 51) {
  touchingWorld = true;
  pYVel = 0;
   pYVel += 1;
 } else {
  touchingWorld = false;
  pYVel -= 0.0004;
 }
}
// the important stuff
 /* function platform(gravity) {
  
 } */
function player() {
 ctx.fillStyle = "#000";
 ctx.fillRect(375, 275, pLength, pLength);
}
// it's the init function. the name says it all.
function init() {
 c.width = 800;
 c.height = 600;
 ctx.fillStyle = "#05a0fb";
 ctx.fillRect(0, 0, c.width, c.height);
 makeWorld();
 alert("version 0.027");
 window.setInterval(drawWorld, 20);
}
// for making new blocks
function block(X, Y, Length, Color) {
 ctx.fillStyle = Color;
 ctx.fillRect(X, Y, Length, Length);
}
// makes the random world
function makeWorld() {
 depth = 0;
 y = randY[Math.floor(Math.random() * Math.floor(randY.length))];
 prevDepth = y;
 for (x = -1000; x < 1800; x += 50) {
  depth = 0;
  // this is for SMoothING the terrain
  y = prevDepth + ((Math.floor(Math.random() * Math.floor(3)) - 1) * 50);
  // for actually generating it
  new block(x, y, 50, "#179d06");
  prevDepth = y;
  world[world.length] = [x, y, "#179d06"];
  for (y = y + 50; y < 1600; y += 50) {
   depth++;
   stoneOrDirt = Math.floor(Math.random() * Math.floor(depth));
   if (depth < 5) {
    //dirt
    new block(x, y, 50, "#7c4f27");
    world[world.length] = [x, y, "#7c4f27"];
   }
   if (depth > 4) {
    if (stoneOrDirt == 1) {
     new block(x, y, 50, "#7c4f27");
     world[world.length] = [x, y, "#7c4f27"];
    } else {
     new block(x, y, 50, "#4d4d4d"); 
     world[world.length] = [x, y, "#4d4d4d"];
    }
   }
  }  
 }
}
function drawWorld() {
 ctx.fillStyle = "#05a0fb";
 ctx.fillRect(0, 0, c.width, c.height);
 for (i = 0; i < world.length; i++) {
  drawingX = world[i][0] + pX;
  drawingY = world[i][1] + pY;
  drawingColor = world[i][2];
  new block(drawingX, drawingY, 50, drawingColor);
  collision();
  // platform(-1);
 }
 pX += pXVel;
 pY += pYVel;
 player();
}
