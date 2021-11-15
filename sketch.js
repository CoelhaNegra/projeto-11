var caminhoImg, meninoImg;
var caminho, menino, bordadireita, bordaesquerda;

function preload(){
  //imagens pré-carregadas
 caminhoImg = loadImage("path.png");
 meninoImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  caminho = createSprite(200,200);
  caminho.addImage(caminhoImg);
  caminho.velocityY = 4;
  caminho.scale = 1.2;

  menino = createSprite(180,340,30,30);
  menino.scale = 0.08;
  menino.addAnimation("correndo",meninoImg);

  bordaesquerda = createSprite(0,0,100,800);
  bordaesquerda.visible = false;
  bordadireita = createSprite (410,0,100,800);
  bordadireita.visible = false;
}



function draw() {
  background(0);
  menino.x = World.mouseX;
  createEdgeSprites();
  menino.collide(bordaesquerda);
  menino.collide(bordadireita);

  if (caminho.y > 400) {
    caminho.y = height/2;
  }
  drawSprites();

}
