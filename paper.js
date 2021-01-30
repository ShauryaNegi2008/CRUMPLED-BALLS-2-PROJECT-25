class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.5,
            'friction':2,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       this.image=loadImage("paper.png")
        
   }
   display(){
    fill("grey");
    noStroke();
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    image(this.image,this.body.position.x-25,this.body.position.y,70,70)
    
   }
}