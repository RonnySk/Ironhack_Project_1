class Car {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.w = 50;
        this.h = 50
    }

    draw(img){
     image(img, this.x, this.y,this.w ,this.h,0 ,0);
    }
}