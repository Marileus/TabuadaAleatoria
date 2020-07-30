
var aleatorio1 = parseInt(Math.floor(Math.random() * 9 + 1));
var aleatorio2 = parseInt(Math.floor(Math.random() * 9 + 1));
var recebealeatorio = aleatorio1*aleatorio2
var contador=0
var x= 210
var y= 100
var xE= 10
var yE= 350
var opcao=1
var tela=0
let img
var speed=7
var XELI=250
var YELI=50
var raio1=20
var raio2=20
let cont=0
let contS=0
var numero=0
var array=[]
var global=0
var et= 100
var at= 270


function preload(){
  img = loadImage('fundo.jpg')
  img2= loadImage('instrucoes.jpg')
  img3= loadImage('jog.jpg')
  img4= loadImage('Creditos.jpg')
  img5= loadImage('eu.png')
  img6= loadImage('criança-dos-desenhos-animados-menino-feliz-66887099-removebg-preview.png')
  img7= loadImage('vitoria.jpg')
  img8= loadImage('derrota.jpg')
}
function setup() {
  createCanvas(600, 500);
 frameRate(60)

}

function draw() {
  background(100,205,100);
clear()
 if(tela==0)
   menu()
  
 if(tela==1)
   Jogo()
  
 if(tela==2)
   Instruçoes()
  
 if(tela==3)
   Creditos()
  
  if(tela==4)
    Vitoria()

  if(tela==5)
    Perdeu()
} 

  
//Funções para simplificar o Draw


function menu(){  
  image(img,0,0,600,500)
  
  fill('')
 rect(x,y,170,45)


textSize(32)
  fill(0,0,0)
text("Jogar" ,255, 130)
text("Instruções", 224,230)
text("Créditos", 239, 330)
}


function Jogo(){
  image(img3 , 0, 0, 600,500)
 textSize(32)
  fill(0)
text("", 100,130)
  ellipseMode(CENTER)
  fill(0,200,10)
  //ellipse(xE,yE,50,50)
  image(img6,xE,yE,80,80)
  ellipseMode(CENTER)
  fill(0)
  //ellipse(XELI,YELI,20,20)
  text(recebealeatorio,90,90)

  text(numero,XELI,YELI)  
  YELI= YELI + 2
  if( YELI==500 ){
       YELI=0
    XELI= Math.floor(random(50,600))
    numero= parseInt(random(1,9))
  }
    if(dist(xE,yE,XELI,YELI)<raio1+raio2){
      contador++
      array.push(numero)
      console.log(array)
      xE=0
      yE=300
    }
  
  if(contador==2){
      global=array[0]*array[1]
        if(global==recebealeatorio){
        console.log("VITORIA")
          Vitoria()
         
          
        }}
     if(contador==2){
      global=array[0]*array[1]
        if(global!=recebealeatorio){
        console.log("PERDEU")
          Perdeu()
  }}

  

    
  
  

  if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
  
  if(xE<=550){
    xE=xE+speed
  }}

  if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
  if(xE>=45){
   xE=xE-speed
  }}
  if(keyIsDown(UP_ARROW) ||  keyIsDown(87)){
  if(yE>=305){
   yE=yE-speed
  }}

  if(keyIsDown(DOWN_ARROW)  ||  keyIsDown(83)){
  if(yE<=375){
  yE=yE+speed
  }}
  
  cont=cont+1
    textSize(30)
  fill(30)
  contS=parseInt(cont/60)
text("Tempo:"+contS,50,60)
    
  
  
  
  
}

function Instruçoes(){
   image(img2,0,0,600,500)
fill("#2d3436")
  textSize(40)
  text("Instruções", 200 ,50)
  text("-----------------", 180,70)
textSize(18)
  text("Jogo desenvolvido para todo Fundamental 1 em toda sua extenção", 30 , 152)
textSize(16)  
  text("com o bjetivo de estimular o conhecimento da tabuada nos alunos de forma", 30 , 175)
  text("mais dinamica e divertida", 30 ,195)
  text("__________________________________________________________",30,200)
  text("neste jogo o jogador prcisa resolver a tabuada que lhe for mostrada na tela," , 30, 225)
  text("enquanto desvia dos numeros errados que irão cair do céu,e pegar os dois ",30,246)
  text("certos para que se multiplicação se tenha como correta e possa ganhar ",30,266)
}

function Creditos(){
  image(img4,0,0,600,500)
  textSize(52)
    text("Creditos", 90, 72)
  textSize(25)
  text("Francisco Matheus:",30,130)
  text("Programador", 67, 170)
  image(img5,70,190,120,100)

}     


function Vitoria(){
  if(global==recebealeatorio)
    tela=4
  fill(150)
  rect(x,y,200,300)
   image(img7,0,0,600,500)
    text ("Parabéns, acertou em cheio",90,90)
   text("Bem vindo de volta para casa",90,120)
  text("Você mereceu",90,150)
  text("tecle Esc para voltar",90,300)
}



function Perdeu(){
  if(global!=recebealeatorio)
    tela=5
   image(img8,0,0,600,500)
fill(0)
  textSize(32)
    text ("Voce foi um grande guerreiro",90,90)
  text("porém dessa vez não foi seu dia",90,120)
  text("você se perdeu na floresta",90,150)
  text("quem sabe na proxima",90,180)
  text("Aperte Esc para voltar ao menu",90,300)
  text("e tente novamente",90,330)
  
  





  
}

//Função no Teclado

function keyPressed (){
  if(key=="ArrowUp" && y>130){
    y=y-100
    opcao=opcao-1
  }
  if(key=="ArrowDown" && y<300){
    y=y+100
    opcao=opcao+1
  }
  if(key=="Enter"){
    tela=opcao
    
  }
  if(key=="Escape"){
    tela=0
  }
  
  
}




	
