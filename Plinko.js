class Plinko {

    constructor(x, y){

        var options = {
            'isStatic': true
        }

        this.body = Bodies.circle(x, y, 10, options);
        
        this.x = x;
        this.y = y;
        this.r = 10;

        World.add(world,this.body);

    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(77, 133, 176);
        ellipse(0, 0, 10, 10);
        pop();

    }

}