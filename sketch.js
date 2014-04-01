var circleY;
var col = 0;

function setup() {

  createCanvas( 1440, 900);
  background(200);
  circleY=0;
  colorMode(HSB);
  //colorMode(RGB);
  fill(0);
  text ("NO, WAIT HERE.", 8, 400);

}

// a selective background underneath the balls
function draw() {
  linesballs();
  circles();
  triangles();

}

//LINES  
function linesballs() { 
  line(350, 0, 350, 900);
  line(1090, 0, 1090, 900);
  fill(0);
  ellipse(365, circleY, 20, 20);
  ellipse(1075, circleY, 20, 20);
  ellipse(242, circleY, 20, 20);
  ellipse(1198, circleY, 20, 20);
  circleY=circleY+1;
}


//CIRCLES
function circles() {  
   for (var i=0; i<100; i++) {
   var r=random(50);
   fill(255, 255, 255);
   // fill(col, 255, 255);
    ellipse(720, i*40, width/2, mouseX+r);
  
  }
}

 //TRIANGLES
function triangles() {
  for (var y=0; y < height; y=y+25) {
    //right side
    //add another repeat line
    //for(int i=0; 
    triangle(330, y+20, 320, y, 340, y);
    triangle(300, y+20, 290, y, 310, y);
    triangle(270, y+20, 260, y, 280, y);
    //left side
    triangle(1110, y+20, 1100, y, 1120, y);
    triangle(1140, y+20, 1130, y, 1150, y);
    triangle(1170, y+20, 1160, y, 1180, y);
  }
}

function mousePressed() {
  col+=20;
  col%=255;
  //println(col);
}

