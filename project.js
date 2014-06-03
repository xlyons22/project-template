 title('Clown Killer');

 //put variables here, just like khan academy
 var clownX = 400;
 
 var knife = [

 	{
 		x: 900,
 		y: 560,
 		thrown: 0
 	}, {
 		x: 900,
 		y: 560,
 		thrown: 0
 	}, {
 		x: 900,
 		y: 560,
 		thrown: 0
 	}
 ];
 //var knifeY1 = 560;
 //var knifeThrown1 = 0;
 //var knifeX1 = 900;


 //var knifeY2 = 560;
 //var knifeThrown2 = 0;
 //var knifeX2 = 900;


 //var knifeY3 = 560;
 //var knifeThrown3 = 0;
 //var knifeX3 = 900;



 var OK2Fire = 1;



 var balloon = [

 	{
 		x: 200,
 		y: 100,
 		size: 100
 	}, {
 		x: 400,
 		y: 100,
 		size: 100
 	}, {
 		x: 600,
 		y: 100,
 		size: 100
 	}

 ];


 // put functions here, just like kahn academy
 var drawclown = function () {
 	//knife moving1
 	fill(255, 0, 0);
 	rect(knife[0].x, knife[0].y, 5, 30);
 	fill(255, 143, 57);
 	rect(knife[1].x, knife[1].y, 5, 30);
 	fill(0, 45, 234);
 	rect(knife[2], knife[2].y, 5, 30);

 	//knife fake
 	rect(clownX + 50, 560, 5, 30);


 	//clown
 	fill(223, 32, 3);
 	ellipse(clownX, 600, 150, 42);
 	fill(130, 23, 100);
 	ellipse(clownX, 543, 75, 75);
 	noStroke();
 	fill(250, 255, 250);
 	ellipse(clownX, 543, 50, 50);
 	ellipse(clownX, 510, 40, 40);
 	ellipse(clownX, 480, 30, 30);
 	ellipse(clownX + 30, 543, 40, 40);
 	ellipse(clownX + 50, 543, 30, 30);
 	ellipse(clownX - 30, 543, 40, 40);
 	ellipse(clownX - 50, 543, 30, 30);


 };

 // this code is executed once when the program is started
 var setup = function () {

 	// set up the size of the canvas (you probably don't want to change this!)
 	size(800, 600);
 };

 // override draw function, by default it will be called 60 times per second
 var draw = function () {

 	// clear the screen
 	background(0, 0, 0);
 	// some drawing commands; feel free to change these
 	fill(255, 320, 0)
 	// call a functon (defined up above)
 	drawclown();
 	for (var i = 0; i < balloon.length; i++) {
 		fill(100, 234, 236);
 		ellipse(balloon[i].x, balloon[i].y, balloon[i].size, balloon[i].size);

 		if (keyIsPressed) {
 			if (keyCode === 65) {
 				clownX -= 5;
 			}
 			if (keyCode === 68) {
 				clownX += 5;
 			}
 			//space bar
 			if (keyCode === 32) {
 				if (OK2Fire === 1) {
 					OK2Fire = 2;

 					if (knife[0].thrown === 0) {
 						knife[0].thrown = 1;
 						knife[0].x = clownX;

 					} else if (knife[1].thrown === 0) {
 						knife[1].thrown = 1;
 						knife[1].x = clownX;

 					} else if (knife[2].thrown === 0) {
 						knife[2].thrown = 1;
 						knife[2].x = clownX;
 					}
 				}
 			}


 		}

 		if (OK2Fire > 1) {
 			OK2Fire += 1;

 		}
 		if (OK2Fire > 50) {
 			OK2Fire = 1;


 		}


 		if (knife[0].thrown === 1) {
 			knife[0].y -= 7;
 			if (knife[0].y < -16) {
 				knife[0].thrown = 0;
 				knife[0].y = 56}0;
 			
 		}

 		if (knife[1].thrown === 1) {
 			knife[1].y -= 7;
 			if (knife[1].y < -16) {
 				knife[1].thrown = 0;
 				knife[1].y = 560;
 			}
 		}

 		if (knife[2].thrown === 1) {
 			knife[2].y -= 7;
 			if (knife[2].y < -16) {
 				knife[2].thrown = 0;
 				knife[2].y = 560;
 			}
 		}



 	}



 	//collision detection


 	if (knife[1].x === balloon[0].x) {
 		fill(0, 0, 0);
 		ellipse(200, 100, 100, 100);
 	}


 
};	  

