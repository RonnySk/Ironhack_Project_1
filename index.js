let imgCar;
let imgPoliceCar;
let buildings;   
let car;
let policeCars = [];
let colliding = false;


class PoliceCar {
    constructor() {
        this.x = 0;
        this.y = 560;
        this.w = 50;
        this.h = 50
        this.speed = 1;
        this.randomX = this.speed;
        this.randomY = this.speed;
        
    }

    draw(){
     image(imgPoliceCar, this.x, this.y,this.w ,this.h,0 ,0);
    }

    update() {
        this.draw();
        this.x += this.randomX;
        this.y += this.randomY;

        if ((this.x + this.w) > 35){
            let futurePoliceCar = { x: this.x + 5, y: this.y, w: this.w, h: this.h};
            if(!testFuturePosition(futurePoliceCar)){
                this.randomX = -this.randomX
            } 
        }
    
        if ((this.x - this.w) < 910){
            let futurePoliceCar = { x: this.x - 5, y: this.y, w: this.w, h: this.h};
            if(!testFuturePosition(futurePoliceCar)){
                this.randomX = -this.randomX
            }
        }
        if ((this.y - this.w) < 560){
            let futurePoliceCar = { x: this.x, y: this.y - 5, w: this.w, h: this.h};
            if(!testFuturePosition(futurePoliceCar)){
                this.randomY = -this.randomY
            }
        }
        if ((this.y + this.w) > 35){
            let futurePoliceCar = { x: this.x, y: this.y + 5, w: this.w, h: this.h};
            if(!testFuturePosition(futurePoliceCar)){
                this.randomY = -this.randomY
            }
        }

            
        function testFuturePosition(futurePoliceCar) {
            let didCollide = false;
            buildings.forEach((building) => {
              if (collisionDetection(futurePoliceCar, building)) {
                didCollide = true;
              }
            });
            return didCollide;
        }
    
    }
}



function preload(){
    imgCar = loadImage('/images/car.jpg');
    imgPoliceCar = loadImage('/images/policeCar.jpg')
}

function setup(){
    createCanvas(1000, 650);
    car = new Car(); 
    buildings = [
        new Building(60, 60, 300, 50),
        new Building(420, 60, 345, 160),
        new Building(830, 60, 110, 160),
        new Building(60, 170, 300, 50),
        new Building(60, 280, 700, 100),
        new Building(60, 440, 100, 150),
        new Building(220, 440, 200, 150),
        new Building(480, 440, 280, 150),
        new Building(830, 280, 110, 35),
        new Building(830, 400, 110, 35),
        new Building(830, 520, 110, 35),
        ] 
}

function draw(){
    background(50);
    keyPressed(); 
    car.draw();
   
    policeCars.forEach((policeCar) => {
       policeCar.draw()
       policeCar.update()
    })

    buildings.forEach((building) => {
        building.draw()
    });
    if (policeCars.length === 6) {
      clearInterval(policeCreationInterval)
    } 
    gameOver()
}

function createPoliceCar () {
    let newPoliceCar = new PoliceCar()
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
            noLoop()
        }
    })
}