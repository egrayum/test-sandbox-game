var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
function init() {
 c.width = 800;
 c.height = 600;
 ctx.fillStyle = "#666";
 ctx.fillRect(0, 0, c.width, c.height);
}
