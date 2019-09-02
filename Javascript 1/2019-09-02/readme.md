# Stränghantering (Strängmanipulering)

## Vad är stränghantering
Sträng hantering är att på något sätt manipulera en/flera strängar. Exempelvis extrahera information från en specifik 

## Substring

Det är att klippa ut en del av en sträng. 
Substring tar emot minst två parametrar, där första parametern berättar vart den ska börja klippa ut. Den andra parametern berättar vart den skall sluta.. (Den tar inte med det sista tecknet, dvs. mellanrummet. Du kan se koden lite som att från och med 0 till 5.)

````javascript
var myString = "Detta är min text";

//kommer att ta ut första platsen till den femte platsen. Vilket innebär att res kommer innehålla "Detta"
var res = myString.substring(0,5);

````

Du kan även ta ange endast en parameter:
````javascript
var lecture = "Detta är en rolig lektion";

let x = lecture.substring(5);

console.log(x); // kommer att skriva ut är "en rolig lektion".
````
## Replace

Sträng objektet har också en metod som heter Replace. Den gör som du läser, den ersätter. Replace metoden tar emot två parametrar.

Första parametern den sträng vill ersätta, andra parametern är den sträng du vill ersätta med.

````javascript
myString = "Du läser på KTH! Din skola heter KTH";

var newString = myString.replace("KTH","Nackademin");

console.log(newString); //Kommer att skriva ut: Du läser på Nackademin
````

## Split
Split delar upp en sträng beroende på tecken du vill dela på och returnerar en array.

````javascript
var myString = "Anna,Kalle,Lisa,Pelle,Emma";

var namnArray = myString.split(",");
````

## Search
Söker efter en viss text och returnerar första indexen som matchar. Om ingen matchning sker, så returneras värdet -1

````javascript
let myString = "Anna,Kalle,Lisa,Pelle,Emma";

let resultat = myString.search("Kalle"); //Ger tillbaka 5.

if (result > -1) {
    //Sökningen gav en träff
} else {
    //Sökningen gav ingen träff.
} 
````

# Datum 
Det finns ett objekt i Javascript som heter Date(). Den innehåller flera metoder.

````javascript
let myDate = Date(); //Ger dagens datum och klockslag.

let today = myDate.getFullYear() + '-'(myDate.getMonth()+1) + '-' +  myDate.GetDate();

//viktig info om getMonth, returnerar egentligen inte rätt månad. Exempelvis om det är Januari så kommer getMonth returnera 0.
myDate.getMonth();
````

## Jämföra två datum

````javascript
let today = new Date();
let newDateDay = new Date();

newDateDay.setDate(newDateDay.getDate() + 5);

let diff = newDateDay - today;
````

### Att testa:
Skriv hur många dagar det är kvar tills din födelsedag.

````javascript
let today = new Date();
let newDateDay = new Date("2019-10-21");
let diff = newDateDay - today;
//Notera att diff är skriven 
console.log(Math.round(diff/ (1000 * 3600 * 24),0) );
````

# Objekthantering

## Vad är ett objekt
Ett objekt är en samling av variabler och funktioner och är en egen datatyp, vilket heter object.

Exempel:

````javascript
let student = {};
student.name = "Kalle"; //Vi skapar en variabel som heter name och anger ett värde.
student.age = 24;
student.course = "Javascript";
````

Undervariablerna i ett objekt är något som kallas egenskaper (Properties).

För att skriva ut en av egenskaperna från ett objekt är relativt enkelt, det är samma sätt som du skriver in värde.

````javascript
let student = {};
student.name = "Kalle";
student.age = 24;
student.course = "Javascript";

console.log(student.name);
````

Du kan även skapa ett objekt på ett annat sätt:
(Notera att när du fördefinerar ett objekt, så använder du commatecken när du skiljer på variabler).
````javascript
let education = {
    course: "Javascript",
    teacher: "Micke",
    duration: 2
}
````

Du kan också nästa objekter genom följande sätt:

````javascript
let education = {
    course: "Javascript",
    teacher: "Micke",
    duration: 2
};

let student = {};
student.name = "Kalle";
student.age = 24;
student.course = education; //lägger till objekt

console.log(student);
````

Du kan lägga in ett objekt i en array.
(Notera att när du lägger in ett värde i en array, så kopierar du värdet. Så då kan du återanvända objektet).

````javascript
let students = [];

let student = { //Skapar ett objekt.
    name: "Kalle",
    age: 24
};

students.push(student); //Lägger in objekt i en array

student = { //återanävnder objektet med nya värden.
    name: "Jessica",
    age: 24
};

students.push(student);  //Lägger in objektet i en array

console.log(students);
````

## Vad är tanken med objektorientering
- Minska beroenden mellan olika delar. Man ska kunna göra ändringar på ett ställe utan att det påverkar andra delar.
- Ökat fokus på informationen som hanteras. Programmets struktur byggs upp kring de informationsobjekt som finns.
- Återanvändning. Det är ofta lättare att återanvända delar från ett program till ett annat.

# Klass
## Vad är en klass
En klass är en mall som du bygger upp kring ett informationsobjekt som du hanterar. Det är alltså något man kan hantera information om tex en kund, order eller produkter.

Den hanterar både informationen och funktionaliteten.

## Hur skapar du en klass
En klass är lite annorlunda att skapa än i andra objekorienterade språk.

Till en början så anger du att du vill skapa en klass med ordet "class". och sedan namnet på klassen du vill ha. I detta exempel Students med följt av måsvingar.

````javascript
class Students {

};
````

För att sedan populera en class med variabler, så behöver vi först skapa en konstruktör som berättar vad som skall skapas. Konstruktören körs alltid när du väl skapar konstruktören.
````javascript
class Students {
    constructor() {
        console.log("Ny student är skapad");
    }
}
````

För att kunna anropa din nya klass gör du med hjälp av "new".

````javascript
class Student {
    constructor() {
        console.log("Ny student är skapad");
    }
}

let elev = new Student(); //Kommer att skriva ut "Ny student är skapad".
````

Nu för att skapa variabler i en class så behöver vi introdecera ett nytt ord, this. Ordet this pekar mot just klassens variabler. Så istället för att använda let att skapa variabler, så använder vi oss av this.

````javascript
class Student {
    constructor() {
        console.log("Ny student är skapad");
        this.name; //Vi skapar nya variabler.
        this.age;
    }
}

let elev = new Student();
````

Vi kan ge variablerna ett värde redan i klassen. Detta gör vi exakt som vi brukar göra med vanliga variabler.

````javascript
class Student {
    constructor() {
        console.log("Ny student är skapad");
        this.name = "Kalle"; //Vi skapar ny variabel och ger den ett nytt värde.
        this.age;
    }
}

let elev = new Student();

````

Vi kan även skicka med data till klassen på samma sätt som vi gör med funktioner, dock är det i constructorn vi skriver in parametrarna.

````javascript
class Student {
    constructor(studentName) {
        console.log("Ny student är skapad");
        this.name = studentName;
        this.age;
    }
}

let elev = new Student("Kalle");
````

Klasser kan också innehålla funktioner (metoder), dock skriver du inte ordet function, utan du skriver bara funktionsnamnet och paranteser.

Nedan exempel så skapar vi en funktion som heter greet.

````javascript
class Student {
    constructor(studentName) {
        console.log("Ny student är skapad");
        this.name = studentName;
        this.age;
    }

    greet() {
        console.log("Hello");
    }
}

let elev = new Student("Kalle");
````

För att anropa en funktion så skriver du din variabels namn med följt av en punkt och sedan metodens namn.

````javascript
class Student {
    constructor(studentName) {
        console.log("Ny student är skapad");
        this.name = studentName;
        this.age;
    }

    greet() {
        console.log("Hello");
    }
}

let elev = new Student("Kalle");

elev.greet(); //kommer att skriva ut Hello.
````

För att kunna använda dig av variabler inne i din klass, så behöver du använda dig av ordet this och sedan variabelns namn.

````javascript
class Student {
    constructor(studentName) {
        console.log("Ny student är skapad");
        this.name = studentName;
        this.age;
    }

    greet() {
        console.log("Hello " +  this.name); //Här lägger vi this med variabelns namn: this.name
    }
}

let elev = new Student("Kalle");

elev.greet(); //kommer att skriva ut Hello Kalle.
````

För att anropa en funktion i klassen så använder du också dig av this ordet.

````javascript
class Student {
    constructor(studentName) {
        console.log("Ny student är skapad");
        this.name = studentName;
        this.age;
        this.greet(); //Anropar funktionen greet i klassen.
    }

    greet() {
        console.log("Hello " +  this.name); //Här lägger vi this med variabelns namn: this.name
    }
}

let elev = new Student("Kalle");// kommer att direkt skriva ut "Hello Kalle".
````