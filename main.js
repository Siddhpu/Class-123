function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    //poseNet= ml5.poseNet(video,modelLoaded);
    //poseNet.on('pose',gotPoses);
}

function preload(){
lipstick_gif = loadImage("https://png.pngtree.com/png-clipart/20200317/ourmid/pngtree-valentines-day-hand-painted-pink-lips-png-image_2161918.jpg");
}

function draw(){
    image(video,0,0,300,300);
    image(lipstick_gif,0,0,45,45);
}


