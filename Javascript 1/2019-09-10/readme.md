# Webbformulär

## Vad är ett webbformulär
Det är ett sätt att hämta och skcika information
Vid inmatning av data så kan man ta emot flera fält om gången och olika datatyper.
- Text
- Nummer
- Datum
- Dropdowns
- Kryssrutor
- Radioknappar

## Hur använder man sig av webbformulär:

````html
<form>
    Namn: <br>
    <input>
</form>
````

## Form-taggen
Form-taggen representerar hela formuläret
Attribut
- Method-attributet beskriver hur formuläret ska skickas
- Actio- attributet beskriver vad som ska hända när man skickar in formuläret.
- Hur formuläret ska skickas? Det 

## Internets uppbyggnad
- Det är uppbygt av militären
- Om en stad wipas ut måste informationen fortfarande kunna komma fram.
- Internet är decentraliserat

### IP-adress
- Varje dator / enhet måste få en unik IP-adress
  - 192.168.2.144 (IPv4)
  - 2001:0db8:0000:0000:0000:0000:1428:07ab/64
### DNS
Står för Domain Name System. Det är ungefär som en adressbok för IP-adresser
När du försöker nå exempelvis dn.se, så kommer din dator skicka vidare frågan vilken ip-adress son dn.se ha.

### http statuskoder
- 200: OK
- 301: moved permantly
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal server error

### HTTP
ANvända med åtta olika kommandon:
- GET
- HEAD
- POST
- PUT
- DELETE
- TRACE
- OPTIONS
- CONNECT

Svaret från webbservern innehåller en HTTP-stauskod

## Input-taggen
Label, kan användas för att paras ihop med en unput-fältet
Label kan änven användas för att göra det lättare att klicka på fältet.
Label-taggen har ett attribut "for" som kopplas till input-taggens id

````html
<label for="name">Name</label>
<input id="name" type="text">
````

## Input-taggen type
Om man inte anger en type, så får man automatiskt text typen.
  - Text 
  - number
  - checkbox
  - radio
  - password
  - email
  - url
## Input-taggen placeholder
Placeholder-attributet sätter en hjälptext inuti text-fältet som försvinner när fältet får fokus. \
Placeholder texter används ofta för att förtydliga för användaren vad de ska fylla i.

## Input-taggen value
Value-attributet fyller inputfältet med en förifyllt värde som inte försvinner när fältet får fokus \
Value-texten används för redan känt data som användaren kan välja att ändra eller inte.

Ett bra sätt att använda sig av value, är att kunna förifylla värden om användaren har fyllt i fel värden, och då kan man populera 

## Textarea-taggen
Textarea är ett input-fält för längre textstycken. \
Attributet maxlenght sätter en gräns på antal tecken i fältet. \
Textarea har inget value-atribut

## Select-taggen
Selectskapar en dropdown lista. \
Alternativen i listan beskrivs i option taggar med value-attribut \
Selected i option taggen sätter det alternativet som förvalt.

## Disabled och required
- Disabled - är att låses så att det inte går att ändra på eller använda sig av.
- Required - gör att användarn måste sätta ett värde på det fältet.


# Interaktion med HTML / CSS
Du kan inportera JavaScript-filer i HTML med hjälp av följande tagg:
````javascript
<script src="script1.js"></script>
````
Det är rekommenderat att importera JavaScript filer på slutet av din HTML-kod, så att sidan laddar snabbare (precis innan \</body>-taggen) \ 
Javascript kan nå HTML-elementen och ändra dem. \
Javascript kan aktiveras av användaren genom HTML-sidan

# DOM (Document Object Model)
Detta är en objekt-representation av html-koden. DOM är platforms- och språkoberoende gränssnitt som ger programspråk möjligheten att dynamsiskt läsa och uppdatera ett dokuments innehål, struktur och formatering. \
Alla element i dokumentet representeras i browsern av var sitt objekt.

## DOM Event
DOM Event är ett att meddela att något har hänt i webbläsaren. Exempelvis när en användare trycker på något.


## Interaktion med HTML/CSS
- Nå HTML element från JavaScript-filen
- Vad är/gör dessa deler
- VERSALER/Gemener är viktigt i JS.

````javascript
document.addEventListener(event, function(e)); //Listener är en lyssnare. - event är en sträng där man anger vad det är som händer. Där andra parametern
````
- getElementByID ger oss en referens till objektet som represetrar elementet med detta id i DOM:en
Det låter oss hämta information från elementet eller ändra på det.

````javascript
//DOMContetLoaded, innebär att hela DOM:en är inläst.
document.addEventListener("DOMContetLoaded", function(e) {
    let headline = document.getElementByID("headline");
    //Ovan kod variabel hämtar elementet som har ID:t headline. Notera att det är en referens till hela elementet
    /*
    <h1 id="headline>Hello</h1>
    */

    let text = headline.innerHTML; // innerHTML kommer då ge texten Hello.
});
````

Se till att du inte skriver Javascript behöver du alltid ha med dig detta:
````javascript
document.addEventListener("DOMContentLoaded", function(e) {
}
````
För att ändra HTML-elemet med javascript så gör du följande:

````javascript
document.addEventListener("DOMContentLoaded", function(e) {
    let headline = document.getElementByID("headline");
    let OldText = headline.innerHTML;

    headline.innerHTML = "New Headline"; // Ändrar innehållet av headline
    headline.style.color = "#0000FF"; //Sätter färgen blå på texten.
});
````

Du kan hämta information från inputfälten \
HTML: 
````html
<form>
    <input type="text" id="name">
    <input type="checkbox" id="rules">
</form>
````
Javascript: 
````javascript
document.addEventListener("DOMContentLoaded", function(e) {
    let name = document.getElementById("name").value; // Hämtar värdet från ett element med id:t name
    let acceptRules = document.getElementById("rules").checked; // Hämtar värdet från ett element med id:t rules
}
````

## Event
Vad är det för typ av event? \
HTML: 
````html
<button id="calc">Beräkna</button>
````
Javascript: 
````javascript

// Sparar beräkna-knappen i en variabel
let calc_button = document.getElementById("calc");

calc_button.addEventListener("click", function(event) {
    //Do something
})
````

## För at förhindra att sidan uppdateras

````javascript
document.addEventListener("DOMContentLoaded", function(e) {

    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let acceptRules = document.getElementById("rules").checked; 
}

````