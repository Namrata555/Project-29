class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        // this.image1=loadImage("sprites/sling1.png");
        // this.image2=loadImage("sprites/sling2.png");
        // this.image3=loadImage("sprites/sling3.png");
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,20);
        image(this.image2,170,20);
        
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            // stroke(107, 239, 136);
            fill(0);
            // if(pointA.x<200){
            //     line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            //     line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
            //     image(this.image3,pointA.x-30,pointA.y-10,15,30);
            // }
            // else{
            //     line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
            //     line(pointA.x+20,pointA.y,pointB.x+30,pointB.y);
            //     image(this.image3,pointA.x+20,pointA.y-10,15,30);
            // }
           
        }
    }
    
}