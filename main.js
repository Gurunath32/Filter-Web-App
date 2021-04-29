noseX=0;
noseY=0;
eyeX=0;
eyeY=0;

function preload() {
    clown_nose=loadImage("https://i.postimg.cc/Y0Hm6tWF/hat.png");
    glasses=loadImage("https://i.postimg.cc/J4JRwjSR/glasses.png");
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}

function draw() {
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,150,100);
    image(glasses,eyeX,eyeY,135,50);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x -60;
        noseY=results[0].pose.nose.y -200;
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
        eyeX=results[0].pose.leftEye.x -90;
        eyeY=results[0].pose.leftEye.y -25;
        console.log("Left Eye x = " + results[0].pose.leftEye.x);
        console.log("Left Eye y = " + results[0].pose.leftEye.y);
    }
}

function take_snapshot() {
    save("My_Filter_Image.png");
}