let secretWord = prompt("Välj ett ord:");

let tries = 10;

let guesses = [];

let correctGuesses = [];

let correctWordFound = false;

for (let i = 0; i < secretWord.length; i++) {
    correctGuesses[i] = "*";
}

console.log(correctGuesses);

while (tries > 0 || correctWordFound == false) {

    let letterFound = false;

    let guess = (prompt("Välj en bokstav"));

    for (let index in secretWord) {
        if (secretWord[index] == guess) {
            letterFound = true;
            console.log("Character " + guess + " found");
            correctGuesses[index] = guess;
        }
    }

    if (letterFound == false) {
        tries--;
        guesses.push(guess);
        console.log("Character " + guess + " not found");
    }

    if (correctGuesses === secretWord) {
        console.log("Du hitta rätt ord! Grattis");
        correctWordFound = true;
    }

    console.log(guesses);
    console.log(correctGuesses);
}