
//Skapar en fordorn klass.
class Vehicle {
    constructor(color, brand, model, maxSpeed) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.noOfWheels = 4;
    }

    //Ökar farten på fordornet
    acceleration(addedSpeed) {
        let manualSpeed = this.speed + addedSpeed;
        if (manualSpeed <= this.maxSpeed) {
            this.speed = manualSpeed;
            alert("Du ökade farten");
        } else {
            alert("För fort hörrö!");
        }
    }

    //minskar farten på fordornet
    deacceleration(addedSpeed) {
        let manualSpeed = this.speed - addedSpeed;
        if (manualSpeed >= 0) {
            this.speed = manualSpeed;
            alert("Du sänkte farten");
        } else {
            alert("Försöker du backa eller?!");
        }
    }

    //Skriver ut fordorn informationen
    printInfo() {
        console.log("Märke: " + this.brand + " Färg: " + this.color + " Fart: " + this.speed);
    }
}

//Skapar en ny klass som ärver fordorns klassen
class Motorcycle extends Vehicle {
    constructor(color, brand, model, maxSpeed) {
        super(color, brand, model, maxSpeed);
        this.maxSpeed = maxSpeed;
    }
}

//Skapar en ny klass som ärver fordorns klassen
class Truck extends Vehicle {
    constructor(color, brand, model, maxSpeed, maxLoad) {
        super(color, brand, model, maxSpeed);
        this.maxSpeed = maxSpeed;
        this.maxLoad = maxLoad;
    }

    //Ersätter printInfo från Fordorn klassen.
    printInfo() {
        console.log("Märke: " + this.brand + " Färg: " + this.color + " Fart: " + this.speed + " Max load: " + this.maxLoad);
    }
}

//skapar en ny klass som ärver fordorns klassen.
class Car extends Vehicle {
    constructor(color, brand, model, maxSpeed) {
        super(color, brand, model, maxSpeed);
        this.maxSpeed = maxSpeed;
    }
}

//Skapar en array som sparar alla våra fordorn.
let Vehicles = [];

//Populerar med fordorn till arrayn.
Vehicles.push(new Truck("red", "Scania", "XX56", 70, 500));
Vehicles.push(new Car("yellow", "Dacia", "Pong", 120));
Vehicles.push(new Car("pink", "Ferrari", "Testarossa", 480));
Vehicles.push(new Motorcycle("grey", "Honda", "Ping", 120));
Vehicles.push(new Motorcycle("black", "HD", "Extreme", 65));
Vehicles.push(new Motorcycle("green", "Ducati", "Swong", 300));

//Array med frågor.
let questions = ["Vilken typ av fordon vill du skapa? (truck, motorcycle or car)",
    "Vilken färg?",
    "Vilket märke",
    "Vilken modell?",
    "Vilken hastighet?"
];

//Tom Array som håller i svaren.
let answers = [];

//Gå igenom alla frågor
for (let question of questions) {

    //Om första frågan är samma som frågan som loopas igenom.
    if(questions[0] == question) {
        //Skapa en svars variabel.
        let answer = "";

        //Undertiden svars variabeln inte är lika med någon av "truck", "motorcycle" eller "car"
        while(answer != "truck" && answer != "motorcycle" && answer != "car") {
            //Be om svar och conventera alla stora bokstäver till små.
            answer = prompt(question).toLowerCase();
        }
        //lägg in svaret i arrayn med svar.
        answers.push(answer);
    }
    else {
        //lägg in svaret direkt i arrayn.
        answers.push(prompt(question));
    }
}


//Gå igenom vilket svar vi fick.
switch(answers[0]) {
    case "truck":
        let maxLoad = prompt("Vilken maxvikt?");
        Vehicles.push(new Truck(answers[1], answers[2], answers[3], answers[4], maxLoad));
        break;
    case "motorcycle":
        Vehicles.push(new Motorcycle(answers[1], answers[2], answers[3], answers[4]));
        break;
    case "car":
        Vehicles.push(new Car(answers[1], answers[2], answers[3], answers[4]));
        break;
}

//Consle log våra svar.
console.log(answers);

//Skapar en index för att gå igenom alla våra fordorn.
let index = 0;

for (let Vehicle of Vehicles) {
    console.log("index: " + index);
    Vehicle.printInfo();
    index++;
}

// Fråga vilket fordorn du vill ta bort
let scrap = prompt("Vilket fordon vill du skrota? Välj en siffra mellan 0 och " + (Vehicles.length-1));

//Ta bort fordornet från arrayn.
Vehicles.splice(scrap, 1);
for (let Vehicle of Vehicles) {
    Vehicle.printInfo();
}