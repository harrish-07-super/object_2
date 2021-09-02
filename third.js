function moniter(){
    window.location="enter.html";
}

function preload() {
    img2 = loadImage("image3.jpg");
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
    image(img2, 0, 0, 600, 400);


    fill("#FF0000");
    stroke("#FF0000");
    noFill("#FF0000");
    text("Book and Computer", 50,350);
    rect(30, 40, 500, 350);
}