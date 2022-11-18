//variables for character movement
var xmove = 100;
var ymove = 100;
//variables for keys
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//variables for enemy movement
var enemy1x=0;
var enemy1y=0;
var enemy2x=200;
var enemy2y=50;
var enemy3x=0;
var enemy3y=0;
var enemy4x=200;
var enemy4y=50;
//variables for mouse click
var mouseShapeX;
var mouseShapeY;


//setting up canvas and random speeds
function setup()
{
    createCanvas(700,300);
    random1 = floor(random() * 10) + 1;
    random2 = floor(random() * 10) + 1;
    random3 = floor(random() * 10) + 1;
    random4 = floor(random() * 10) + 1;
    random5 = floor(random() * 10) + 1;
    random6 = floor(random() * 10) + 1;
    random7 = floor(random() * 10) + 1;
    random8 = floor(random() * 10) + 1;
}

function draw()
{
    //background color and drawing edges
    background(238, 250, 220);
    //calling function for borders
    createborders();   
    //calling function for winning text
    endtext();
    //calling function for gameplay text
    gameplaytext();
    //calling function for mouse shape
    mouseshape();
    //calling function for creating player
    createplayer();
    //calling function for moving player
    moveplayer();
    //calling function to create and move enemies. I couldn't figure out 
    //how to get random movements to work within the functions
    enemyone();
    enemytwo();
    enemythree();
    enemyfour();
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function createborders()
{
    fill(153, 162, 141);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width-50, 10);
    rect(width-10,0,10,height);
}

function endtext()
{
    fill(0)
    textSize(16);
    text("EXIT", width-48,height-2);
}

function mouseshape()
{
    fill(255,255,255);
    circle(mouseShapeX, mouseShapeY, 18);
}

function gameplaytext()
{
    if(xmove > 660 && ymove > 300)
    {
        fill(0);
        textSize(26);
        text("You have escaped, you won!", 15,280);
    }
    else
    {
        fill(0);
        textSize(23);
        text("Find the exit!",15,280);
    }
}

function createplayer()
{
    fill(255,255,0)
    arc(xmove, ymove, 40, 40, .8, 5.4)
}

function moveplayer()
{
    if(keyIsDown(w))
    {
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

function enemyone()
{
    fill(255,0,0);
    circle(enemy1x, enemy1y, 15);
    enemy1x -= random1;
    enemy1y -= random2;
    if(enemy1x > width)
    {
        enemy1x = 0;
    }
    else if(enemy1x < 0)
    {
        enemy1x = width;
    }
    else if(enemy1y > height)
    {
        enemy1y = 0;
    }
    else if(enemy1y < 0)
    {
        enemy1y = height;
    }
}

function enemytwo()
{
    fill(0,255,255);
    circle(enemy2x, enemy2y, 15);
    enemy2x += random3;
    enemy2y += random4;
    if(enemy2x > width)
    {
        enemy2x = 0;
    }
    else if(enemy2x < 0)
    {
        enemy2x = width;
    }
    else if(enemy2y > height)
    {
        enemy2y = 0;
    }
    else if(enemy2y < 0)
    {
        enemy2y = height;
    }
}

function enemythree()
{
    fill(255,189,189);
    circle(enemy3x, enemy3y, 15);
    enemy3x -= random3;
    enemy3y -= random4;
    if(enemy3x > width)
    {
        enemy3x = 0;
    }
    else if(enemy3x < 0)
    {
        enemy3x = width;
    }
    else if(enemy3y > height)
    {
        enemy3y = 0;
    }
    else if(enemy3y < 0)
    {
        enemy3y = height;
    }
}

function enemyfour()
{
    //setting up enemy 4
    fill(255,197,62);
    circle(enemy4x, enemy4y, 15);
    enemy4x -= random7;
    enemy4y -= random8;
    if(enemy4x > width)
    {
        enemy4x = 0;
    }
    else if(enemy4x < 0)
    {
        enemy4x = width;
    }
    else if(enemy4y > height)
    {
        enemy4y = 0;
    }
    else if(enemy4y < 0)
    {
        enemy4y = height;
    }
}
