// Elias Dana
// Comision 2
// Legajo 125563/3

let frames = [];
let animar = 0;
let posX = -180;
let posY = 350;
let velocidad;
let velocidadAnimacion;
let fondo;
let titulo;
let estado = 0;
let tiempoInicio;
let tiempoFreno;
let posicionTitulo = -100;
let tamañoTitulo = 100;

function preload() {

  fondo = loadImage("data/FONDO.png");
  titulo = loadImage("data/TITULO.png");
  for (let i = 0; i < 10; i++) {
    frames[i] = loadImage("data/frame" + nf(i + 1, 2) + ".png");
  }
}

function setup() {
  
  createCanvas(800, 600);
  reiniciar();
}

function draw() {

  image(fondo, 0, 0, width, height);

  if (estado == 0) {
    velocidad = 2;
    velocidadAnimacion = 10;
    moverJugador(velocidad);
    animar = animarJugador(frames.length, velocidadAnimacion);
    dibujarJugador(frames[animar],posX,posY,180,240);
     if (millis() - tiempoInicio >= 4000) {
      estado = 1;
    }
  }
  else if (estado == 1) {
    velocidad = 5;
    velocidadAnimacion = 5;
   moverJugador(velocidad);
   animar = animarJugador(frames.length, velocidadAnimacion);
   dibujarJugador(frames[animar],posX,posY,180,240);
    if (posX >= width/2+width/4) {
      estado = 2;
      tiempoFreno = millis();
    }
  }
  else if (estado == 2) {
    dibujarJugador(frames[animar],posX,posY,180,240);
    if (posicionTitulo < 50) {
      posicionTitulo += 3;
    }
    if (tamañoTitulo < 500) {
      tamañoTitulo += 2;
    }
    image(titulo,width/2-tamañoTitulo/2,posicionTitulo,tamañoTitulo,250);
    if (millis() - tiempoFreno >= 8000) {
      reiniciar();
    }
  }
}

function moverJugador(velocidad) {
  posX += velocidad;
}

function animarJugador(cantidadFrames, velocidadAnimacion) {
  if (frameCount % velocidadAnimacion == 0) {
    animar++;
    if (animar >= cantidadFrames) {
      animar = 0;
    }
  }
  return animar;
}

function dibujarJugador(imagen, x, y, ancho, alto) {
  image(imagen,x,y,ancho,alto);
}

function reiniciar() {
  posX = -180;
  posY = 350;
  animar = 0;
  velocidad = 2;
  velocidadAnimacion = 10;
  estado = 0;
  posicionTitulo = -100;
  tamañoTitulo = 100;
  tiempoInicio = millis();
  tiempoFreno = 0;
}
