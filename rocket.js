class rocket{
    constructor(){
    this.pos = pos;
    this.fDirection = fDirection;
    this.pVel = pVel;
    this.force = force;
    this.fireColor = fireColor;
    this.touch = touch;
    this.playerColor = playerColor;

    }

    display(){
    push();
    fill(80, 80, 240);
    noStroke();
    translate(p.x , p.y);
    rotate(radians(fDirection));
      beginShape();
      vertex(-pos + 1, -pos + 1);
      vertex(pos + 1, -pos + 1);
      vertex(pos*2, 0);
      vertex(pos + 1, pos + 1);
      vertex(-pos + 1, pos + 1);
      endShape();
      pop();
    }
    movePlayer(){
        playerColor = color(0);
        fireColor = color(80,80, 200);
          
        forcePush = force.mult(0.3);  
    
        if( keyIsDown(LEFT_ARROW)){
        fDirection -= 6;
        }
        if( keyIsDown(RIGHT_ARROW)){
        fDirection+= 6;
        }
        if(keyIsDown(UP_ARROW)){
        force=p5.Vector.fromAngle(radians(fDirection));
        pVel.add(forcePush);
          fireColor = color(0, 255, 255);
        }

        if(p.x > 1990){
            p.x = 0;
          }
          if(p.x < 0){
            p.x = 1990;
          }
          if(p.y < 0){
            p.y = 948
          }
          if(p.y > 948){
            p.y = 0
        }

        pVel.mult(0.978);
        p.add(pVel);
    } 
}