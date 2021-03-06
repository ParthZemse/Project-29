
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;



var ground, base1, base2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var block26, block27, block28, block29, block30, block31, block32, block33, block34;
var polygon;


function setup() {
    createCanvas(1350, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(675, 680, 1350, 20);
    base1 = new Ground(500, 500, 300, 20);
    base2 = new Ground(950, 300, 300, 20);



    block1 = new BlueBlock(400, 465);
    block2 = new BlueBlock(440, 465);
    block3 = new BlueBlock(480, 465);
    block4 = new BlueBlock(520, 465);
    block5 = new BlueBlock(560, 465);
    block6 = new BlueBlock(600, 465);


    block7 = new PinkBlock(405, 405);
    block8 = new PinkBlock(445, 405);
    block9 = new PinkBlock(485, 405);
    block10 = new PinkBlock(525, 405);
    block11 = new PinkBlock(565, 405);
    // block15 = new PinkBlock(605, 415);
    //block16 = new PinkBlock(645, 415);


    block12 = new BlueBlock(440, 360);
    block13 = new BlueBlock(480, 360);
    block14 = new BlueBlock(520, 360);

    block15 = new BlackBlock(480, 310);


    //base 2:-
    block16 = new BlueBlock(845, 265);
    block17 = new BlueBlock(885, 265);
    block18 = new BlueBlock(925, 265);
    block19 = new BlueBlock(965, 265);
    block20 = new BlueBlock(1005, 265);
    block21 = new BlueBlock(1045, 265);


    block22 = new PinkBlock(855, 200);
    block23 = new PinkBlock(895, 200);
    block24 = new PinkBlock(935, 200);
    block25 = new PinkBlock(975, 200);
    block26 = new PinkBlock(1015, 200);

    block27 = new BlueBlock(895, 165);
    block28 = new BlueBlock(935, 165);
    block29 = new BlueBlock(975, 165);

    block30 = new BlackBlock(935, 115);


    polygon = new Polygon(50, 435)

    slingshot = new SlingShot(polygon.body, { x: 80, y: 435 });








    Engine.run(engine)

}
function draw() {



    background("rgb(60,46,46)")
    textSize(20)
    fill("white")
    text("DRAG THE HEXAGON, RELEASE IT AND HIT THE BLOCKS", 40, 105)

    Engine.update(engine);

    ground.display();
    base1.display();
    base2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    // block31.display();
    //block32.display();
    //block33.display();
    //block34.display();
    polygon.display();
    slingshot.display();


}
function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}
function mouseReleased() {
    slingshot.fly();
}