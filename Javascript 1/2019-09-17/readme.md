# **2019-09-17**

## Referens

## Event
Var är det för typ av event?

````HTML
<button id="calc">Beräkna</button>
````

````javascript
let calc_button = document.getElementById("calc);

calc_button.addEventListener("click", function(event) {
    //Do something
});
````

## Funktioner

````javascript
document.addEventListener("DOMContentLoaded", function(evenet) {
    let headline = document.getElementByID("headline");
    headline.innerHTML = "Lorem ipsum";
});

````

- kepress
- keydown
- keyup
- click
- mousedown
- mouseup
- change
- submit
- https://developer.mozilla.org/en-US/docs/Web/Events

## Yatzy

Skapa en funktion som gör beräkningen för att uppdatera summan

Ta bort beräkna-knappen och gör så att summan uppdateras när något av fälten (ettor, tvåor t.o.m.sexor) ändras. Gör det bara för en spelare, ni kommer troligen att vilja lösa detta mer generellt senare.

Gör ett tärningsgormulär med fem text-rutor, fem kryssrutor och en knapp. När man klickar ska de rutor som inte är kryssade få ett nytt tal.

## getElementById
Returnerar elementet som matchar
`var element = document.getElementById(id)`

## getElementsByClassName

Returnerar alla element som matchar \
Returnerar en hHTMLCollection som är rätt lik en array.

````javascript
//Get all elements that have a class of 'test'
let elements = document.getElementsByClassName('test');

let elements = document.getElementsByClassName('red test');

let elements = document.getElementsById('main').getElementsByClassName('test');
````

## HTMLCollection
HTMLCollection är som en array.

````javascript
var list = document.getElementsByClassName("events");
for (let item of list) {
    console.log(item.id);
}

````

## getElementsByTagName

Returnerar alla element som matchar

````javascript
//Get all elements by the tag
let elements = document.getElementsByTagName('p');

````

## querySelector

Returnerar det första elementet som matchar

````javascript
let el = document.querySelector(".myClass");
````

querySelectorAll returnerar alla matchande element.

## Selektorer
Hur skulle ni kunna navända dessa funktioner för att effektivisera era beräkningsfunktioner.

## getAttribute / setAttribute

````javascript
//getAttribute

var div1 = document.getElementById("div1");
var algin = div1.getAttribute("align");

//setAttribute
var b = document.querySelector("button");
b.setAttribute("name","helloButton");

````

## innerHTML / textContent

textContent har bättre prestanda eftersom dess innehåll inte parses som HTML. Dessutom kan textContent förhindra XSS attacker.

Cross-site scripting (XSS) är ett säkerhetshål som låter någon injicera skadlig kod. Denna kod körs av klienten.

https://www.sentor.se/kunskapsbank-it-sakerhet/appsakerhet/vad-innebar-cross-site-scripting-xss

## Lambda-funktioner

Uttryck som skapar funtktioner

Pre-ES6:
``var anon = function(a,b)  {return a+b};``

ES6: \
``var anon = (a,b ) => a + b; ``

Går att skippa paranteserna om man bara har en parameter
``var anon = a => a;``

````javascript
//jämför
//filter är som en foreach-loop
[1,2,3,4].filter(function(value){
    return value %2 === 0;
}) ;

//med anonym 

[1,2,3,4].filter

//map

const myArray = [1,2,3,4];

//Value innehåller värdet i arrayn
//index är index-värdet i arrayn
//array är en referens till array:n vi går igenom.
const myArrayTimesTwo = myArray.map((value, index, array) => {
    return value * 2;
});

console.log(myArray); //1,2,3,4
console.log(myArrayTimesTwo); //2,4,6,8
````

*map()*-metoden skapar en ny array med resultatet av att anropa en funktion för varje array-element.

*map()* - metoden anropar den angivna funktionen en gång per element i arrayen i ordning.

## Filter

*filter* tar emot samma argument som map och fungerar liknande. Enda skillnaden är att callback-funktionen måste retura *true* eller *false*. Om den returerar *true* kommer arrayen att behålla elementet, om den returnerar *false* kommer det att filtreras bort.

````javascript
const myArray = [1,2,3,4];

let myEvenArray = myArray.filter((value, index, array) => {
    return value % 2 === 0;
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

- Map: Hämta alla värden från siffrorna 1-6 till en HTMLCollection. Skapa en ny array med alla värden från arrayen.
- FIlter: Skapa en HTMLCollection från ett par kryssrutor. Skapa en ny array med de checkboxar som är ikryssade.
- Reduce: Hämta alla värden från siffrorna 1-6 till en HTMLCollection. Räkna ihop summan med hjälp av reduce.