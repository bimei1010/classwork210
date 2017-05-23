//midterm - generative design

function setup() {
	createCanvas(640, 640);
	background("white");
	noStroke();
	
	var columns = 20;
	var rows = 20;
	var w = width/columns;
	var h = height/rows;
	var randomSize = random(-20, 20);
    
	for (var x = 0; x < width; x += w) {
		for (var y = 0; y < height; y += h) {
			var r = random(245,255);
            var g = random(200,255);
            var b = random(200,255);
            
            rectMode(CENTER);
            fill(r * x, g, b);
            
			rect(x, y, w + randomSize, w + randomSize);
            
            if ( y > height * 1/8) {
                // bead
                ellipse(x, y, w, h);
                fill(
                    random(0, 50),
                    random(150, 255),
                    random(0, 100)
                );
                rect(x, y, w/8, h);
                //inside 
                fill(
                    random(0, 255),
                    random(0, 100),
                    random(100, 200)
                 );
                
                ellipse(x, y, w/2, h/2);
                
            } else {
                
                rect(x, y, w, h);
                
            }
           
		}
	}
}