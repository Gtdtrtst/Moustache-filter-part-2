nosex = "";
nosey = "";
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getPoses);
}
function snap(){
    save('moustache.png');
}
function draw(){
    image(video,0,0,300,300);
}
function modelLoaded(){
    console.log("model is loaded");
}
function getPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x =" + nosex);
        console.log("nose y = "+ nosey);
    }
}