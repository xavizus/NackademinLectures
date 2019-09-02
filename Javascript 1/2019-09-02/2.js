class Rectangle {
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;

        console.log(this.area());
        console.log(this.circumference());
    }

    area() {
        return this.width * this.height;
    }

    circumference() {
        return (this.width * 2) + (this.height * 2);
    }
}

let backyard = new Rectangle(20, 10);

console.log(backyard);