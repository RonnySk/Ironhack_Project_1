class PoliceCar {
    constructor() {
        this.x = Math.random() * (950 - 1) + 1;
        this.y = 595;
        this.w = 50;
        this.h = 50
        this.randomX = 2;
        this.randomY = 2;
        
    }

    draw(){
     image(imgPoliceCar, this.x, this.y,this.w ,this.h,0 ,0);
    }

    update() {
        this.draw();
        this.x += this.randomX;
        this.y += this.randomY;

        if ((this.x + this.w) > 45){
            let futurePoliceCar = { x: this.x + 5, y: this.y, w: this.w, h: this.h};
            if(!testFuturePosition(futurePoliceCar)){
                this.randomX = -this.randomX
            } 
        }
    
        if ((this.x - this.w) < 905){
            let futurePoliceCar = { x: this.x - 5, y: this.y, w: this.w, h: this.h};
            if(!testFuturePosition(futurePoliceCar)){
                this.randomX = -this.randomX
            }
        }
        if ((this.y - this.w) < 558){
            let futurePoliceCar = { x: this.x, y: this.y - 5, w: this.w, h: this.h};
            if(!testFuturePosition(futurePoliceCar)){
                this.randomY = -this.randomY
            }
        }
        if ((this.y + this.w) > 45){
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