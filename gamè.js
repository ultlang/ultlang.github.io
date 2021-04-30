var canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 1000;
var c = canvas.getContext('2d');

var susChiptune = document.createElement('audio');
susChiptune.src = "audio/sus.wav";
susChiptune.autoplay = true;
susChiptune.volume = 0.4;
susChiptune.loop = true;
susChiptune.play(); 

var kill = document.createElement('audio');
kill.src = "audio/kill.mp3";


function setup() {
	inProgress = true;
	win = false;
	clicks = 0;
	size = 16;
	checked = [];
	i = 0;
	intendedMineCount = 24;
	markCount = intendedMineCount;
	document.getElementById("marknum").innerHTML = "marks left: " + markCount;
	mineCount = 0;
	field = [];
	seenField = [];
	for (x = 0; x < size; x++) {
		field[x] = [];
		seenField[x] = [];
		for (y = 0; y < size; y++) {
			field[x][y] = "";
			seenField[x][y] = "";
		}
	}
	while ( mineCount < intendedMineCount ) {
		x = Math.floor( Math.random() * size );
		y = Math.floor( Math.random() * size );
		if ( field[x][y] != "ඞ" ) {
			field[x][y] = "ඞ";
			mineCount++;
		}
	}
	window.requestAnimationFrame(loop);
} setup();

function cc() {
	c.clearRect(0,0,canvas.height,canvas.width);
}

function removeDuplicates2D(arr) { // https://stackoverflow.com/questions/20339466/how-to-remove-duplicates-from-a-two-dimensional-array
    var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}

function clickoid(x, y) {
	xplus = Math.min( size-1, x + 1 );
	xminus = Math.max( 0, x - 1 );
	yplus = Math.min( size-1, y + 1 );
	yminus = Math.max( 0, y - 1 );
	if ( seenField[x][y] == "" && inProgress) {
		if ( field[x][y] == "ඞ") {
			if ( clicks == 0 ) {
				field[x][y] = 0;
				mineCount--;

				while ( mineCount < intendedMineCount ) {
					xpos = Math.floor( Math.random() * size );
					ypos = Math.floor( Math.random() * size );
					if ( field[xpos][ypos] != "ඞ" && ( x != xpos || y != ypos ) ) {
						field[xpos][ypos] = "ඞ";
						mineCount++;
					}
				}
				clickoid(x,y);
			} else {
			seenField[x][y] = "ඞ"
			kill.currentTime = 0;
			kill.play();
			setTimeout("inProgress = false;",1200);
			}
		} else {
			neighbours = [ [xminus,y], [xminus,yminus], [x,yminus], [xplus,yminus], [xplus,y], [xplus,yplus], [x,yplus], [xminus,yplus] ]
			neighbours = [... new Set(neighbours)];
			neighbours = removeDuplicates2D(neighbours);


			minesNearby = 0;
			for (cell of neighbours) {
				if (field[cell[0]][cell[1]] == "ඞ") {
					minesNearby++;
				}
			}
			seenField[x][y] = minesNearby;
			checked.push( x + "," + y );
			if (seenField[x][y] == 0) {
				for (cell of neighbours) {
					if (! ( checked.includes( cell[0] + "," + cell[1] ) ) ) {
						clickoid(cell[0], cell[1]);
					}
				}
			}
		}
		clicks++;
	}

	if ( ! inProgress ) {
		setup();
	}
}

function markoid(x, y) {
	if ( seenField [x][y] == "" && markCount > 0 ) {
		seenField[x][y] = "🚩︎";
		markCount--;

	} else if ( seenField [x][y] == "🚩︎" ) {
		seenField[x][y] = "";
		markCount++;
	}
	document.getElementById("marknum").innerHTML = "marks left: " + markCount;
}

function shadedSquare(fill, upright, downleft, size, posx, posy, lwidth, text, textcol) {
	c.fillStyle = fill;
	c.lineWidth = lwidth;
	c.strokeStyle = upright;
	c.fillRect(posx, posy, posx+size, posy+size);
	c.strokeRect(posx+(lwidth/2), posy+(lwidth/2), posx+size-(lwidth/2), posy+size-(lwidth/2));
	c.beginPath();
	c.moveTo(posx,posy+size-(lwidth/2));
	c.lineTo(posx+size-(lwidth/2),posy+size-(lwidth/2));
	c.lineTo(posx+size-(lwidth/2),posy+(lwidth));
	c.strokeStyle = downleft;
	c.stroke();
	c.font = size/3*2 + "px Arial";
	c.fillStyle = textcol;
	c.textAlign = "center";
	c.textBaseline = "middle"
	c.fillText(text,posx+size/2,posy+size/2);
}

function loop() {
	cc();
	textcol = { "": "#aaa", 0: "#444", 1: "#000084", 2: "#238714", 3: "#bc0505", 4: "#7e057e", 5: "#7e057e", 6: "#7e057e", 7: "#7e057e", 8: "#7e057e", "ඞ": "#000", "🚩︎" : "#000" }
	if (inProgress) {
		for (x = 0; x < size; x++) {
			for (y = 0; y < size; y++) {
				shadedSquare("#f5b0e7","#b16795","#6c1d45",canvas.width/size,x*canvas.width/size,y*canvas.height/size, 6, seenField[x][y], textcol[seenField[x][y]]);
			}
		}
	} else {
		c.fillStyle = "#f5b0e7";
		c.fillRect(0,0,1000,1000);
		c.fillStyle = "#000";
		c.font = 100 + "px Arial";
		c.textAlign = "center";
		c.textBaseline = "middle"
		c.fillText("click to play again",500,500)
	}

	window.requestAnimationFrame(loop);
}

canvas.addEventListener('mousedown', function(event) {

}, false);

canvas.addEventListener('mouseup', function(event) {

	elemLeft = canvas.offsetLeft + canvas.clientLeft,
	elemTop = canvas.offsetTop + canvas.clientTop,
	x = event.clientX - elemLeft;
	y = event.clientY - elemTop;
	clickoid(Math.floor(x / (500/size)) , Math.floor(y / (500/size)));
}, false);

canvas.addEventListener('contextmenu', function(event) {


	elemLeft = canvas.offsetLeft + canvas.clientLeft,
	elemTop = canvas.offsetTop + canvas.clientTop,
	x = event.clientX - elemLeft;
	y = event.clientY - elemTop;
	markoid(Math.floor(x / (500/size)) , Math.floor(y / (500/size)));
	event.preventDefault();
}, false);

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	// true for mobile device
	document.write("mobile device");
  }else{
	// false for not mobile device
	document.write("not mobile device");
  }