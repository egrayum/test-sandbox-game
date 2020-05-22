var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
var i;
var x;
var y;
var world = [];
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
function init() {
 c.width = 800;
 c.height = 600;
 ctx.fillStyle = "#05a0fb";
 ctx.fillRect(0, 0, c.width, c.height);
 makeWorld();
 window.setInterval(drawWorld, 20);
}
function block(X, Y, Length, Color) {
 ctx.fillStyle = Color;
 ctx.fillRect(X, Y, Length, Length);
}
function makeWorld() {
 depth = 0;
 y = randY[Math.floor(Math.random() * Math.floor(randY.length))];
 prevDepth = y;
 for (x = -1000; x < 1800; x += 50) {
  depth = 0;
  y = prevDepth + ((Math.floor(Math.random() * Math.floor(3)) - 1) * 50);
  new block(x, y, 50, "#179d06");
  prevDepth = y;
  world[world.length] = [x, y, "#179d06"];
  for (y = y + 50; y < 1600; y += 50) {
   depth++;
   stoneOrDirt = Math.floor(Math.random() * Math.floor(5));
   if (depth < 5) {
    //dirt
    new block(x, y, 50, "#7c4f27");
   }
   if (depth > 4) {
    if (stoneOrDirt == 1) {
     new block(x, y, 50, "#7c4f27");
    } else {
     new block(x, y, 50, "#4d4d4d"); 
    }
   }
   world[world.length] = [x, y, "#7c4f27"];
  }  
 }
}
function drawWorld() {
 ctx.fillStyle = "#05a0fb";
 ctx.fillRect(0, 0, c.width, c.height);
 document.addEventListener("keydown", function(event) {
  if (event.keyCode == 38 && moveDistY < 1600) {
   moveDistY += 0.15;  
  } else if (event.keyCode == 40 && moveDistY > -400) {
   moveDistY -= 0.15; 
  }
  if (event.keyCode == 37 && moveDistX < 1800) {
   moveDistX += 0.15;
  } else if (event.keyCode == 39 && moveDistX > -200) {
   moveDistX -= 0.15;
  }
 })
 for (i = 0; i < world.length; i++) {
  drawingX = world[i][0] + moveDistX;
  drawingY = world[i][1] + moveDistY;
  drawingColor = world[i][2];
  new block(drawingX, drawingY, 50, drawingColor);
 }
}
