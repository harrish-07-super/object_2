function bed(){
    window.location="enter.html";
}

function preload() {
    img = loadImage("images.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status");
}

function modelLoaded(){
    console.log("Model is loaded!#");
    objectDetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 600, 400);


    fill("#FF0000");
    stroke("#FF0000");
    noFill("#FF0000");
    text("Bed", 50,300);
    rect(30, 40, 500, 350);
}