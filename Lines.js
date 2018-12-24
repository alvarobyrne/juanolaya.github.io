// https://soundcloud.com/nasa/cassini-saturn-radio-emissions-1
var pointList = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(50);

  for (var i=0; i<10; i++) {
    pointList.push(new Point(random(width-20), random(height-20), random(-0.01, 0.01), 
      						random(-0.01, 0.01), random(-0.01, 0.01), random(-0.01, 0.01) ));
  }
}

function draw() {
  background(50);

  for (var i=0; i<pointList.length; i++) {
    pointList[i].mover();
    noStroke();
    fill( 253, 106, 2, i*8+30);  
    triangle(pointList[i].location.x, pointList[i].location.y, width/4, height/4, width - width/4, height/4-25);
  }
	texto();
}

function texto(){
	noStroke();
	
	if(mouseIsPressed){
		fill(255,170,0,170);
	}
	else{
		fill(245,245,220,170);
	}
	textFont('Gotham');
	textAlign(CENTER);
	textStyle(BOLD);
	textSize(25);
	text("JUAN OLAYA", width/2, height - 4*(height/11) );
	
	textStyle(NORMAL);
	textSize(20);
	text("OpenProcessing", width/2, height - 3*(height/11) );
	
	text("Github Repository", width/2, height - 2*(height/11) );
	
	text("Youtube Channel", width/2, height - (height/11));
	
}