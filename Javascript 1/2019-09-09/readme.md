# **Mer CSS**

## Vad vi går igenom
- Övergångar (transistions) i CSS
- Animationer i CSS
- Layout av content i CSS
- CSS-ramverk Bootstrap

## CSS transition
Övergångar ger oss möjligheten att ändra vissa css-attribut med en viss hastighet. Se mer [här för de attribut som kan bli animerade](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

Transform-attribut:
- **transtion-property** - anger vilka attribut som skall genomgå denna övergång.
- **transtion-duration** - Hur lång tid det ska ta för transformeringen.
- **transistion-timing-function** - Anger hur mellan läget ska räknas ut. Ex. *liniar*, *ease*
- **transition-delay** - Hur länge det ska dröja innan transformeringen startar.

Se exempel [här](./transitions/index.html)

Du kan skriva transtion med en enradskod (shorthand): 
````css
div {
    transition: <property> <duration> <timing-function> <delay>;
}
````
## CSS animationer
CSS animationer är liknande som transition, dock har du större kontroll över varje steg.

Några av animations attributen:
- **animation-delay** - Hur länge starten av animationen ska dröja
- **animation-direction** - Om animationen ska vända eller börja om.
- **animation-duration** - Hur lång tid animationen ska ta.
- **animation-iteration-count** - Hur många gånger animationen ska upprepas. Finns ett specialvärde: infinity.
- **animation-name** - Namnet på *@keyframe*-regeln som beskriver keyframes-stegen
- **animation-timing-function** - Vilken algortim som skall användas för att beräkna keyframes.

För att kunna använda animation så behöver du först skapa en klass som skall anropa animationen:
````css
p.slideIn {
    animation-duration: 3s; /* Ange hur länge animationen ska ta*/
    animation-name: slidein; /* Ange namn på din animation */
}

@keyframe slidein { /* Med hjälp av keyframe är till för att för att hålla i animationen. Sedan följs av animationsnamnet (dvs. slidein i vårt exempel)*/
    from { /* Vi kan ange start formatet här*/
        margin-left: 100%;
        width:300%;
    }

    to { /* Vi kan ange slut formatet här*/
        margin-left: 0%;
        width: 100%;
    }
}
````

I ovan exemepl så är det inte så mycket skillnad från att använda transition, men vi kan mitt i det hela ändra vad som ska hända. exempelvis, vi vill först att den transformerar från orginalet, till ett annat värde när den har kommit 75% in av tiden, och ändras till slutet.

````css
p.slideIn {
    animation-duration: 3s; /* Ange hur länge animationen ska ta*/
    animation-name: slidein; /* Ange namn på din animation */
}

@keyframe slidein { /* Med hjälp av keyframe är till för att för att hålla i animationen. Sedan följs av animationsnamnet (dvs. slidein i vårt exempel)*/
    from { /* Vi kan ange start formatet här*/
        margin-left: 100%;
        width:300%;
    }

    75% { /* Ange procentantalet när du vill som animationen ska ha följande värden: */
        font-size:300%;
        margin-left: 25%;
        width:150%;
    }

    to { /* Vi kan ange slut formatet här*/
        margin-left: 0%;
        width: 100%;
    }
}
````

Se exemplen [här](./animations/index.html)

Animationer shorthand kan skrivas som följande
````css
p {
    animation: <duration> <animationName> <iteration-count> <direction>
}
````