let imgMap;
let imgCarLeft;
let imgCarRight;
let imgCarUp;
let imgCarDown;
let imgPoliceCar;
let buildings;   
let car;
let policeCars = [];
let colliding = false;

function preload(){
    imgMap = loadImage('/images/telaBase.png')
    imgCarLeft = loadImage('images/carLeft.png')
    imgCarRight = loadImage('/images/carRight.png');
    imgCarUp = loadImage('/images/carUp.png');
    imgCarDown = loadImage('/images/carDown.png');
    
    imgPoliceCar = loadImage('/images/policeCarLeft.png')
}

function setup(){
    createCanvas(1000, 650);
    car = new Car();
    // policeCars = [new PoliceCar()]
    buildings = [
        new Building(60, 60, 300, 50),
        new Building(420, 60, 345, 160),
        new Building(830, 60, 110, 160),
        new Building(60, 170, 300, 50),
        new Building(60, 280, 700, 100),
        new Building(60, 440, 100, 150),
        new Building(220, 440, 200, 150),
        new Building(480, 440, 280, 150),
        new Building(830, 280, 110, 65),
        new Building(830, 400, 110, 65),
        new Building(830, 520, 110, 65),
        ] 
}

function draw(){
    background(50);
    buildings.forEach((building) => {
        building.draw()
    });
    image(imgMap, 0,0,1000, 650)
    car.draw(imgCarRight);
    keyPressed(); 
    // policeCars.forEach((policeCar) => {
    //    policeCar.draw()
    //    policeCar.update()
       
    // })

    if(frameCount === 500){
        policeCars.forEach((policeCar) => {
            policeCar.randomX += 1;
            policeCar.randomY += 1;
       
            })
}
    if (policeCars.length === 5) {
      clearInterval(policeCreationInterval)
    } 
    gameOver()
}

function createPoliceCar () {
    let newPoliceCar = new PoliceCar();
       policeCars.push(newPoliceCar); 
}
const policeCreationInterval = setInterval(createPoliceCar, 2000);

function collisionDetection(rect1, rect2) {
    
    if (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y
        ) {
           return true       
        } 
}

function gameOver(){
    policeCars.forEach((policeCar) => {
        if(collisionDetection(car, policeCar)) {
            background('black');
            fill('red');
            textSize(42);
            text('Busted!', 425, 325);
            fill('red');
            textSize(38);
            text(`Score: ${Math.floor(frameCount / 2)}`, 410, 430);
            noLoop()
        }
    })
}