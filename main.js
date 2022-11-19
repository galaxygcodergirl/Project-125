var difference = 0;
var leftwristx = 0;
var rightwristy = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(565,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){

}
function draw(){
    background("#b3f5ea");
    textSize(difference);
    fill("#5738d6");
    text("Prisha", 50, 400);
}
function modelLoaded(){
    console.log("PoseNet has started working.");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("Leftwristx = " + leftwristx + "Rightwristx = " + rightwristx + "difference = " + difference);
    }
}