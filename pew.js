
var player
var alpha
var level=6
var move
var car
var ambulance

var goright=[0,0,0,0,0,0,0]

for(j=0;j<8;j++){
  var turn=(Math.floor(Math.random()*4))
  if(turn==0){ goright[j]=45}
  else if(turn==1){ goright[j]=135}
  else if(turn==2){goright[j]=225}
  else if(turn==3){goright[j]=315}
//
 if(goright[j]==goright[j-1]&&goright[j]==315){goright[j]=225}
 else if(goright[j]==goright[j-1]){goright[j]=goright[j]+90}
//console.log(goright)
}
//console.log(goright)
var dog
var man
var bike
var backg
var sfondo
var noise
var victory
var hit

function preload(){
  dog=loadSound("./assets/dog bark.mp3")
noise=loadSound("./assets/tapetosonoro_02_02.mp3")

bike=loadSound("./assets/moto sound.mp3")
car=loadSound("./assets/clackson.mp3")
ambulance=loadSound("./assets/ambulance siren.mp3")
backg=loadImage("./assets/sfondo.png")
victory=loadSound("./assets/REM.mp3")
hit=loadSound("./assets/braking.wav")
}

function setup(){
player= new Charachter()
    createCanvas(windowWidth,windowHeight)

    obstacle= new Obstacle()
    obstacle.set_orde()


console.log(obstacle.sound)

console.log(obstacle.magic_num)
console.log(obstacle.norep)
console.log(obstacle.orde)
}


function draw(){

if(level<8){obstacle.update()

if(frameCount%obstacle.magic_num[level]==0 && level==obstacle.norep[level]) {obstacle.sound[level].play()}
if(player.x>obstacle.x-height/10&&player.x<obstacle.x+height/10){obstacle.sound[level].pan(0)}
else if(player.x>obstacle.x-height/10){obstacle.sound[level].pan(-1)}
else if(player.x<obstacle.x+height/10){obstacle.sound[level].pan(1)}

if (bike.isPlaying()) {car.stop(),ambulance.stop()}
else if (car.isPlaying()) {ambulance.stop(),bike.stop()}
else if (ambulance.isPlaying()) {car.stop(),bike.stop()}

if(player.x>obstacle.x-height/10&&player.x<obstacle.x+height/10&&
 player.y>obstacle.y-height/10&&player.y<obstacle.y+height/10){
window.navigator.vibrate(50)
player.y=height
hit.play()}
}

else{
  dog.stop()
  noise.stop()

if(mouseIsPressed){window.location.href = './backhome.html'}
if(victory.isPlaying()==false){victory.loop()} }


background(23,13,51)
noise.amp(map(level,0,7,0.1,0.5))


    ellipse(obstacle.x,obstacle.y,height/5,height/5)
    ellipse(player.x,player.y,width/20,width/20)

    text(goright[level],100,100)
    text(alpha,100,200)

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

//
// if(alpha>goright[level]-45 && alpha<goright[level]+45){
//   fill("white")
// player.update()}

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



var move=0

function Obstacle(){
//  this.move=0
  this.norep=[0,0,0,0,0,0,0]
  this.orde=[0,0,0,0,0,0,0]
  this.magic_num=[0,0,0,0,0,0,0]
  this.sound=[0,0,0,0,0,0,0]
  this.x=0
  this.y=height/2-height/20*level

  this.set_orde= function set_orde(){
    for(k=0;k<goright.length;k++){
      this.orde[k]=Math.floor(Math.random()*3)
      this.norep[k]=k
      if(this.orde[k]==0){this.magic_num[k]=400, this.sound[k]=bike}
      if(this.orde[k]==1){this.magic_num[k]=682, this.sound[k]=car}
      if(this.orde[k]==2){this.magic_num[k]=1320, this.sound[k]=ambulance}}
        }

  this.update=function update(){

    if(bike.isPlaying()||car.isPlaying()||ambulance.isPlaying()) {
    this.x=map(frameCount%this.magic_num[level],0,this.magic_num[level],0,width)
  move++}
  else{this.x=0}}
}


function Charachter(){

  this.x=windowWidth/2
  this.y=windowHeight/2


  this.update=function update(){
if(player.y<height/10){player.y=windowHeight,level++}

else if (mouseIsPressed){this.y=this.y-1}}
}

function touchEnded() {
  window.navigator.vibrate([0])
 window.addEventListener('deviceorientation', function(e)
  {alpha = e.alpha;})

  if(dog.isPlaying()||noise.isPlaying()||dog.amp(3)){}
  else{
  dog.loop()
  noise.loop()
  dog.amp(3)}
}
