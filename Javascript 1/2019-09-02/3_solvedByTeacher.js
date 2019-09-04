class Vehicle {
    constructor(color, brand, model, speed, noOfWheels, maxSpeed) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.maxSpeed = maxSpeed;
        this.noOfWheels = noOfWheels;
        console.log("Färg: %s, Märke: %s, Modell: %s, Hastighet: %s, maxSpeed: %s, noOfWheels: %s",
            this.color,
            this.brand,
            this.model,
            this.speed,
            this.maxSpeed,
            this.noOfWheels
        )
    }

    print(...rest) {
        console.log(this.brand, this.speed, this.color, rest.join(","));
    }

    acceleration(addedAcceleration) {
        if ((this.speed + addedAcceleration) <= this.maxSpeed) {
            this.speed += addedAcceleration;
        } else {
            console.log("You can't drive faster than %s!", this.maxSpeed);
            this.speed = 200;
        }
    }
    deacceleration(decreasedAcceleration) {
        if ((this.speed - decreasedAcceleration) >= 0) {
            this.speed -= decreasedAcceleration;
        } else {
            console.log("You can't drive slower than 0!");
            this.speed = 0;
        }
    }
}

class Truck extends Vehicle {
    constructor(color, brand, model, speed, maxWeight, noOfWheels = 6, maxSpeed = 180) {
        super(color, brand, model, speed, noOfWheels, maxSpeed);
        this.maxWeight = maxWeight;
    }

    print() {
        super.print(this.maxWeight);
    }

}

class Car extends Vehicle {
    constructor(color, brand, model, speed, noOfWheels = 4, maxSpeed = 230) {
        super(color, brand, model, speed, noOfWheels, maxSpeed);

    }

}

class Motorcycle extends Vehicle {
    constructor(color, brand, model, speed, noOfWheels = 2, maxSpeed = 350) {
        super(color, brand, model, speed, noOfWheels, maxSpeed);

    }

}
let myCar = new Car("Blå", "Volvo", "XC90", 100);

console.log(myCar);

let myTruck = new Truck("Vit", "Scania", "Man", 80, 1200, 8, 120);

myTruck.print();
console.log(myTruck);