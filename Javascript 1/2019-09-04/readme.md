# **HTML**
## Vad är HTML?
HTML är ett språk som berättar för en dator hur den ska märkas upp i webbplats. Det är mer för att förklara vad det är för innehåll som skall presenteras.
HTML står för **HyperText Markup Language**.

## Taggar
HTML består av en hel del taggar. Oftas En tagg ser ut som följande:
````javascript
<p>Detta är en text</p>
````
## Attribut
Varje tagg kan innehålla ett attribut.
````javascript
<img src="hund.jpg"> 
````

## HTML-struktur
En HTML-Struktur kan se ut som följande:
````javascript
<!DOCKTYPE html> <!-- Detta beskriver vad det är för HTML version som dokumentet använder sig av -->

<html> <!-- HTML-taggen är rot-element för webbsidan -->
    <head> <!-- Head innehåller information om sidan -->
    </head>
    <body> <!-- Body innehåller det inhåll som ska presenteras -->
    </body>
</html>
````

### Head
    I header så 

### Body
    Innehållet som browsern ska tolka och visa upp

 ````html
<body>
    <h1>Rubrik </h1>
    <p>Detta är en paragraf</p>
</body>
````

## Indentering
Det är rekommenderat att skapa indentiering för att lättare för människor att tolka koden.
````html
<div>
    <p>Detta är en paragraf</p>
    <b>Detta är fet text</b>
</div>
````

## Länkar
Href-attribut som länken ska skickas vidare till.
````html
<!-- Index.html (Nuvarande dokument) -->

<a href="https://xavizus.com">Xavizus.com</a>
<!-- Detta länkar till en extern webbplats -->

<a href="Sida2.html">En annan sida</a>
<!-- Detta länkar till en fil som ligger vid sidan av vanliga sidan -->
````

## Kommentarer i HTML

För att kommentera i HTML är enkelt, du har sett mig göra det ovan.
Först behöver du skriva in **\<!--** sedan skriver du din kommentar och sen slutar du med **--\>**.

````HTML
<!-- Detta är en kommentar -->
````

## Länkning med HTML
Med HTML, så vill du oftast länka till olika dokument och/eller bilder. 

### Gå ner i strukterer
Du går ner i din mappstruktur med hjälp av tecknet **/**

### Gå upp i mappstrukturen
Du går upp i din mappstruktur med hjälp av tecknen **../**

## Listor
Du kan lista på två listor

### UL, Unorderd list
Osorterad list skriver du som följande:
````HTML
<ul>
    <li>Punkt 1</li>
    <li>Punkt 2</li>
</ul>
````

## OL, Ordered list
Sorterad lista med 1,2,3
````HTML
<ol>
    <li>Lista 1</li>
    <li>Lista 2</li>
</ol>
````

## HTML-dokument
Du skapar en HTML dokument med flera olika taggar. Exempelvis:

Rubriker \
- h1
- h2
- ..
- h6
  
Teckenstycken \
- p
- span
Länkar \
- a
- Bilder
- img
Block \
-div
Listor \
- ol
- ul

## Hur vet man att man har gjort rätt med HTML?
Du kan använda dig av en validator.
[W3 Validator](https://validator.w3.org)