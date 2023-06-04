img = "";
status = "";

function preload()
{
    img = loadImage('bed.avif');
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
    text("BED", 205, 215);
    noFill();
    stroke("red");
    rect(200, 200, 225, 200);

    fill("red");
    text("LAMP", 155, 215);
    noFill();
    stroke("red");
    rect(150, 200, 60, 100);
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