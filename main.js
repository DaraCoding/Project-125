lextWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (condition) {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    background('#ADD8E6');
    textSize(difference);
    fill('#FFE787');
    text('Peter', 50, 400);
}