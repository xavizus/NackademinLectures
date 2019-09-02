class Rectangle {
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;

        console.log(this.area());
    }

    area() {
        return this.width * this.height;
    }
}

let backyard = new Rectangle(20, 10);

console.log(backyard);