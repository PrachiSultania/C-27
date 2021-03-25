class Chain{
      constructor(bodyA, bodyB){
          var options = {
           bodyA: bodyA,
           bodyB: bodyB,
           stiffness: 0.8,
           length: 50
             
          }
          this.chain=Constraint.create(options);
          World.add(world, this.chain);
          console.log(this.chain)
      }
        display(){
            push()
            stroke("yellow");
            strokeWeight("3");
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
            pop()
        }


}