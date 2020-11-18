const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
 
var particles = [];
var plinkos = [];
var divisions = []

var score = 0
var particle;
var count = 0

var gameState = "start"

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 15; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j+45,75))
    plinkos.push(new Plinko(j-15,175))
    plinkos.push(new Plinko(j+30,275));
    plinkos.push(new Plinko(j,375));
  
  }
  


    ground = new Ground(400,790,800,20)

    
}
 


function draw() {
  background(0,0,0);
  textSize(20)
  text("Score: "+score,20,30);
  text("500",25,530)
  text("500",105,530)
  text("500",185,530)
  text("500",265,530)
  text("100",345,530)
  text("100",425,530)
  text("100",505,530)
  text("200",585,530)
  text("200",665,530)
  text("200",745,530)

  

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle!=null)
   {
     particle.display()

      if (particle.body.position.y>760)
      {
          if(particle.body.position.x < 300)
          {
            score=score+500;
            particle=null;
            if (count>= 5) gameState = "end";          
          }
          else if(particle.body.position.x > 301&&particle.body.position.x < 600)
          {
            score=score+100;
            particle=null;
            if (count>= 5) gameState = "end";
          }
          else if(particle.body.position.x > 601&&particle.body.position.x < 900)
          {
            score=score+200;
            particle=null;
            if (count>= 5) gameState = "end";
          }
      }
   }

   if(gameState === "end")
   {
     textSize(50)
     text("Game Over",300,250)
   }
 

  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display()

}

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle(mouseX, 10, 10, 10)
  }
}