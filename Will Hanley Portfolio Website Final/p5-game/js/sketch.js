//variables for character movement
var xmove = 100;
var ymove = 100;

//variables for keys
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var arrayX = [];
var arrayY = [];
var size = [];
var arrayXspeed = [];
var arrayYspeed = [];
var colorX = [];

//variables for random enemy speed
var random1;
var random2;

//variables for mouse click
var mouseShapeX;
var mouseShapeY;

//setting up canvas and random speeds
function setup(){
    createCanvas(700,300);
    for (var i=0; i < 10; i++){
        arrayX[i] = floor(random() * 400) + 1;
        arrayY[i] = floor(random() * 150) + 1;
        size[i] = floor(random() * 25) + 1;
        arrayXspeed[i] = floor(random() * 5) + 1
        arrayYspeed[i] = floor(random() * 5) + 1
        colorX[i] = color(random(0, 255), random(0, 255), random(0, 255));
    }
}

function draw(){
    //background color and drawing edges
    background(238, 250, 220);
    fill(153, 162, 141)
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width-50, 10);
    rect(width-10,0,10,height);

    for(var i = 0; i < arrayX.length; i++){
            fill(colorX[i])
            circle(arrayX[i],arrayY[i],size[i]);
            arrayX[i] += arrayXspeed[i];
            arrayY[i] += arrayYspeed[i];

            if (arrayX[i] > width) {
                arrayX[i] = 0;
            }
            if (arrayX[i] < 0) {
                arrayX[i] = width;
            }
            if (arrayY[i] > height) {
                arrayY[i] = 0;
            }
            if (arrayY[i] < 0) {
                arrayY[i] = height;
            }
        }

    //exit text
    fill(0)
    textSize(16);
    text("EXIT", width-48,height-2);

    //Text for gameplay and when you find exit
    if(xmove > 660 && ymove > 300){
        fill(0);
        textSize(26);
        text("You have escaped, you won!", 15,280);
    }
    else{
        fill(0);
        textSize(23);
        text("Find the exit!",15,280);
    }

    //creating mouse click shape
    fill(255,255,255);
    circle(mouseShapeX, mouseShapeY, 18);
    
    //setting up player character and movement
    fill(255,255,0)
    arc(xmove, ymove, 40, 40, .8, 5.4)
    if(keyIsDown(w)){
        ymove -= 5;   
    }
    else if(keyIsDown(s))
    {
        ymove += 5;   
    }
    else if(keyIsDown(a))
    {
        xmove -= 5;   
    }
    else if(keyIsDown(d))
    {
        xmove += 5;   
    }

}

//setting up mouse click
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}


