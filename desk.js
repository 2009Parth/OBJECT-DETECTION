img = "";
status = "";

function preload()
{
    img = loadImage('desk.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("red");
    text("PC", 375, 105);
    noFill();
    stroke("red");
    rect(370, 90, 160, 110);

    fill("red");
    text("LAPTOP", 125, 145);
    noFill();
    stroke("red");
    rect(120, 130, 135, 100);
}

function back()
{
    window.location = "index.html";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}