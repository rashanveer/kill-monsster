const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var  backGroundImage1


function preload() {
  backGroundImage1 = loadImage("GamingBackground.png")
//preload the images here

}

function setup() {
 createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  //row 1
ground = new Ground(625,700,1250,20)
block1  = new Block(700,680,50,50)
block2  = new Block(700,680,50,50)
block3  = new Block(700,680,50,50)
block4  = new Block(700,680,50,50)
block5  = new Block(700,680,50,50)
block6  = new Block(700,680,50,50)
block7  = new Block(700,680,50,50)
//row 2
block8  = new Block(775,680,50,50)
block9  = new Block(775,680,50,50)
block10 = new Block(775,680,50,50)
block11 = new Block(775,680,50,50)
block12 = new Block(775,680,50,50)
block13 = new Block(775,680,50,50)
//row 3
block14 = new Block(850,680,50,50)
block15 = new Block(850,680,50,50)
block16 = new Block(850,680,50,50)
block17 = new Block(850,680,50,50)
block18 = new Block(850,680,50,50)
block19 = new Block(850,680,50,50)
block20 = new Block(850,680,50,50)
block21 = new Block(850,680,50,50)
//row 4
block22 = new Block(925,680,50,50)
block23 = new Block(925,680,50,50)
block24 = new Block(925,680,50,50)
block25 = new Block(925,680,50,50)
block26 = new Block(925,680,50,50)

hero = new Hero(620,680,80)

monster = new Monster(950,680,80)
gound = new Ground(1250,680,1000,20)

}

function draw() {
  background(backGroundImage1);
  Engine.update(engine);
  strokeWeight(4);
ground.display();
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
block25.display()
block26.display()
hero.display();
monster.display();
}

