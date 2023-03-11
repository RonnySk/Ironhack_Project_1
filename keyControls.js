function keyPressed(){
    if (keyIsDown(LEFT_ARROW) && car.x >= 5) {
      let futureCar = {x: car.x - 5, y: car.y};
      let didCollide = false;
      buildings.forEach((building) => {
         if(collisionDetection(futureCar,building)) {
            didCollide = true
         }
    });  
      if(!didCollide) {
        car.x -= 5;
      }

    } 
    
    if (keyIsDown(RIGHT_ARROW) && car.x <= 945 && colliding === false)  {
        car.x += 5;
    }

    if (keyIsDown(UP_ARROW) && car.y >= 5 && colliding === false) {
        car.y -= 5;
    } 
    
    if (keyIsDown(DOWN_ARROW) && car.y <= 595 && colliding === false) {
        car.y += 5;
    }
}
