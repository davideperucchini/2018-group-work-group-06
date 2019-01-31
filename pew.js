var bike_drctn=(-1+Math.random()*2)
var car4_drctn=(-1+Math.random()*2)
var car3_drctn=(-1+Math.random()*2)
var car2_drctn=(-1+Math.random()*2)
var car1_drctn=(-1+Math.random()*2)
var speed1=4
var speed2=9.5
var speed3=1.5
var move1=0
var move2=0
var move3=0
var move4=0
var player
var alpha
var beta
var gamma
var level=0
var sound=0

var goright=[0,0,0,0,0,0,0]

for(j=0;j<8;j++){
  var turn=(Math.floor(Math.random()*4))
  if(turn==0){ goright[j]=45}
  else if(turn==1){ goright[j]=135}
  else if(turn==2){goright[j]=225}
  else if(turn==3){goright[j]=315}
}
//console.log(goright)
var ciao=0
var ciaone=0
var ciaoissimo=0
var dog
var man
var man1
var bike
var car1
var car2
var car3
var car4
var wrong
var right
var backg
var sfondo
var noise

function preload(){
  dog=loadSound("./assets/dog.mp3")
noise=loadSound("./assets/tapetosonoro1.mp3")
backg=loadImage("./assets/sfondo.png")
}

function setup(){
player= new Charachter()
    createCanvas(windowWidth,windowHeight)
  //  sfondo= image(backg,0,0,width,height)
  // noise.play()
  // noise.loop()
  // dog.play()
  // dog.loop()
}


function draw(){


  sfondo= image(backg,0,0,width,height)
noise.amp(map(level,0,7,0.1,0.5))

  fill('white')
  noStroke()
  ellipseMode(CENTER)
textSize(width/5)
dog.amp(1)
//FOLLOW THE DOG
if(goright[level]==45){
  if(alpha>90){dog.pan(1)}
  else{dog.pan(0)
  player.update()}}

 else if(goright[level]==135){
  if(alpha>180){dog.pan(1)}
  else if(alpha<90){dog.pan(-1)}
  else{dog.pan(0)
  player.update()}}


else if(goright[level]==225){
  if(alpha>270){dog.pan(1)}
  else if(alpha<180){dog.pan(-1)}
  else{dog.pan(0)
  player.update()}
}

else if(goright[level]==315){
  if(alpha<270){dog.pan(-1)}
  else{dog.pan(0)
  player.update()}
}
//text(goright[level],100,100)
//text(alpha,100,200)


if(alpha>goright[level]-45 && alpha<goright[level]+45){
  fill("white")
player.update()}

if(mouseIsPressed){
  fill('white')

  push()
  noFill()
  stroke("white")
  strokeWeight(2)
   ellipse(mouseX,mouseY,width/8+frameCount%60)
   strokeWeight(4)
    ellipse(mouseX,mouseY,width/8+(frameCount%60*2))
    strokeWeight(6)
     ellipse(mouseX,mouseY,width/8+(frameCount%60*3))
  pop()}
}



function Charachter(){
  this.x=windowWidth/2
  this.y=windowHeight/2
  this.show=function show(){}


  this.update=function update(){

if(player.y<height/10){player.y=windowHeight/2,level++}

else if (mouseIsPressed){this.y=this.y-10}}
}



//window.navigator.vibrate([500,500,500])

function touchEnded() {
 window.addEventListener('deviceorientation', function(e)
  {
    alpha = e.alpha;
    beta = e.beta;
    gamma = e.gamma;
  })
  if(dog.isPlaying()||noise.isPlaying()||dog.amp(3)){}
  else{
  dog.loop()
  noise.loop()
  dog.amp(3)}
}
