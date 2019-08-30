# **2019-08-30**
## **Sammanfattning**
Loopar och funktioner

## **Vad är en loop**
En look är en upprepande av en kod.

Finns 3 olika typer av loopar:
- For-loop
  - ````javascript
    for (let counter = 1; counter < 11; counter++){}
    ````
- While-loop
  - ````javascript
    let i = 1;
    while(i <11 ) {
        console.log(i);
        i++;
    }
    ````


### **Array**
En array innehåller flera variabler av samma typ.
Arrays börjar alltid på 0.

Du kan skapa arrays på två olika sätt:
````javascript
let numbers = [];
let numbers2 = new Array();
````

Du kan pre-definera arrays genom följande sätt:
````javascript
var numbers = [1,3,56,7];
````
Array:n kommer då se ut som följande om man ska rita upp det grafiskt.
0 | 1 | 2 | 3
--- | --- | --- | ---
1 | 3 | 56 | 7

För att komma åt en plats  i arrayn gör du genom följande sätt:
````javascript
var numbers = [1,3,56,7];

console.log(numbers[0]);
````

Du kan kombinera arrayn med loopar genom följande sätt:
````javascript
let numbers = [1,3,56,7];

for(let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}
````
Ett smartare sätt att gå igenom variabeln:
````javascript
let numbers = [1,2,3,4];
for(let number of numbers) {
    console.log(number)
}
````
Det finns också ett annat sätt som heter **in**, det skriver ut arrayns index istället för värdet
````javascript
let numbers = [1,2,3,4];
for(let index of numbers) {
    console.log(index);
}
````

För att kunna spara en array värde i en variabel så behöver du skriva följande:
````javascript
let y;
let numbers = [4,6,2,6];

y = numbers[0]; //Du behöver välja indexet som du vill hämta ut värdet

console.log(y); //kommer att skriva ut 4.

y = numbers[3];

console.log(y); //Kommer att skriva ut 6.
````

För att kunna lägga till ett nytt värde i arrayn så använder du array funktionen push. 
````javascript
let numbers = [3,4,5,6];

console.log(numbers); //Kommer skriva ut 4.

numbers.push(45); //du skriver då in ditt värde i parantesen för att lägga till ditt värde.

console.log(numbers); //Kommer att skriva ut 5.

for(number of numbers) {
    console.log(number); //Kommer att skriva ut värden: 3,4,5,6, 45.
}
````

Utöver datatypen numbers, så kan du också använda dig av strängar.
````javascript
let names = ["Annika", "Kalle", "Jonas"];
````

För att ta bort värdern i en array så använder du pop funktionen.
````javascript
let numbers = [34,34,45,65];

numbers.pop(); //Notera att pop returnerar värdet som tas bort. Så du skulle kunna spara det.
console.log(numbers); //Kommer ge tillbaka 3.

let x = numbers.pop(); 

console.log(x); //ger värdet 45.
````

Ofärdigt
metoden Push lägger till värdet i slutet
Pop tar 
shift tar bort första värdet

--
## **Funktioner**
För att skapa en funktion, gör du genom följande sätt:
````javascript
function hello() {
    console.log("Hello");
}
````
För att anropa funktionen, så skriver du bara följande:
````javascript
hello();
````

Du kan ge funktioner parametrar:
````javascript
function hello(name) {
    console.log("Hello " +  name);
}

hello("Sven");
````
Du kan ha flera parametrar:
````javascript
function hello(name, age) {
    console.log("Hello %s your age are %s years.",name,age);
}

hello("Stephan",27);
````

Returnation av värden.

````javascript
function feetToMeter(feet) {
    let meter = feet / 3.2808;
    return meter;
}

let x = feetToMeter(33);

console.log(x);
````

Du kan returnera värden direkt utan att använda dig av variabel.

````javascript
function rectArea(width, height) {
    return width*height;
}
console.log(rectArea);
````
Du kan kalla en funktion med en funktion som parameter:
````javascript
function feetToMeter(feet) {
    return feet / 3.2808;
}

function rectArea(b,h) {
    return b*h
}

console.log(rectArea(feetToMeter(33),feetToMeter(10)));

````

Default värde i parametrar:
(Viktigt! Default värden måste vara sist, alla värden efter första default värdet måste ha default parametrar)
````javascript
function hello (name, age = 10) {
    console.log("%s %s",name,age);
}
hello("Stephanie");
````

Om det skickas med fler parametrar som funktionen inte klarar av så rekommenderas det att lägga till ... med variabelnamn på slutet

````javascript
funtion hello (name, age, ...rest) {
    console.log (name + age);
    console.log(rest);
}

hello ("Stephanie", 43, "Stockholm", "konstiga intressen");
````

Annonyma funktioner:
````javascript
let myFunction = function (name,age) {
    console.log(name + age);
}

myFunc("Micke",43);
````

## **localStorage**
Är ett sätt att spara data på användarens webbbrowser.

````javascript
localStorage.setItem("User","Kalle");
````

## **prompt**
Är en ruta för att läsa in data från användaren.
Alert är en ruta som 
````javascript
let name = prompt("Vad heter du");

alert("Hej %s",name);
````