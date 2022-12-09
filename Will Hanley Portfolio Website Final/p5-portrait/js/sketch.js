function setup()
{
    createCanvas(500,500);
}

function draw()
{
    background(243,176,140);
    textSize(24)
    text("Self Portrait", 10,30)
    textSize(16)
    text("W. Hanley", 10,55);
    textSize(14)
    text("MART 120", 10,75);

    //shirt
    fill(9,68,32)
    rect(180, 260, 150, 155, 20);
  
    //neck
    fill(255,235,213);
    rect(240, 220, 25, 55);

    //beard
    fill(65);
    circle(250,195,125);
  
    //face
    fill(255,235,213);
    circle(250,125,175);
    circle(250,175,125);
    fill(255,243,230);
    circle(200,100,100);
    circle(300,110,130);
    triangle(225, 180, 235, 110, 260, 160);

    //glasses+eyes
    fill(255)
    rect(225, 90, 40, 10, 20);
    rect(155, 75, 75, 50, 20);
    rect(260, 75, 75, 50, 20);
    ellipse(192, 100, 40, 20);
    ellipse(297, 100, 40, 20);
    fill(0)
    circle(298,100,15);
    circle(192,100,15);
  
    //beard+hair+mouth
    fill(65)
    quad(200, 40, 375, 20, 340, 60, 140, 70);
    rect(340, 25, 35, 85, 20);
    rect(215, 190, 15, 45);
    rect(265, 190, 15, 45);
    rect(225, 190, 55, 15);
    line(235, 220, 260, 220);
}