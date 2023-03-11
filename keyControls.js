function keyPressed() {
    if (keyIsDown(LEFT_ARROW) && car.x >= 5) {
      let futureCar = { x: car.x - 5, y: car.y, w: 50, h: 50 };
      if (!testFuturePosition(futureCar)) {
        car.x -= 5;
      }
    }
  
    if (keyIsDown(RIGHT_ARROW) && car.x <= 945 && colliding === false) {
      let futureCar = { x: car.x + 5, y: car.y, w: 50, h: 50 };
      if (!testFuturePosition(futureCar)) {
        car.x += 5;
      }
    }
  
    if (keyIsDown(UP_ARROW) && car.y >= 5 && colliding === false) {
      let futureCar = { x: car.x, y: car.y - 5, w: 50, h: 50 };
      if (!testFuturePosition(futureCar)) {
        car.y -= 5;
      }
    }
  
    if (keyIsDown(DOWN_ARROW) && car.y <= 595 && colliding === false) {
      let futureCar = { x: car.x, y: car.y + 5, w: 50, h: 50 };
      if (!testFuturePosition(futureCar)) {
        car.y += 5;
      }
    }
  }
  
  function testFuturePosition(futureCar) {
    let didCollide = false;
    buildings.forEach((building) => {
      if (collisionDetection(futureCar, building)) {
        didCollide = true;
      }
    });
    return didCollide;
  }
