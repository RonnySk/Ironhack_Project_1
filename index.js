let imgCar;

function preload(){
    imgCar = loadImage('/images/car.jpg');
}

class Building {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
    draw(){
        rect(this.x, this.y, this.w, this.h);
    }
}

let buildings = [
new Building(60,60,300,50),
new Building(420,60,345, 160)
];  


class Car {
    constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
        this.w = 50;
        this.h = 50
    }

    draw(){
     image(imgCar, this.position.x, this.position.y,this.w ,this.h,0 ,0);
    }
}

let car = new Car(
    {position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    } 
 }
);



function setup(){
    createCanvas(1000, 650);
    
}

function draw(){
    background(50)
    keyPressed() 
    car.draw()
    // buildingMap.draw()
    buildings.forEach((building) => {
        building.draw()
        collisionDetection(car,building)
    })
    // makeBuildings()
}





function collisionDetection(rect1, rect2) {
    
    if (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y
        )
           console.log("batendo porra")
}
