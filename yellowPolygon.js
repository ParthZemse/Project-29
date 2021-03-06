class Polygon {

    constructor(x, y) {
        var options = {
            isStatic: false,
            density: 3,
            friction: 1,
            restitution: 1.0
        }

        this.image = loadImage("polygon.png")

        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 30, 40, options)
        World.add(world, this.body)
    }
    display() {

        var pos = this.body.position

        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 60, 60)




    }





}