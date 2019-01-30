var obstacles =[]
var i=0;
var alpha, beta, gamma

function preload(){
  // put preload code here
}

function setup() {

    createCanvas(windowWidth,windowHeight)
  frameRate(30)

  for(i=0;i<9;i++){obstacles[i]=new Obstacle()}
}

function draw() {


  text("alpha: " + alpha, 25, 25);
  text("beta: " + beta, 25, 50);
  text("gamma: " + gamma, 25, 75)

background(0)

push()
rotate(radians(alpha))
    for(i=0;i<9;i++)
      {
      obstacles[i].update()}

      pop()
console.log(alpha)

charachter()
charachter.show

}

function Obstacle(){
  this.type=Math.floor(i/3);
  this.direction=random(1,-1)*this.type
  this.aldo=width/2-(this.direction*(i*300))-(300*(i-this.type))
  this.y=height-height/10-i*height/10


  this.speed=(this.direction*(5+(this.type*10)))+1

  this.show=rect(this.aldo,this.y,width/10,height/10)

  this.update=function update()
    {
      if(i==2||i==4){}
    else{this.aldo=this.aldo+this.speed}

    if(this.aldo<0){this.aldo=width}
     else if(this.aldo>width){this.aldo=0}
      rect(this.aldo,this.y,width/10,height/10)}

}
function charachter(){
  this.show=polygon(width/2, height/2, 50, 3)
}


window.addEventListener('deviceorientation', function(e)
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
})

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
