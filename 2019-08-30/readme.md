# **2019-08-30**
## **Sammanfattning**
Loopar och funktioner

## **Vad är en loop**
En loop är att koden upprepas flera gånger.

Det finns 3 olika typer av loopar:
- For-loop
  - ````javascript
    for (let counter = 1; counter < 11; counter++){
        console.log(counter);
    }
    ````
- While-loop
  - ````javascript
    let i = 1;
    while(i < 11 ) {
        console.log(i);
        i++;
    }
    ````


### **Array**
En array innehåller flera variabler, den kan innehålla olika datatyper av variablar.
Arrays börjar alltid på 0.

Du kan skapa arrays på två olika sätt:
````javascript
let numbers = []; //Denna metod är att föredra. Enklare att skriva.
let numbers2 = new Array(); //Denna metod ärlångsammare och kan vara svår att läsa av.
````

Du kan pre-definera arrays genom följande sätt:
````javascript
var numbers = [1,3,56,7];
````
Array:n kommer då se ut som följande om man ska rita upp det grafiskt. Där den övre raden representerar indexet i arrayn och andra randen har värdet.
| 0 | 1 | 2 | 3 |
|--- | --- | --- | ---|
| 1 | 3 | 56 | 7 |

För att komma åt en plats  i arrayn gör du genom följande sätt:
````javascript
var numbers = [1,3,56,7];

console.log(numbers[0]); //Detta kommer skriva ut 1.
````

Du kan kombinera arrayn med loopar genom följande sätt:
````javascript
let numbers = [1,3,56,7];

for(let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]); //Kommer skriva ut 1,3,56 och 7 på var sin rad.
}
````
Ett smartare sätt att gå igenom variabeln:
````javascript
let numbers = [1,2,3,4];
for(let number of numbers) {
    console.log(number); //Kommer att skriva ut 1,3,56 och 7 på var sin rad.
}
````
Det finns också ett annat sätt som heter **in**, det skriver ut arrayns index istället för värdet
````javascript
let numbers = [1,2,3,4];
for(let index in numbers) {
    console.log(index); //Kommer att skriva ut 0, 1, 2, 3 på var sin rad.
}
````

För att kunna spara en array värde i en variabel så behöver du skriva följande:
````javascript
let y;
let numbers = [4,6,2,6];

y = numbers[0]; //Du behöver välja indexet som du vill hämta värdet ifrån

console.log(y); //kommer att skriva ut 4.

y = numbers[3];

console.log(y); //Kommer att skriva ut 6.
````

För att kunna lägga till ett nytt värde i arrayn så använder du använda array funktionen push. Notera att push alltid kommer lägga sitt värde sist.
````javascript
let numbers = [3,4,5,6];

console.log(numbers); //Kommer skriva ut 4.

numbers.push(45); //du skriver då in ditt värde i parantesen för att lägga till ditt värde.

console.log(numbers); //Kommer att skriva ut 5.

for(number of numbers) {
    console.log(number); //Kommer att skriva ut värden: 3,4,5,6, 45.
}
````

För att kunna lägga in värdet först använder du metoden Shift(). 
````javascript
let numbers = [3,4,5,6];

console.log(numbers); //Kommer skriva ut 4.

numbers.unshift(45); //du skriver då in ditt värde i parantesen för att lägga till ditt värde.

console.log(numbers); //Kommer att skriva ut 5.

for(number of numbers) {
    console.log(number); //Kommer att skriva ut värden: 45,3,4,5,6.
````

För att ta bort värdern i en array så använder du pop funktionen. Denna funktion tar alltid bort det sista värdet i arrayn.
````javascript
let numbers = [34,34,45,65];

numbers.pop(); //Notera att pop returnerar värdet som tas bort. Så du skulle kunna spara det.
console.log(numbers); //Kommer ge tillbaka 3.

let x = numbers.pop(); 

console.log(x); //ger värdet 45.
````

För att ta bort det första värdet i arrayn så använder du shift metoden.
````javascript
let numbers = [34,34,45,65];

numbers.shift(); //Notera att pop returnerar värdet som tas bort. Så du skulle kunna spara det.
console.log(numbers); //Kommer ge tillbaka 3.

let x = numbers.shift(); //sparar värdet som tas bort från arrayn.

console.log(x); //ger värdet 34.
````

Utöver datatypen numbers, så kan du också använda dig av strängar.
````javascript
let names = ["Annika", "Kalle", "Jonas"];
````

## **Funktioner**
För att skapa en funktion, gör du genom följande sätt:
````javascript
function hello() { //function, säger att du vill skapa en funktion, sedan får du välja namn på funktionen, i detta fallet är det hello. Till sist behöver du två paranteser och en måsvininge.
    console.log("Hello"); //Innanför måsvingarna skriver du den kod du önskar att exekveras.
}
````
För att anropa funktionen, så skriver du bara följande:
````javascript
hello(); //Viktigt att du har med paranteserna då det informerar kompilatorn att det är en funktion som ska köras.
````

Du kan ge funktioner parametrar:
````javascript
function hello(name) { //Du kan ge parametern vad för namn som helst. Det är en placeholder för det värde du skickar in i funktionen. Du kan se det som en variabel.
    console.log("Hello " +  name); //För att använda värdet du har skickat till funktionen, så skriver du den variabel du angav vid funktionens parameter.
}

//Nu anropar vi funktionen och skriver med en variabel.
hello("Sven");
````
Du kan också ha flera parametrar, du sepererar dem med ett commatecken:
````javascript
function hello(name, age) {
    console.log("Hello %s your age are %s years.",name,age); //Här skriver vi ut variablerna på ett annat sätt. %s är en placeholder som säger till programmet "här kan en variabel läggas till", och om du har flera %s så kan du skriva in flera variablar. Sedan på slutet, så separerar du din sträng med commatecken och anger de variabler i den ordning du vill att dem ska visas. I detta fall ersättes första %s med name och andra %s med age.
}

hello("Stephan",27); //Detta kommer skriva ut: "Hello Stephan your age are 27 years."
````

Funktioner som returnerar ett värde:
````javascript
function feetToMeter(feet) {
    let meter = feet / 3.2808; //Här gör vi en matematiskt uträkning 
    return meter; //sedan returerar vi värdet
}

let x = feetToMeter(33); // om vi har en variabel före funktionen så kan vi får tillbaka värdet.

console.log(x); //Detta kommer skriva ut 10.05852231163131
````

Du kan returnera värden direkt utan att använda dig av variabel i funktionen eller utanför:

````javascript
function rectArea(width, height) {
    return width*height;
}
console.log(rectArea(3,4)); //kommer skriva ut 12
````
Du kan kalla en funktion med en funktion som parameter:
````javascript
//Vi vill omvandla feet till meter
function feetToMeter(feet) {
    return feet / 3.2808;
}
//beräkna arean av en rectangel.
function rectArea(b,h) {
    return b*h
}

console.log(rectArea(feetToMeter(33),feetToMeter(10))); //Det är inte rekommenderat att skriva så här, men vill endast visa att det är möjligt att kalla en funktion i en funktion som parameter.
//Kort förklarat är att Innan rectArea blir kallad, så kommer feetToMeter(33) att beräknas först, och sedan feetToMeter(10), där efter har vi två värden, som kommer beräknas av rectArea. 
//resultatet blir då 30.658748816237836

````

Default värde i parametrar:
(Viktigt! Default värden måste vara sist, alla värden efter första default värdet måste också ha default parametrar)
````javascript
function hello (name, age = 10) {
    console.log("%s %s",name,age);
}
hello("Stephanie");
````
Exempel på defaultvärden som inte fungerar:
````javascript
function hello(name, age = 10, city) {
    console.log("%s are %s years old and lives at %s", name, age, city); //Detta kommer ge ut  "Stephan are 10 years old and lives at undefined"
}

hello("Stephan");
````

Om det skickas med fler parametrar som funktionen inte klarar av så rekommenderas det att lägga till ... med ett eget variabelnamn på slutet. Det kommer då bli en array med de värden som inte förväntades i funktionen.

````javascript
function hello (name, age, ...rest) {
    console.log (name + age); //kommer att skriva ut Stephanie43
    console.log (rest); //kommer skriva ut Array ["Stockholm", "konstiga intressen"]
}

hello ("Stephanie", 43, "Stockholm", "konstiga intressen");
````

Anonyma funktioner (Anonymous functions) är funktioner som inte har ett funktionsnamn. Istället sparar man ofta funktionen i en variabel. Orsaken för detta är att snyggare skicka vidare funktioner som parametrar.
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
Är en ruta som dyker upp för att läsa in data från användaren.
Alert är en ruta som som skriver ut info till användaren.
(Notera att detta är en funktion som sällan används)
````javascript
let name = prompt("Vad heter du");

alert("Hej %s",name);
````