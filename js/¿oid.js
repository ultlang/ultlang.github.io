var canvas = document.getElementById("canvas");
canvas.width = 1024;
canvas.height = 1024;
var c = canvas.getContext('2d');

tileData = [[0,0]]
tileGraphics = [
`
################
##::##::::##::##
######::::######
##::::----::::##
##::::----::::##
######::::######
##::##::::##::##
################
`]
format = ["#","/",":","-","."]
// palette format: # / : - . 
pals = ["#bbbbbb#999999#666666#333333#000000","#bbbb00#999900#666600#333300#000000"]

function cc() {
	c.clearRect(0,0,canvas.height,canvas.width);
}
//format.indexOf( 
function drawTile(tilenum, pal, xpos, ypos) { // X AND Y ARE IN-GAME COORDS, NOT ACTUAL ONES
	for (x = 0; x < 8; x++) {
		for (y = 0; y < 8; y++) {
			col = format.indexOf( tileGraphics[tilenum].replace(/[\n\r]/g, "").charAt(x*16 + y*2));
			c.fillStyle = pals[pal].substring( col*7, col*7 + 7  )
			c.fillRect(xpos*64 + x*8,ypos*64 + y*8,8,8);
		}
	}
} drawTile(0,0,0,0);drawTile(0,0,1,0);drawTile(0,0,2,0);drawTile(0,1,1,1);