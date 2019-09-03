class Vehicle {
    constructor(color, brand, model, speed) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.noOfWheels = 4;
        this.maxSpeed = 200;
    }
    acceleration(newSpeed) {
        let manualSpeed = this.speed + newSpeed;
        if (manualSpeed <= this.maxSpeed) {
            this.speed = manualSpeed;
            alert("Du ökade farten");
        } else {
            alert("För fort hörrö!");
        }
    }
    deacceleration(newSpeed) {
        let manualSpeed = this.speed - newSpeed;
        if (manualSpeed >= 0) {
            this.speed = manualSpeed;
            alert("Du sänkte farten");
        } else {
            alert("Försöker du backa eller?!");
        }
    }
    printInfo() {
        console.log("Märke: " + this.brand + " Färg: " + this.color + " Fart: " + this.speed);
    }
}
class Motorcycle extends Vehicle {
    constructor(color, brand, model, speed) {
        super(color, brand, model, speed);
        this.maxSpeed = 350;
    }
}
class Truck extends Vehicle {
    constructor(color, brand, model, speed, maxLoad) {
        super(color, brand, model, speed);
        this.maxSpeed = 100;
        this.maxLoad = maxLoad;
    }
    printInfo() {
        console.log("Märke: " + this.brand + " Färg: " + this.color + " Fart: " + this.speed + " Max load: " + this.maxLoad);
    }
}
class Car extends Vehicle {
    //constructor() {
    //super(color, brand, model, speed);
    //}
}
let truckHead = new Truck("blue", "volvo", "xc90", 80, 120);
truckHead.printInfo();
let array = [];
array.push(new Truck("red", "Scania", "XX56", 70, 500));
array.push(new Car("yellow", "Dacia", "Pong", 120));
array.push(new Car("pink", "Ferrari", "Testarossa", 480));
array.push(new Motorcycle("grey", "Honda", "Ping", 120));
array.push(new Motorcycle("black", "HD", "Extreme", 65));
array.push(new Motorcycle("green", "Ducati", "Swong", 300));
let questions = ["Vilken typ av fordon vill du skapa?",
    "Vilken färg?",
    "Vilket märke",
    "Vilken modell?",
    "Vilken hastighet?"
];
let answers = [];
for (let question of questions) {
    answers.push(prompt(question));
}
if (answers[0] == "truck") {
    let maxLoad = prompt("Vilken maxvikt?");
    array.push(new Truck(answers[1], answers[2], answers[3], answers[4], maxLoad));
} else if (answers[0] == "motorcycle") {
    array.push(new Motorcycle(answers[1], answers[2], answers[3], answers[4]));
} else if (answers[0] == "car") {
    array.push(new Car(answers[1], answers[2], answers[3], answers[4]));
}
console.log(answers);
let index = 0;
for (let Vehicle of array) {
    console.log("index: " + index);
    Vehicle.printInfo();
    index++;
}
let scrap = prompt("Vilket fordon vill du skrota?");
array.splice(scrap, 1);
for (let Vehicle of array) {
    Vehicle.printInfo();
}