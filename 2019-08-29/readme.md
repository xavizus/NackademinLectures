# **Praktisk info**
Vi använder oss av Visual Studio code under utbildningen.


# **Variabler**
## **Variabel typer**
**Datatyper:**
- **Boolean** - Sant eller falskt
- **Null** - Värdet existerar
- **Undefined** - Värde finns men vi vet inte.
- **Number** - Heltal, flytande tal
- **BigInt** - *
- **String** - Strängar, uppbyggt av bokstäver
- **Symbol** - (?)
- **Object** - Objekt med metoder och variabler

**Array:**
I JS så börjar det alltid på 0.

## **Deklaration av variabler**

Föredra att använda deklarationen <ins>**let**</ins> framför **var**.

**Var** deklareras i global scope

**Let** deklareras i lokal scope

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
`// En rad kommentar`

`/* Fler rader `

`kod*/`

## **Logiska beslut**

````javascript
if (true) { 
    Print("True");

} else { 

print("Flase");

}
````

If-Else satser går att göra på följande sätt:
````javascript
if (true) {}

else if (false){}

else {}
````
Du kan också skriva enrads if-satser om det är korta förändringar du vill göra exempelvis:
````javascript
if(5<7)?"True":"False";
````

### **Operatorer**
Operator | beskrivning
---      | ---        |
> | Större än
< | Mindre än
== | Lika med
!= | inte lika med
&& | Och
\|\| | eller
! | Inte
=== | Att värdet och data typen är lika
!== | Att värdet och data typen inte är lika med.

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
Nedan för exempel är för strings
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

Skriv kod med engelska variabler

All kodrad i JS slutar med semicolon **;**

`let x = y + 4; // kan förkortas `

`y= y+4; // Kan förkortas ytterligare`

`y+=4`
