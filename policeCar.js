// class PoliceCar {
//     constructor() {
//         this.x = 0;
//         this.y = 560;
//         this.w = 50;
//         this.h = 50
//         this.speed = 1;
//         this.randomX = this.speed;
//         this.randomY = this.speed;
        
//     }

//     draw(){
//      image(imgPoliceCar, this.x, this.y,this.w ,this.h,0 ,0);
//     }

//     update() {
//         this.draw();
//         this.x += this.randomX;
//         this.y += this.randomY;

//         if ((this.x + this.w) > 35){
//             let futurePoliceCar = { x: this.x + 5, y: this.y, w: this.w, h: this.h};
//             if(!testFuturePosition(futurePoliceCar)){
//                 this.randomX = -this.randomX
//             } 
//         }
    
//         if ((this.x - this.w) < 910){
//             let futurePoliceCar = { x: this.x - 5, y: this.y, w: this.w, h: this.h};
//             if(!testFuturePosition(futurePoliceCar)){
//                 this.randomX = -this.randomX
//             }
//         }
//         if ((this.y - this.w) < 560){
//             let futurePoliceCar = { x: this.x, y: this.y - 5, w: this.w, h: this.h};
//             if(!testFuturePosition(futurePoliceCar)){
//                 this.randomY = -this.randomY
//             }
//         }
//         if ((this.y + this.w) > 35){
//             let futurePoliceCar = { x: this.x, y: this.y + 5, w: this.w, h: this.h};
//             if(!testFuturePosition(futurePoliceCar)){
//                 this.randomY = -this.randomY
//             }
//         }

            
//         function testFuturePosition(futurePoliceCar) {
//             let didCollide = false;
//             buildings.forEach((building) => {
//               if (collisionDetection(futurePoliceCar, building)) {
//                 didCollide = true;
//               }
//             });
//             return didCollide;
//         }
    
//     }
// }