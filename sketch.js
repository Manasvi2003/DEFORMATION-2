var car,wall;
var speed,weight;
function setup(){
createCanvas(1600,400);
car=createSprite(50,200,50,50);
wall=createSprite(1500,200,60,height/2);
car.velocityX=5;
speed=random(25,31);s
weight=random(400,1500);
}
function draw(){
    background="black";
    
    if(wall.x-car.x<(car.width+wall.width)/2){
        car.velocity=0;

        var deformation=0.5*weight*speed*speed/22509;

        if(deformation>100);{
         car.shapeColor=("yellow");
         wall.shapeColor=("black");  
        }
        if(deformation<100&&deformation>100){
            c 
        };
        if(deformation<100){
            car.shapeColor=color("red");
            wall.shapeColor=color("white")
        }
    };
};
