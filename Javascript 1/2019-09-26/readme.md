# 2019-09-26
Hur öppnar du en lokal fil? 
Det finns ingen helt inbyggd funktion i Javascript, men vi kan använda oss av klassen XMLHttpRequest.

````javascript
// Obs, jag har modifierat originalkoden från https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript utan att testa, men jag tycker att det borde funka. #famouslastwords
function loadJSON(file, callback) {   
  var xobj = new XMLHttpRequest();

  // Expected data type
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true); // Replace 'my_data' with the path to your file

  // When the event is ready. 
  xobj.onreadystatechange = function () {

    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

loadJSON('my_data.json', function(response) {
  // Parse JSON string into object
  var actual_JSON = JSON.parse(response);
});
````

# Responsive design
Responsiv design innebär att man optimerar innehållet för skärmstorlek.

## Varför ska man bygga responsivt
För att kunna optimera innehållet samt pressentation av sidan beroende på skärmstorlek.

Man gör sin webbplats mer användbar på flera enheter.

Du slipper ha flera olika kodbaser att underhålla.

## Hur tänker man på resposvie design
Du bör tänka på mobile-first

- Stacking av element
- Bilder
- Typografi
- Olika användarbeteenden för olika enheter
- Hover-effekter försvinner för mobiler.

## Hur bygger du responsivt
Det finns många olika sätt att lösa responsivt:

Man kan göra är att sätta width i % gärna tillsammans med max-width och min-width i px.

Man använder sig av css med t.ex. display: flex för att få hjälp att visa upp innehåll på ett snyggt sätt.

Man använder sig av mediaqueries i CSS:en för att styra utseende för olika skärmstorlekar.

## Viewport

Viewport började användas när det blev vanligare att använda internet på mobilen.

Viewport skalar hemsidan för att passa enhetens skärmstorlek

````html
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
````

## Media queries
Media queries är nytt i CSS3. Media-queries är ett sätt att sätta sätta olika CSS för olika upplösningar genom att sätta breakpoints där man vill designen ska ändras
Media-queries sätts i px.

### Exempel
- @media förklarar att det är en media-query
- only screen säger att detta endast ska appliceras på skärmar
- and () – beskriver ytterligare ett tillstånd som måste uppnås för att appliceras

````css
body {
    backgroun-color: lightgreen;
}

@media screen and (min-width: 768px) {
    body {
        background-color: lightblue;
    }
}
````

De vanliga breakpoints för olika enheter är:

````css
//Smalldevices(landscapephones,576pxandup) 
@media(min-width:576px)
{...}

//Mediumdevices(tablets,768pxandup) 
@media(min-width:768px)
{...} 

//Largedevices(desktops,992pxandup) 
@media(min-width:992px)
{...} 

//Extralargedevices(largedesktops,1200pxandup) 
@media(min-width:1200px)
{...}
````


## Emmet
Emmet är en kodsammlare för att snabbare skapa element snabbt

Exempelvis:
table>tr*2>td*3 \
Vilket betyder: \
Skapa en table med 2 tr taggar i table, och 3 td taggar i tr.

Så koden blir:
````html
<table>
<tr>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
</tr>

    </table>
````