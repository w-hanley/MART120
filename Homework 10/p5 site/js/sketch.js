//setting variables for name changing
var size = 16;
var count = 0;
var sizeDirection = 2;
//setting variables for clouds
var cloudx = 50;
var cloudy = 200;
var cloudx2 = 300;
var cloudy2 = 160;
var cloudx3 = 375;
var cloudy3 = 220;
//setting variables for moving shirt
var shirty = 260;
//setting variables for moving beard
var beardy = 195;
//setting variables for moving hair diagonally
var hairx = 340;
var hairy = 25;
//setting variables for moving name
var namexloc = 50;
var nameyloc = 450;
var right = 50
var down = 450
var left = 375
var up = 575

function setup()
{
    createCanvas(500,600);
    movement1 = floor(random() * 10) + 1;
    movement2 = floor(random() * 10) + 1;
    movement3 = floor(random() * 10) + 1;
    movement4 = floor(random() * 10) + 1;
    movement5 = floor(random() * 10) + 1;
    movement6 = floor(random() * 10) + 1;
}

function draw()
{
    background(206, 244, 243);

    //Animating moving clouds
        //cloud1
        fill(255,255,255)
        ellipse(cloudx,cloudy,100,35);
        cloudx+=movement1;
        if(cloudx >= 450 || cloudx <= 49)
        {
            movement1 *= -1;
        }
        //cloud2
        fill(255,255,255)
        ellipse(cloudx2,cloudy2,150,45);
        cloudx2+=movement2;
        if(cloudx2 >= 425 || cloudx2 <= 75)
        {
            movement2 *= -1;
        }
        //cloud3
        fill(255,255,255)
        ellipse(cloudx3,cloudy3,180,60);
        cloudx3+=movement3;
        if(cloudx3 >= 410 || cloudx3 <= 90)
        {
            movement3 *= -1;
        }

    //shirt
    fill(9,68,32)
    rect(180, shirty, 150, 155, 20);
    //moving shirt
    shirty += movement4;
    if (shirty <= 250 || shirty >= 275 )
    {
        movement4 *= -1;
    }

    //neck
    fill(255,235,213);
    rect(240, 220, 25, 55);

    //beard
    fill(65);
    circle(250,beardy,125);
    beardy += movement5;
    if (beardy <= 175 || beardy >= 225 )
    {
        movement5 *= -1;
    }

  
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
  
    //hair+mouth
    fill(65)
    quad(200, 40, 375, 20, 340, 60, 140, 70);
    rect(hairx, hairy, 35, 85, 20);
    hairx += movement6;
    hairy += movement6;
    if (hairx > 355)
    {
        movement6 *= -1;
    }
    if(hairx < 340)
    {
        movement6 *= -1;
    }

    rect(215, 190, 15, 45);
    rect(265, 190, 15, 45);
    rect(225, 190, 55, 15);
    line(235, 220, 260, 220);


    //animating title
    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Self Portrait",0,25);
    text("MART 120",0,45);

    //moving name in square pattern
    text("W. Hanley", namexloc, nameyloc);
    if(right < 375)
    {
        namexloc += 2;
        right += 2;
    }
    if(right > 375 && down <575)
    {
        nameyloc +=2;
        down +=2
    }
    if(right >375 && down > 575 && left > 50)
    {
        namexloc -= 2;
        left -= 2;
    }
    if(right >375 && down > 575 && left < 50 && up > 450)
    {
        nameyloc -= 2;
        up -= 2;
    }
    if(right > 375 && down > 575 && left < 50 && up < 450)
    {
        namexloc = 50;
        nameyloc = 450;
        right = 50
        down = 450
        left = 375
        up = 575
    }
}
