function keyPressed(){
    if (keyIsDown(LEFT_ARROW)) {
        car.x -= 5;
    } 
    
    if (keyIsDown(RIGHT_ARROW)) {
        car.x += 5;
    }

    if (keyIsDown(UP_ARROW)) {
        car.y -= 5;
    } 
    
    if (keyIsDown(DOWN_ARROW)) {
        car.y += 5;
    }
}
