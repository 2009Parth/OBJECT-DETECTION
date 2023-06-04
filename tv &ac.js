img = "";
status = "";

function preload()
{
    img = loadImage('tv and ac.jpg');
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
    text("TV", 180, 120);
    noFill();
    stroke("red");
    rect(175, 100, 270, 200);
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