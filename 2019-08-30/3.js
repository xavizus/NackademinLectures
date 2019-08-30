//Skapa en array av strängar. Skriv ut den längsta.

let words = ["Ett", "Två", "Tre", "Fyra", "EttLångtOrd", "Fem"];
let indexOfLongest;
let characters = 0;
for (wordIndex in words) {
    if (words[wordIndex].length > characters) {
        characters = words[wordIndex].length
        indexOfLongest = wordIndex;
    }
}
console.log("Longest Word is: %s", words[indexOfLongest]);