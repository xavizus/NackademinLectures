# **2019-09-17**

## Events
Det finns flera olika typer av events som du kan använda dig av när du använder dig av `document.addEventListener("EVENTYPE", function (e) {});`

De events som är vanligast är nedan:

- *kepress* - Innebär när du håller in en knapp
- *keydown* - När du trycker in en knapp (Skillnaden mellan keypress och keydown, är att keypress så behöver du hålla in för knappen för att något ska hända, medan keydown så körs skriptet på en gång).
- *keyup* - När du släpper knappen du tryckt in.
- *click* - När du klickar på knappen
- mousedown - När ett pekdon (dvs mus), trycker in knappen
- mouseup - När ett pekdon släpper knappen
- change - Så fort det sker en förändring så körs denna event.
- submit - körs när submit-knappen är tryckt

Mer information om alla events hittar du nedan:
https://developer.mozilla.org/en-US/docs/Web/Events

## Yatzy

### Övning
Skapa en funktion som gör beräkningen för att uppdatera summan.

Ta bort beräkna-knappen och gör så att summan uppdateras när något av fälten (ettor, tvåor t.o.m.sexor) ändras. Gör det bara för en spelare, ni kommer troligen att vilja lösa detta mer generellt senare. (Använd event change för detta).

Gör ett tärningsgormulär med fem text-rutor, fem kryssrutor (checkbox) och en knapp. När man klickar på knappen så ska de rutor som inte är kryssade få ett nytt tal.

## getElementById
Returnerar elementet som matchar Id:t du anger.
`var element = document.getElementById(id)`

## getElementsByClassName

Returnerar alla element som matchas \
Returnerar en hHTMLCollection som är rätt lik en array.

````javascript
//Get all elements that have a class of 'test'
let elements = document.getElementsByClassName('test');

let elements = document.getElementsByClassName('red test');

let elements = document.getElementsById('main').getElementsByClassName('test');
````

## HTMLCollection
HTMLCollection är som en array, fast egentligen inte. Så vanliga metoder du är van vid att använda kommer troligen inte att fungera.

För att lösa det i javascript så kan du göra det på följande sätt

````javascript
var list = document.getElementsByClassName("events");

list = Array.from(list); //Detta konventerar HTMLCollection till en riktig array. Så nu kan du använda array metoder.

````

## getElementsByTagName

Returnerar alla element som matchar på taggen name. Den returnerar en array.

````html
<p>Detta är en paragraph</p>
````

````javascript
//Get all elements by the tag
let elements = document.getElementsByTagName('p');

//Notera att elements variabeln kommer att vara en array.

````

## querySelector

Returnerar det första elementet som matchar

````javascript
let el = document.querySelector(".myClass");
````

`querySelectorAll` returnerar alla matchande element.

## getAttribute / setAttribute
`getAttribute` och `setAttribute` ger oss möjligheten att lägga till attribut på taggar i html. 

````html
<!-- Säg att vi har följande HTML-kod-->
<body>
    <div id="div1" align="center">
    </div>

    <button>testknapp</button>
</body>
````
Efter att vi kör följande javascirpt, så kommer det att ändra attribut och hämta attribut.
````javascript
//getAttribute

var div1 = document.getElementById("div1");
var align = div1.getAttribute("align"); //variabeln kommer då ha "center" som värde

//setAttribute
var b = document.querySelector("button");
b.setAttribute("name","helloButton"); // Här sätter vi attributet name, med värdet "helloButton"
````

````html
<!-- Efter att vi kört Javascript koden ovan, så kommer button att ändras som nedan.-->
<body>
    <div id="div1" align="center">
    </div>

    <button name="helloButton">testknapp</button>
</body>
````

## innerHTML / textContent

textContent har bättre prestanda eftersom dess innehåll inte blir kontrollerad som HTML-kod. Dessutom kan textContent förhindra XSS attacker.

Cross-site scripting (XSS) är ett säkerhetshål som låter någon injicera skadlig kod. Denna kod körs av klienten.

https://www.sentor.se/kunskapsbank-it-sakerhet/appsakerhet/vad-innebar-cross-site-scripting-xss

## Lambda-funktioner

Lambda-funktioner är ett uttryck som skapar annonyma funtktioner

Innan version ES6 av JavaScript så skapa du en annonym funktion på följande sätt:\
``var anon = function(a,b)  {return a+b};``

ES6 versionen så kan du skriva på ett annat sätt \
``var anon = (a,b ) => a + b; ``

Det går att skippa paranteserna om man bara har en parameter\
``var anon = a => a;``

## Array-metoder
I javascript finns det färdiga metoder du kan ta hjälp av för att hantera arrayer på ett smidigt sätt. Vi kommer att gå igenom följande:
- map
- filter
- reduce

### Map

*map()*-metoden skapar en ny array med resultatet av den array so anropar metoden map.

````javascript
const myArray = [1,2,3,4];

//Value innehåller värdet som finns i arrayn
//index är index-värdet i arrayn (Optional)
//array är en referens till array:n vi går igenom. (Optional)
const myArrayTimesTwo = myArray.map((value, index, array) => {
    return value * 2;
});

console.log(myArray); //1,2,3,4
console.log(myArrayTimesTwo); //2,4,6,8
````


## Filter

*filter* tar emot samma argument som map och fungerar liknande. Enda skillnaden är att callback-funktionen måste retura *true* eller *false*. Om den returerar *true* kommer arrayen att behålla elementet, om den returnerar *false* kommer den att filtreras bort.

````javascript
const myArray = [1,2,3,4];

//Value innehåller värdet som finns i arrayn
//index är index-värdet i arrayn (Optional)
//array är en referens till array:n vi går igenom. (Optional)
let myEvenArray = myArray.filter((value, index, array) => {
    return value % 2 === 0; // Du kan se detta som en if-sats också. Denna returnerar true, för varje tal som är helt delbart med 2.
});

//för att illustera själva return värdet så visar jag en if-sats:
let myEvenArray = myArray.filter((value, index, array) => {
    if(value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
});

console.log(myArray); //[1,2,3,4]
console.log(myEvenArray); //[2,4]
````

## Reduce
*reduce* tar en array och reducerar den till ett enda värde. Du kan t ex använda det för att räkna ut medelvärdet av alla värden i arrayen.

````javascript
const myArray = [1,2,3,4];

//acc är det nuvarande accumelerade värdet.
//currValue är det värde vi befinner oss på just nu
//currIndex är indexvärdet på arrayn vi just då befinner oss på.
//array är det array som vi vill kontrollera.
const sum = myArray.reduce((acc, currValue, currIndex, array) => {
    return acc + currValue;
},
//Denna nolla betyder att vi ska börja på 0 på det accumelerade värdet.
0);

const avg = sum / myArray.length;

console.log(avg); //2.5
````
## Map, filter och reduce
Du hittar mer information på följande plats:
https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4


## Uppgift
- Map: Hämta alla värden från siffrorna 1-6 till en HTMLCollection. Skapa en ny array med alla värden från arrayen.
- FIlter: Skapa en HTMLCollection från ett par kryssrutor. Skapa en ny array med de checkboxar som är ikryssade.
- Reduce: Hämta alla värden från siffrorna 1-6 till en HTMLCollection. Räkna ihop summan med hjälp av reduce.