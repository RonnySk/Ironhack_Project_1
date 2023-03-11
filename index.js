let imgCar;
let imgPoliceCar;
let car;
let colliding = false;
// let PoliceCar;

function preload(){
    imgCar = loadImage('/images/car.jpg');
    imgPoliceCar = loadImage('/images/policeCar.jpg')
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
new Building(420,60,345, 160),
new Building(830,60,110,160),
new Building(60,170,300,50),
];  


class Car {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = this.x;
        this.vy = this.y;
        this.w = 50;
        this.h = 50
    }

    draw(){
     image(imgCar, this.x, this.y,this.w ,this.h,0 ,0);
    }
}
// class PoliceCar {
//     constructor() {
//         this.x = 0;
//         this.y = 595;
//         this.vx = this.x;
//         this.vy = this.y;
//         this.w = 50;
//         this.h = 50
//     }

//     draw(){
//      image(imgPoliceCar, this.x, this.y,this.w ,this.h,0 ,0);
//     }
// }


function setup(){
    createCanvas(1000, 650);
    car = new Car(); 
    // PoliceCar = new PoliceCar();  
}

function draw(){
    background(50);
    keyPressed(); 
    car.draw();

    buildings.forEach((building) => {
        building.draw()
        collisionDetection(car,building)
    });
    
}





function collisionDetection(rect1, rect2) {
    
    if (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y
        ) {
            console.log("collision test")
            colliding = true
        } else {
            colliding = false
        }
    
        // if( rect1.y < rect2.y + rect2.h) {
        //         rect1.y = rect2.y + rect2.h;
        //         }
            
        //     if( rect1.y + rect1.height > rect2.y ){ 
        //             rect1.y = rect2.y - rect1.height
        //         }
    
}



// trying 2, another Example, not working

// trying 3...

        // if (rect1.y - rect1.w + rect1.vy <= rect2.y + rect2.h &&
        //     rect1.x - rect1.w + rect1.vx >= rect2.x &&
        //     rect1.y + rect1.w + rect1.vy >= rect2.y &&
        //     rect1.x - rect1.w + rect1.x <= rect2.x + rect2.w) {
        //         rect1.vx = 0;
        //         rect1.y = 0
        //     }