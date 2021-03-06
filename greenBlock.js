class GreenBlock {

    constructor(x, y) {
        var options = {
            isStatic: false,
            density: 2,
            friction: 1.2,
            restitution: 0.3
        }

        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 30, 40, options)
        World.add(world, this.body)
    }
    display() {

        var pos = this.body.position

        rectMode(CENTER)
        fill("rgb(0,228,208)")
        rect(pos.x, pos.y, 30, 40)



    }





}