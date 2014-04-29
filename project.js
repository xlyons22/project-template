 title('Clown Killer');

//put variables here, just like khan academy
var clownX = 400;

var knifeY1 = 560;
var knifeThrown1 = 0;
var knifeX1 = 900;


var knifeY2 = 560;
var knifeThrown2 = 0;
var knifeX2 = 900;


var knifeY3 = 560;
var knifeThrown3 = 0;
var knifeX3 = 900;

var OK2Fire = 1;

var balloon = [

	{x:100, y: 100, size: 100},
	{x: 300, y: 100, size: 100},
	{x: 500, y: 100, size: 100}

];


// put functions here, just like kahn academy
var drawclown = function() {
	//knife moving1
	fill(219,227,227);
	rect(knifeX1, knifeY1, 5, 30);
	fill(255,0,255);
	rect(knifeX2, knifeY2, 5, 30);
	fill(0,45,234);
	rect(knifeX3, knifeY3, 5, 30);
	
	//knife fake
	rect(clownX+50,560,5,30);
	

	//clown
	fill(23,32,3);
	ellipse(clownX,600,150,42);
	ellipse(clownX,543,75,75);
	noStroke();
	fill(250,255,250);
	ellipse(clownX,543,50,50);
	ellipse(clownX,510,40,40);
	ellipse(clownX,480,30,30);
	ellipse(clownX+30,543,40,40);
	ellipse(clownX+50,543,30,30);
	ellipse(clownX-30,543,40,40);
	ellipse(clownX-50,543,30,30);
	

};

// this code is executed once when the program is started
var setup = function() {

    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);
};

// override draw function, by default it will be called 60 times per second
var draw = function() {

    // clear the screen
    background(255,0,0);
    // some drawing commands; feel free to change these
    fill(255, 320,0)
    // call a functon (defined up above)
    drawclown();
    for(var i = 0; i < balloon.length; i++){
		fill(100,234,236);
		ellipse(balloon[i].x, balloon[i].y, balloon[i].size, balloon[i].size);

    if (keyIsPressed) {
	if (keyCode === 65) {
		clownX -= 5;
        }
	if (keyCode === 68  ) {
		clownX += 5;
	} 
	//space bar
	if (keyCode === 32)  {
		if (OK2Fire === 1){
			OK2Fire = 2;

			if (knifeThrown1===0){
				knifeThrown1 = 1;
				knifeX1 = clownX;

			}else if (knifeThrown2===0){
				knifeThrown2 = 1;
				knifeX2 = clownX;

			}else if (knifeThrown3===0){
				knifeThrown3 = 1;
				knifeX3 = clownX;
			}
		}
	}
	
	
}

	if (OK2Fire > 1){
		OK2Fire += 1;

	}
	if (OK2Fire > 10){
		OK2Fire = 1;
	

	}
	

	if (knifeThrown1 === 1){
		knifeY1 -= 7;
		if (knifeY1<-16){
			knifeThrown1=0;
			knifeY1=560;
		}
	}

	if (knifeThrown2 === 1){
		knifeY2 -= 7;
		if (knifeY2<-16){
			knifeThrown2=0;
			knifeY2=560;
		}
	}

	if (knifeThrown3 === 1){
		knifeY3 -= 7;
		if (knifeY3<-16){
			knifeThrown3=0;
			knifeY3=560;
		}
	}
	
	

	}




};
