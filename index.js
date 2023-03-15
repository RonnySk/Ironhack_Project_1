const startBtn = document.querySelector("#start-button");
const gameIntro = document.querySelector(".game-intro"); 
const gameScreen = document.querySelector(".game-screem");
const muteBtn = document.querySelector("#mute-button")


startBtn.onclick = () => {
    startGame();
}

muteBtn.onclick = () => {
    muteGame();
}

let mutedGame = false;
let canvas;
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
let gameSound;

function preload(){
    imgMap = loadImage('/images/finalScreem.png')
    imgCarLeft = loadImage('images/carLeft.png')
    imgCarRight = loadImage('/images/carRight.png');
    imgCarUp = loadImage('/images/carUp.png');
    imgCarDown = loadImage('/images/carDown.png');
    
    imgPoliceCar = loadImage('/images/policeCarLeft.png');
    
    gameSound = loadSound('/sound/policeSound.mp3')
}

function setup(){
    canvas = createCanvas(1000, 650);
    canvas.hide();
    noLoop(); 
    car = new Car();
    policeCars = [new PoliceCar()]
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
    buildings.forEach((building) => {
        building.draw()
    });
    image(imgMap, 0,0,1000, 650)
    car.draw(imgCarRight);
    keyPressed(); 
    policeCars.forEach((policeCar) => {
       policeCar.draw()
       policeCar.update()
       
    })

    if(frameCount === 6000){
        policeCars.forEach((policeCar) => {
            policeCar.randomX += 1;
            policeCar.randomY += 1;
           })
}
    if (policeCars.length >= 9) {
      clearInterval(policeCreationInterval)
    } 
    gameOver()
}

function startGame(){
    gameIntro.style.display = "none";
    canvas.show();
    loop();
    if(mutedGame === true) {
        gameSound.pause();
    } else { 
        gameSound.play();   
    }
    console.log(gameSound.duration())
}

function muteGame(){
    mutedGame = true
}

function createPoliceCar () {
    let newPoliceCar = new PoliceCar();
       policeCars.push(newPoliceCar); 
}
const policeCreationInterval = setInterval(createPoliceCar, 5000);

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
            let restartButton = createButton('Restart')
            restartButton.mousePressed(restartGame)
            background('black');
            fill('red');
            textSize(42);
            text('BUSTED!', 405, 325);
            fill('red');
            textSize(38);
            text(`Score: ${Math.floor(frameCount / 2)}`, 400, 430);
            gameSound.pause();
            noLoop()
        }
    })
}

function restartGame() {
    window.location.reload();
}