# **Praktisk info**
Under Javascript 1 kursen så vi använder oss av Visual Studio code under utbildningen.


# **Variabler**
## **Variabel typer**
**Datatyper:**
- **Boolean** - Sant eller falskt
- **Null** - Detta värde måste bli plaserad i en variable. Betyder _inget_
- **Undefined** - Variabeln är deklarerad, men inte definerad.
- **Number** - Heltal, flytande tal
- **BigInt** - * Vi hoppade över informationen. Men kort och gott, det är en variabel som klarar större nummer än vanligt och kan endast vara heltal.
- **String** - Strängar, uppbyggt av bokstäver
- **Symbol** - (?) - föreläsaren hoppade över detta.
- **Object** - Objekt med metoder och variabler

### **Förtydligande av Null och Undefined**
Null och undefined är nästan liknande varandra. Det som skiljer dem ifrån är att, för att kunna få Null värdet, så måste det bli definerat. exempelvis:

````javascript
let thisIsNull = null;
````

Medan undefined är automatiskt, exempelvis när du inte ger din variabel något värde:
````javascript
let thisIsUndefined;
````

Den praktiska skillnaden mellan null och undefined är när du skickar över värdet i en funktion. 

````javascript
let thisIsNull = null;
let thisIsUndefined;

function Parameter(data = "test") {
    console.log(data);
}

Parameter(thisIsNull); //Detta kommer skriva ut null.

Parameter(thisIsUndefined); //Detta kommer skriva ut test
````

## **Deklaration av variabler**

Föredra att använda deklarationen <ins>**let**</ins> framför **var**.

**Var** deklareras i global scope, vilket innebär att du kan använda variabeln över hela din kod.

**Let** deklareras i lokal scope, dvs. i de brackets {} som koden körs i. Men variabeln ärvs om du inte initierar samma variabel under. Exempelvis:
````javascript
let x = 3;
if (x < 4) {
    let x = 2;
    console.log(x); //Kommer att skriva ut 2.
}
console.log(x); //kommer att skriva ut 3.

//Om du använder var istället:
var y = 3;
if (y < 4) {
    var y = 4;
    console.log(y); // kommer att skriva ut 4
}
console.log(y); //kommer att skriva ut 4

````

## **Operatorer**

Atrimetiska operatorer:
- **+** Addition
- **-** Subtration
- **\*** Multiplication
- **/** Division
- **%** Modulus (Reminder)
- **++** Increment
    - Kan skrivas med y++ , innebär att vi ökar värdet med 1 efter beräkningen
    - ++y, ökar värdet med 1 före beräkningen.
- **--** Decrement
    - Har samma funktion som Increment

## **Komentarer**

Du kan kommentera på två olika sätt:

````javascript

// En rad kommentar

/* Fler rader 

kod
*/

````

## **Logiska beslut**

````javascript
if (true) { 
    Print("True");

} else { 

print("false");

}
````

If-Else satser går att göra på följande sätt:
````javascript
if (true) {}

else if (false){}

else {}
````
Du kan också skriva en-rads if-satser om det är korta förändringar du vill göra exempelvis:
````javascript
let isThisTrue = (5<7)?"True":"False";
console.log(isThisTrue);
````
En viktig detalj på enrads if-satser är att du inte kan skriva detta i en IF-sats. Då får du kompileringsfel. Se exempel nedan:
````javascript
if(5<7) ? "True" : "False";
````

### **Operatorer**
| Operator | beskrivning |
|---      | ---        |
|> | Större än|
|< | Mindre än|
|== | Lika med|
|!= | inte lika med|
|&& | Och|
|\|\| | eller|
|! | Inte|
|=== | Att värdet och data typen är lika|
|!== | Att värdet och data typen inte är lika med.|

### **Switch**
Går att använda med både strings och numbers. Nedan exempel är för numbers
````javascript
switch(data) {
    case 1:
        break;
    case 2: 
        break;
}
````
Nedan exempel är för strings
````javascript
switch("data") {
    case "data":
        break;
    case "Nothing":
        break;
    default:
        break;
}
````

## **Tips** 
Använd dig av [jsfiddle.net]() för att testa en del av din kod.

Skriv kod med engelska variabler och kommentera din kod på engelska så att andra förstår vad din kod gör.

All kodrad i JS slutar med semicolon **;**, förutom funktioner och objekt.

Du kan korta ner matematiska uträkningar på ett enklare sätt. (Programmerare är lata).
````javascript
let x = y + 4; // kan förkortas 

y = y+4; // Kan förkortas ytterligare

y+=4; //Alla dessa tre gör exakt samma sak. förutom det första exemplet, där x = y + 4, då vi deklarerar en till variabel.
````
