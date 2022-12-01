//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 16;
let raio = diametro / 2;

//velocidade bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis raquete
let xRaquete = 5;
let yRaquete = 150;

let colidiu = false;

//placar

let meusPontos = 0;
let pontosOponente = 0;


//sons do game

let raquetada;
let ponto;
let trilha;


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}

//segunda raquete

let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeRaquete2;

//erro oponente

let chanceDeErrar = 0;




function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha (); //mostra a bolinha
  moverBolinha ();   // movimenta a bolinha 
  colisãoBolinha();  // verifica colisão da bolinha
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  //colisaoMinhaRaqueteBiblioteca();
  mostraRaquete(xRaquete2,yRaquete2);
  movimentaRaquete2();
  //movimentaRaquetews();
  verificaColisaoRaquete(xRaquete2,yRaquete2);
  incluiPlacar ();
  marcarPontos ();
  calculaChanceDeErrar();
  bolinhaNaoFicaPresa()
               
  
 
} 

function mostrarBolinha(){
  circle(xBolinha,yBolinha,diametro) 
}

function moverBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;  
}

function colisãoBolinha(){
  if (xBolinha + raio > width ||
       xBolinha - raio < 0){
    velocidadeXbolinha *= -1;
   }
  if(yBolinha + raio > height ||
    yBolinha - raio <0 ){
    velocidadeYbolinha *= -1;
  }
}

function mostraRaquete (x,y){
 rect(x,y,raqueteComprimento,raqueteAltura) 
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
     yRaquete -= 10
  
    
  }
   

if (keyIsDown(DOWN_ARROW)){
 yRaquete += 10 
}
  
}


function verificaColisaoRaquete(x,y) {
    if (xBolinha - raio < x + raqueteComprimento 
        && yBolinha - raio < y + raqueteAltura
        && yBolinha + raio > y) {
        velocidadeXbolinha *= -1;
      raquetada.play();
    }
}

function colisaoMinhaRaqueteBiblioteca(){
  colidiu = 
  collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha , yBolinha, raio);
  if (colidiu){
    velocidadeXbolinha *= -1;
  }
}

function verificaColisaoRaquete(x,y){
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha , yBolinha, raio);
  if (colidiu){
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}


function movimentaRaquete2(){
  velocidadeRaquete2 = yBolinha - yRaquete2 - raqueteComprimento / 2 -50;
  yRaquete2 += velocidadeRaquete2
  calculaChanceDeErrar()
  
}

function movimentaRaquetews(){
  if (keyIsDown(87)){
     yRaquete2 -= 10
  
    
  }
   

if (keyIsDown(83)){
 yRaquete2 += 10 
}
  
  
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(0,0,255)
  rect(150,10,40,20)
  fill(255)
  text(meusPontos,170,26)
  fill(0,0,255)
  rect(450,10,40,20)
  fill(255)
  text(pontosOponente,470,26 )
}

function marcarPontos (){
  if (xBolinha > 590){
    meusPontos +=1
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente +=1
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}

     



  

  
  
