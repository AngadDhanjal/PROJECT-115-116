mustache_x=0;
mustache_y=0;


function preload()
{
mustache = loadImage("https://i.postimg.cc/6Q00WG5c/2-2-moustache-png-file-thumb.png");
}

function setup()
{
    canvas= createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,400,400);
    image(mustache,mustache_x,mustache_y,60,45);
}

function take_snapshot()
{
save('Mustache_filter.png');
}


function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
 
  mustache_x = results[0].pose.nose.x;
  console.log("nose x: "+mustache_x);
  mustache_y = results[0].pose.nose.y;
  console.log("nose y: "+mustache_y);
}
}
