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