function setup(){
    createCanvas(640, 640);
    background('LIGHTCYAN');
    var e = (255, 243, 255);
    var b = (11, 55, 181);
   
    var y = 120;
    var x = 150;
    noStroke();
    fill(240, 245, 102);
    rect(120, 100, 400, 440);
    
    //eyebrow left
    strokeWeight(5);
    stroke(0, 0, 0);
    line(230, y, 240, x);
    line(250, y, 250, x);
    line(270, y, 260, x);
    //eyebrow right
    line(350, y, 360, x);
    line(370, y, 370, x);
    line(390, y, 380, x);
    
    
    //draw eyes
    strokeWeight(4);
    stroke(b);
    //the biggest left one
    fill(e);
    ellipse(260, 200, 110, 120);
    //the biggest right one
    ellipse(380, 200, 110, 120);
    
    //the medium letf one
    fill(89, 241, 255);
    ellipse(280, 200, 50, 55);
    
    //the medium right one
    ellipse(360, 200, 50, 55);
    
    //the smallest left one
    fill(b)
    ellipse(280, 200, 15, 20);
    
    //the smallest right one
    ellipse(360, 200, 15, 20);
    
    //draw nose
    noStroke();
    fill(255, 55, 121);
    ellipse(320, 250, 60, 60);
    
    //mouth
    fill(56, 25, 3);
    arc(320, 300, 280, 200, 0, PI);
    
    //teeth
    fill(e)
    rect(260, 300, 50, 50);
    rect(330, 300, 50, 50);
    
    //bubble
    fill(9, 255, 7);
    ellipse(170, 130, 40, 50);
    ellipse(150, 200, 30, 40);
    ellipse(150, 380, 30, 40);
    ellipse(180, 450, 60, 70);
    ellipse(480, 140, 30, 40);
    ellipse(470, 380, 60, 70);
    ellipse(460, 450, 30, 30);
    
    //neck
    fill(208, 55, 7);
    stroke(0, 0, 0);
    arc(320, 400, 80, 80, 0, PI);
    
    fill(208, 55, 7);
    //right conner
    line(340, 440, 350, 460);
    //right bottom
    line(350, 460, 330, 510);
    //letf conner
    line(300, 440, 290, 460);
    //letf bottom
    line(290, 460, 330, 510);
    
    
    
    
    
    
    
    
    
    
    
}