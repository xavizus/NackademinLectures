# **2019-08-30**
## **Sammanfattning**
Loopar och 

## **Vad är en loop**
En look är en upprepande av en kod.

Finns 3 olika typer av loopar:
- For-loop
  - ````javascript
    for (let counter = 1; counter < 11; counter++){}
    ````
- While-loop
  - ````javascript
    let i = 1;
    while(i <11 ) {
        console.log(i);
        i++;
    }
    ````


## **Array**
En array innehåller flera variabler av samma typ.
Arrays börjar alltid på 0.

Du kan skapa arrays på två olika sätt:
````javascript
let numbers = [];
let numbers2 = new Array();
````

Du kan pre-definera arrays genom följande sätt:
````javascript
var numbers = [1,3,56,7];
````
Array:n kommer då se ut som följande om man ska rita upp det grafiskt.
0 | 1 | 2 | 3
--- | --- | --- | ---
1 | 3 | 56 | 7

För att komma åt en plats  i arrayn gör du genom följande sätt:
````javascript
var numbers = [1,3,56,7];

console.log(numbers[0]);
````

Du kan kombinera arrayn med loopar genom följande sätt:
````javascript
let numbers = [1,3,56,7];

for(let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}
````
Ett smartare sätt att gå igenom variabeln:
````javascript
let numbers = [1,2,3,4];
for(let number of numbers) {
    console.log(number)
}
````
Det finns också ett annat sätt som heter **in**, det skriver ut arrayns index istället för värdet
````javascript
let numbers = [1,2,3,4];
for(let index of numbers) {
    console.log(index);
}
````