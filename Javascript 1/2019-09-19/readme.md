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

## Uppgift

- Skapa en gästbok där användare kan fylla i namn och meddelande och innehållet läggs till på sidan när man klickar på en knapp. Tänk facebook.
- Lägg till en knapp i varje meddelande på sidan som låter användaren ta bort en kommentar. Fråga om användaren är säker först med confirm. Lägg därefter på en klass på meddelande som gör bakgrunden röd och gör en fadeout på elementet.

# Kodkvalitet
Det finns verktyg som hjälper dig att validera din kod exempelvis:
- https://validator.w3.org/ - validerar HTML, XHTML, SMIL, etc.
- http://www.css-validator.org/ - validerar CSS kod

Sen finns det analysverktig som du kan använda dig av för att kontrollera om koden följer kodreglerna för JS exempelvis:
- https://www.jslint.com/
- https://jshint.com/

# Spara data i klienten
Det finns flera olika sätt att spara data hos klienten.
- Cookies
- Local storage
- (Web SQL Database)
- IndexedDB
- FileSystem API
Du kan hitta mer om Client-side storage på följande länk: https://www.html5rocks.com/en/tutorials/offline/storage/

Vi kommer gå igenom dem två vanligaste formerna: Cookies och Local Storage

## Cookies

### Skapa cookies
För att skapa en cookie så använder du följande syntax `document.cookie = "variabel=dittVärde;expires="date"`

Se följande javascript för praktiskt exempel:
````javascript
//Det jobbigaste enligt mig när det kommer till cookies är att fixa till datumet då det behöver vara som en sträng i UTC.

let expireDate = new Date(); //Skapar en Date-object 
let daysInFuture = 35 * (24 * 60 * 60 * 1000); //Eftersom att date-objektet arbetar i milisekunder, så behöver vi beräkna om vårt antal dagar till milisekunder.
// 35 = dagar
// hur många timmar är det per dag? 24 timmar
// hur många minuter är det per timma? 60 minuter
// hur många sekunder är det per minut? 60 minuter
// hur många milisekunder är det per sekund? 1000 milisekunder. 
// detta ger oss ett totalt värde på: 3 024 000 000

expireDate.setTime(expireDate.getTime() + daysInFuture ); //Nu sätter vi vårt utgångsdatum, vilket vi gör genom att ta "nu datumet" och lägger till vårt antal dagar i framtiden. 

document.cookie = "username=xavizus;expires=" + expireDate.toUTCString() + ";"; //Nu sätter vi dit vår cookie och gör om vårt utgångsdatum till en UTC sträng, vilket ser ut som följande:
// Thu, 01 Jan 1970 00:00:00 UTC
````

### Läsa cookies
Tyvärr finns det ingen inbyggd funktion för att hämta ut just en specifik cookie värde. Så det är något du behöver själv bygga upp.

Det enklaste sättet för att komma åt hela strängen för en cookie är på följande sätt:
````javascript
let expireDate = new Date(); 
let daysInFuture = 35 * (24 * 60 * 60 * 1000);

expireDate.setTime(expireDate.getTime() + daysInFuture ); 

document.cookie = "username=xavizus;password=Test123;expires=" + expireDate.toUTCString() + ";";

let myCookie = document.cookie;

console.log(mycookie); //Kommer att skriva ut: username=xavizus;password=Test123;
````

Ett litet snabbt exempel för att få ut värdet för din cookie:

````javascript

//Konventera en cookie sträng till ett objekt
function convertCookieStringToObject(fullCookieString) {

    let cookieAsObject = {}; //Skapa ett tomt objekt

    let cookieVariablesInArray = fullCookieString.split(";"); //Skapa en array genom att splitra upp cookiesträngen efter varje semicolon.
    // cookieVaraiblesInArray ser ut som följande
    // ["username=xavizus", "password=Test123"]

    // Nu går vi igenom vår array
    for(let cookieVariable of cookieVariablesInArray) {
        // cookieVariable kommer ha vårt sträng värde, exempelvis: "username=xavizus"

        // För att få ut variabelnamnet och värdet så splittar vi upp det igen, med hjälp av "=" teknet
        let [variableName, variableValue] = cookieVariable.split("=",2); // Notera att vi skapar två variabler i en array, detta gör att vi slipper använda oss av en array när vi ska använda värderna.
        cookieAsObject[variableName] = variableValue;

        /*
        För att demostrera ovan nya sätt att göra variabler från en array så tänkte jag visa hur det skulle se ut om vi inte skulle göra det till variabler:

        let variableNameAndValue = cookieVariable.split("=",2);

        cookieAsObject[variableNameAndValue[0]] = variableNameAndValue[1];

        // Vilket är enklast att läsa och förstå?
        
        */
    }

    //returnera vårt objekt
    return cookieAsObject;
}


let expireDate = new Date(); 
let daysInFuture = 35 * (24 * 60 * 60 * 1000);

expireDate.setTime(expireDate.getTime() + daysInFuture ); 

document.cookie = "username=xavizus;password=Test123;expires=" + expireDate.toUTCString() + ";";

let myCookies = convertCookieStringToObject(document.cookie);

console.log(myCookies); //Kommer att skriva ut: object { username: "xavizus", password: "Test123"}
````

## Local storage

Local storage låter dig förvara information på klientens webbläasre. Det som är viktigt att komma ihåg är att en server kan inte komma åt klientens local storage, dock kan servern komma åt klientens cookies.

För att sätta dit data i local storage användaer du följande syntax
````javascript
localStorage.setItem('variableName', 'variableValue');

//praktsikt exempel:
localStorage.setItem("username", "xavizus");
````

Till skillnad från cookies, så finns möjligheten att hämta ut datat på ett enkelt sätt:

````javascript
let exampleVariable = localStorage.getItem("variableName");

//Praktiskt exempel:
let username = localStorage.getItem("username");
````

För att ta bort en variabel i local storage gör du genom följande sätt:
````javascript
localStorage.removeItem('variableName');

//Praktiskt exempel:
localStorage.removeItem('username');
````

Det går även att ta bort hela localStorage:
````javascript
localStorage.clear();
````

## JSON

JSON, JavaScript Object Notation, är ett sätt att förvara data i ett strukturerat textformat. JSON används främst i API:er (Se mer om API nästa avsnitt) när dataväxling sker. Exempelvis, om du kontaktar en tjänst.

Praktiskt exempel, så har stockholm öppen data, https://dataportalen.stockholm.se/dataportalen/?SplashScreen=No, där dem har exempelvis Anmälda våldsbrott i Stockholm kommun: http://api.kolada.se/v1/data/permunicipality/N07403/0180 då får vi tillbaka en JSON formaterad data.

JSON data är praktiskt taget ett javascript objekt. Se exempel nedan:
````JSON
{      
    "firstName": "Jason",      
    "lastName": "Smith",      
    "age": 25,     
    "address": {          
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",  
        "postalCode": "10021"
    },
    "phoneNumber": [
        { "type": "home", "number": "212 555-1234" },
        { "type": "fax", "number": "646 555-4567" }
    ],     
    "newSubscription": false,
    "companyName": null
}
````
Datan du får tillbaka kommer som JSON dataformat, dock förstår inte JavaScript att det är JSON, utan behandlar det som en lång sträng. Det finns ett enkelt sätt att göra om en sträng med JSON data till ett objekt i JavaScript.

````javascript
var obj = JSON.parse(text); //där text är din JSON-sträng.
````

## API
API, står för Application Programming Interface, det är ett sätt som låter system prata med varandra trots att dem inte är skriva i samma programmeringsspråk.

Med hjälp av API:er så kan vi hämta och skicka data från / till en server och det är vanligen i JSON eller XML format som du tar emot / skickar data.

Vissa API:er käver att du behöver autentisera dig i ett anropp för att få tillgång till data.
Ett exempel så har Trafikverket att du behöver använda dig av en authentiserings nyckel: https://www.trafikverket.se/tjanster/Oppna_data/

## AJAX med jQuery

AJAX är en metod att kunna skicka och ta emot data med en server och uppdatera delar av hemsidan, utan att behöva laddda om hela hemsidan. Man kallar det ofta att man kör en Asynkron datahämtning. Det innebär att vi inte behöver vänta på svaret, utan fortsätter att bearbeta resten av skriptet.

Asynkron har en väldigt stor nackdel, det är att sändaren aldrig vet om mottagaren verkligen har tagit emot meddelandet.

Du använder dig av AJAX genom följande sätt:

````html
<button>
    Klicka på mig
</button>
````

````javascript

//Vänta och kör tills elementet button är tryckt.
$("button").click(function(){

    //Kör ajax
    $.ajax({
        //vart ska vi fråga efter data
        url: 'http://api.kolada.se/v1/data/permunicipality/N07403/0180',

        //vad för datatyp förväntar vi att få tillbaka?
        dataType: 'json',
        
        //om servern svarar tillbaka,
        sucess: function(data) {
            //skriv ut datat.
            console.log(data);
        }
    })
});
````

### Uppgift
Skapa en sida som presenterar en person. Vid knapp-klick ska ni hämta data från api:et med ett ajax-anrop och uppdatera data i sidan med resultatet.
Du kan ta hjälp av följande API:et:
- https://randomuser.me/api/