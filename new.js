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
var level=1


var goright=[0,0,0,0,0,0,0,0,0,0,0]

for(j=0;j<8;j++){
  var turn=(Math.floor(Math.random()*4))
  if(turn==0){ goright[j]=45}
  else if(turn==1){ goright[j]=135}
  else if(turn==2){goright[j]=225}
  else if(turn==3){goright[j]=315}
}
console.log(goright)
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

function preload(){
  dog=loadSound("./assets/dog.mp3")
  man=loadSound("./assets/people talk.mp3")
  man1=loadSound("./assets/people talk.mp3")

  bike=loadSound("./assets/moto sound.mp3")

    car1=loadSound("./assets/horn car.mp3")
      car2=loadSound("./assets/moto sound.mp3")
        car3=loadSound("./assets/ambulance siren.mp3")

          wrong=loadSound("./assets/wrong.mp3")

                    right=loadSound("./assets/right.mp3")

backg=loadImage("./assets/risorsa.png")

}

function setup(){
player= new Charachter()
dog.play()
dog.loop()
  man.play()
  man.loop()
    man1.play()
    man1.loop()
    man1.rate(2)

      bike.play()
      bike.loop()

      car1.play()
      car1.loop()
      car2.play()
      car2.loop()
      car3.play()
      car3.loop()


    createCanvas(windowWidth,windowHeight)
    sfondo= image(backg,0,0,width,height)

}

function draw(){
  sfondo= image(backg,0,0,width,height)

  fill('black')

  noStroke()
  ellipseMode(CENTER)
textSize(width/5)
var dogloud= map(player.y,height/2,0,1,10)
dog.amp(dogloud)
//FOLLOW THE DOG
if(alpha>goright[level]-45 && alpha<goright[level]+45){dog.pan(0)
  window.navigator.vibrate([0])}
else if (alpha>goright[level]+45) {dog.pan(1)}
else if (alpha<goright[level]-45) {dog.pan(-1)}
//text(goright[level],100,100)
//text(alpha,100,200)


if(alpha>goright[level]-45 && alpha<goright[level]+45){
  fill("white")
player.update()}

player.show()


ellipse(width/2,height/2,width/2,width/2)

player.collide()

  player.x=windowWidth/2+map(gamma,-90,90,-windowWidth/5,windowWidth/5)

//LEAVE THE TWO MEN ON YOUR SIDE
if(level==2){ciao++
//polygon(width/2-width/20,ciao%windowHeight,width/20,height/20)
//polygon(width/2+width/20,(ciao+height/5)%windowHeight,width/20,height/20)
var dist1= dist(width/2-width/20,ciao%windowHeight,player.x,player.y)
var dist2= dist(width/2+width/20,(ciao+height/5)%windowHeight,player.x,player.y)
//text(dist1,100,100,100)
//text(dist2,100,200,100)
man.amp(map(dist1,0,height/2,5,0))
man1.amp(map(dist1,0,height/2,5,0))


if(player.x>width/2+width/10){man.pan(1)
 man1.pan(1)}
else if(player.x<width/2-width/10){man.pan(-1)
 man1.pan(-1)}

 else{man.pan(0)
 man1.pan(0)}
}


else{man.amp(0)
man1.amp(0)}

//PASS AFTER THE MOTORBIKE
if(level==3){ciaone++
   if(bike_drctn<0){
     //polygon(ciaone*10%windowWidth,height/2-height/10,width/20,height/20)
   }
   else{
     //polygon(windowWidth-ciaone*10%windowWidth,height/2-height/10,width/20,height/20)
   }
   var dist3= dist(windowWidth-ciaone*9.5%windowWidth,height/2-height/10,player.x,player.y)

   bike.amp(map(dist3,0,width/2,1,0))

   if(bike_drctn<0){
   if(windowWidth-ciaone*9.5%windowWidth>player.x){bike.pan(-1)}
   else{bike.pan(1)}
 }

   else{
   if(ciaone*9.5%windowWidth>player.x){bike.pan(-1)}
   else{bike.pan(1)}

   }

}
else{bike.amp(0)}


//CARS


if(level==4){ciaoissimo++
  move1=ciaoissimo*speed1%windowWidth
if(car1_drctn<0){
  //polygon(move1,height/2-height/10,width/20,height/20)
var dist4=dist(move1,height/2-height/10,player.x,player.y)
car1.amp(map(dist4,0,width/2,1,-1))
if(move1>player.x){car1.pan(1)}
else{car1.pan(-1)}
}

else{
  //polygon(windowWidth-move1,height/2-height/10,width/20,height/20)
  var dist4=dist(windowWidth-move1,height/2-height/10,player.x,player.y)
  car1.amp(map(dist4,0,width/2,1,-1))
  if(windowWidth-move1>player.x){car1.pan(1)}
  else{car1.pan(-1)}
}

 move2=ciaoissimo*speed2%windowWidth
if(car2_drctn<0){
  //polygon(move2,height/2-(height/10*2),width/20,height/20)
  var dist5=dist(move2,height/2-height/10,player.x,player.y)
  car2.amp(map(dist4,0,width/2,1,-1))
  if(move2>player.x){car2.pan(1)}
  else{car2.pan(-1)}
}

else{
  //polygon(windowWidth-move2,height/2-(height/10*2),width/20,height/20)
  var dist5=dist(windowWidth-move2,height/2-height/10,player.x,player.y)
  car2.amp(map(dist4,0,width/2,1,-1))
  if(windowWidth-move2>player.x){car2.pan(1)}
  else{car2.pan(-1)}
}

 move3=ciaoissimo*speed3%windowWidth
if(car3_drctn<0){
  //polygon(move3,height/2-(height/10*3),width/20,height/20)
  var dist6=dist(move3,height/2-height/10,player.x,player.y)
  car3.amp(map(dist6,0,width/2,1,-1))
  if(move3>player.x){car3.pan(1)}
  else{car3.pan(-1)}
}

else{
  //polygon(windowWidth-move3,height/2-(height/10*3),width/20,height/20)
  var dist6=dist(windowWidth-move3,height/2-height/10,player.x,player.y)
  car3.amp(map(dist6,0,width/2,1,-1))
  if(windowWidth-move3>player.x){car3.pan(1)}
  else{car3.pan(-1)}
}
}

else{
  car1.amp(0)
  car2.amp(0)
  car3.amp(0)}


}



function Charachter(){
  this.x=windowWidth/2
  this.y=windowHeight/2
  this.show=function show(){}
  this.collide=function collide(){

if (level==2){
   if(this.y<ciao%windowHeight+height/20 && this.y>ciao%windowHeight-height/20&&
     this.x>width/2-width/10 && this.x<width/2){
       window.navigator.vibrate([100,0,100])
     this.y=windowHeight/2
   wrong.play()
  }

    else if(this.y<(ciao+height/5)%windowHeight+height/20 && this.y>(ciao+height/5)%windowHeight-height/20&&
          this.x>width/2 && this.x<width/2+width/10){
          window.navigator.vibrate([100,0,100])
          this.y=windowHeight/2
        wrong.play()
       }
}
             if (level==3){
               if(this.x<ciaone*9.5%windowWidth+width/20 && this.x>ciaone*9.5%windowWidth-width/20&&
               this.y>height/2+height/20 && this.y<height/2+height/10+height/20){
               window.navigator.vibrate([100,0,100])
               this.y=windowHeight/2
             wrong.play()
            }
             }
if (level==4){
   if (this.y<height/2-(height/10*3)+height/20&&this.y>height/2-(height/10*3)-height/20&&
   move3>width/2-25&&move3<width/2+25) {
   window.navigator.vibrate([100,0,100])
   this.y=windowHeight/2
 wrong.play()
 }
  else if (this.y<height/2-(height/10*1)+height/10&&this.y>height/2-(height/10*1)-height/10&&
  move1>width/2-25&&move1<width/2+25) {
  window.navigator.vibrate([100,0,100])
  this.y=windowHeight/2
wrong.play()
 }
  else if (this.y<height/2-(height/10*2)+height/10&&this.y>height/2-(height/10*2)-height/10&&
  move2>width/2-25&&move2<width/2+25) {
  window.navigator.vibrate([100,0,100])
  this.y=windowHeight/2
wrong.play()
 }
}}

  this.update=function update(){

if(player.y<height/10){player.y=windowHeight/2,level++
right.play()
right.amp(0.5)
}

else if (mouseIsPressed){this.y=this.y-10

  fill('white')

  push()
  noFill()
  stroke("white")
  strokeWeight(2)
   ellipse(width/2,height/2,width/2+frameCount%20)
   strokeWeight(4)
    ellipse(width/2,height/2,width/2+(frameCount%20*2))
    strokeWeight(6)
     ellipse(width/2,height/2,width/2+(frameCount%20*3))
  pop()
}

   //polygon(this.x,this.y, 50, 3)
 }
}

function windowResized() {
  // resize canvas when switching into/from full screen
  resizeCanvas(windowWidth, windowHeight);
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

window.addEventListener('deviceorientation', function(e)
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
})
window.navigator.vibrate([500,500,500])
