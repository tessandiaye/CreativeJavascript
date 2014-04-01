var circleY;
var col = 0;

function setup() {

  createCanvas( 1440, 900);
  background(200);
  circleY=0;
  colorMode(HSB);

}

// a selective background underneath the balls
function draw() {
linesballs();
  circles();
  triangles();

}

//LINES  
function linesballs() { 
  line(120, 0, 120, 480);
  line(520, 0, 520, 480);
  fill(0);
  ellipse(135, circleY, 20, 20);
  ellipse(505, circleY, 20, 20);
  ellipse(15, circleY, 20, 20);
  ellipse(625, circleY, 20, 20);
  circleY=circleY+0.4;
}


//CIRCLES
function circles() {  
  for (var i=0; i<100; i++) {
    var r=random(50);
    fill(col, 255, 255);
    ellipse(720, i*40, width/1.65, mouseX+r);
    //320
  }
}

 //TRIANGLES
function triangles() {
  for (var y=0; y < height; y=y+25) {
    //right side
    //add another repeat line
    //for(int i=0; 
    triangle(100, y+20, 90, y, 110, y);
    triangle(70, y+20, 60, y, 80, y);
    triangle(40, y+20, 30, y, 50, y);
    //left side
    triangle(540, y+20, 530, y, 550, y);
    triangle(570, y+20, 560, y, 580, y);
    triangle(600, y+20, 590, y, 610, y);
  }
}

function mousePressed() {
  col+=20;
  col%=255;
  //println(col);
}

