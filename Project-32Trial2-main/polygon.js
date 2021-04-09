class Polygon{
  constructor(x,y,radius){
    var poptions = {
    'isStatic':false,
    'restitution':0,
    'friction':1,
    'density':1.2
}
this.body = Bodies.circle(x,y,radius, poptions);
this.radius = radius;
this.image = loadImage("polygon.png");
World.add(world, this.body);
}
display(){
var angle = this.body.angle;
var pos = this.body.position;
push();
rotate(angle);
translate(pos.x, pos.y);
imageMode(CENTER);
image(this.image, pos.x, pos.y,this.radius,this.radius);
pop();
}
 }
  
