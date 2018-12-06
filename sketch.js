var soundFile;
var sparklySound;
var ambientSound;
var rotateDir;
var panning;
var col = 255;
var play = false;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  soundFile = loadSound('assets/toy-sound.wav');
  ambientSound = loadSound('assets/street-sound.wav');
  sparklySound = loadSound('assets/sparkly.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ambientSound.play();
  ambientSound.amp(2.5);
}

function draw() {

  background(0);
  fill(col);
  ellipse(width / 2, height / 2, 100, 100);
}

//quando si tocca lo schermo
function touchEnded() {
  // panning = round(random(-1, 1));
  //se il suono puntuale non è ancora partito, allora prendimi un valore
  //che sia o 1 o -1 e assegnalo al panning, dopodiché fai partire il suono e cambia
  //la variabile play
  if (play == false) {
    panning = random([-1, 1]);
    console.log('pan ' + panning);

    soundFile.pan(panning);
    soundFile.play();
    col = 50;
    play = true;
  }
  //se invece il suono puntuale è già partito, controlla la posizione del mouse/touch
  //e se è nella parte sinistra assegna -1 alla variabile rotateDir
  //se è nella parte destra assegna 1 alla variabile rotateDir
  else if (play == true) {

    if (mouseX < width / 2) {
      rotateDir = -1;
    } else if (mouseX > width / 2) {
      rotateDir = 1;
    }
    // rotateDir = round(map(mouseX, 0, width, -1, 1));
    console.log('rot ' + rotateDir);

    //se la variabile rotateDir è uguale alla variabile panning allora l'utente
    //si è girato nella direzione giusta. Fa' partire il feedback "sparkly",
    //e fa' vibrare il cellulare
    if (rotateDir == panning) {
      col = 255;

      sparklySound.play();
      window.navigator.vibrate([500, 30, 50]);
      soundFile.stop();
      play = false;
    }
  }

}

//prova con la rotazione. Da sistemare

// function deviceTurned() {
//
//   if (turnAxis === 'Y') {
//     if(rotationY == -90){
//        rotateDir = 1;
//      } else if(rotationY == 90){
//        rotateDir = -1;
//      }
//      // rotateDir = round(map(mouseX, 0, width, -1, 1));
//      console.log('rot ' + rotateDir);
//
//     if(rotateDir==panning){
//       sparklySound.play();
//
//       window.navigator.vibrate([500, 30, 50]);
//       soundFile.stop();
//       play = false;
//     }
//   }
// }
