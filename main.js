song = "";
song_2 = "";
function preload()
{
    song = loadSound("music.mp3")
    song_2 = loadSound("music2.mp3")
}
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play()
    song_2.play()
}