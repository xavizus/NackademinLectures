# Styra utseende med JS
Du kan med hjälp av JS styra vissa enskilda styles.

````html
<body>
    <div id="something"></div>
</body>
````

````javascript
  document.getElementById("something").style.backgroundsColor = "#ccdd33";
````

Du kan även lägga till och ta bort klasser för ett element

````html
<body>
    <div id="div1" class="classToBeRemoved">
    </div>
</body>
````

````javascript
document.getElementById("div1").classList.add("classToBeAdded");

document.getElementById("div1").classList.remove("classToBeRemoved");
````
Med ovan javascript kommer följande ha ändrats i HTML:

````html
<body>
    <div id="div1" class="classToBeAdded"> <!--Notera att classToBeRemoved är nu borttagen-->
    </div>
</body>
````

## Uppgift
- Skapa en klass som visar vilken spelare som är aktiv.
- Skapa en knapp sög gör att aktiv spelare ändras varje gång du klickar på knappen.
- Skapa en klass som gör det tydligt att en ”poäng” (t ex raden för fyrtal eller kåk) är otillgänglig.

**Tips**: \
Använd dig av något som kallas colgroup.
Ett exempel:
````html
<table>
<colgroup>
<col class="players" id="player1">
<col class="players" id="player2">
<col class="players" id="player3">
</colgroup>
<tr>
    <th>Player 1</th>
    <th>Player 2</th>
    <th>Player 3</th>
</tr>
<tr>
    <td>Row 1</td>
    <td>Row 1</td>
    <td>Row 1</td>
</tr>
<table>
<input type="text" id="player_turn" value="0"><br>
<button id="changePlayer">Change Player</button>
````

````css
.players {
  background-color: yellow;
}

.active {
  background-color: red;
}
````

````javascript
let changePlayerButton = document.getElementById("changePlayer");
changePlayerButton.addEventListener("click", change)

function change() {
    let index = Number(document.getElementById("player_turn").value) + 1;
    if (index > 3) {
        index = 1;
    }
    let activePlayers = document.getElementsByClassName("active");

    for (let element of activePlayers) {
        element.classList.remove("active");
    }

    document.getElementById("player" + index).classList.add("active");
    document.getElementById("player_turn").value = index;
}
````
# jQuery
jQuery är ett bibliotek med färdiga funktioner som du kan använda dig av. För att använda sig av jQuery så inkluderar du den som ett vanligt JavaScript

````html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

````

För att kunna använda sig av jQuery så behöver du se till att din egna JS-fil inkluderas efter jQuery:
````html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="./minJsFil.js"></script>
````

## Funktioner/metoder i jQuery

Du använder dig av jQuery funktionerna med följande syntax:
````javascript
$(selector).action(); //Där selector är på vilka element du vill utföra din action på.
//action, är den metod/funktion du vill använda dig av.

$(this).hide(); //gömmer aktuellt element
$("p").hide(); //gömmer alla p-element
$(".test").hide(); //gömmer alla element med klassen test
$("#test").hide() //gömmer elementet med id test
````

````javascript

//följande kod är skriven med hjälp av jQuery
$(document).ready(function() { //När dokumentet är laddat
    $("button").click(function() { //lyssnar på när en knapp trycks till
        $("p").toggle(); //dölj eller visa alla <p> element.
    })
})

//ovan kod är ekvalent med följande kod:

document.addEventListener("DOMContentLoaded", function(e) {
    getElementsByTagName("button").addEventListener("click", function(e){
        let elements = getElementsByTagName("p");
        
        for(let element of elements) {
            if(element.style.display == "none";) {
                element.style.display = "inline";
            } 
            else {
                element.style.display = "none";
            }
            
        }
    });
});
````

## Uppgiften

- Skapa en gästbok där användare kan fylla i namn och meddelande och innehållet läggs till på sidan när man klickar på en knapp. Tänk facebook.
- Lägg till en knapp i varje meddelande på sidan som låter användaren ta bort en kommentar. Fråga om användaren är säker först med confirm. Lägg därefter på en klass på meddelande som gör bakgrunden röd och gör en fadeout på elementet.