
let secretWord = prompt("Choose a word: ");

//How many tries the player got
let tries = 10;

//Stores the players wrongly guessed characters
let guesses = [];

//Stores correct guesses
let correctGuesses = [];

//Used to check if player found the correct word.
let correctWordFound = false;

//Fills the array correctGuesses with stars, so if the word is summer, then the array will look like: ["*" , "*" , "* , "* , "*" , "*"]
for (let i = 0; i < secretWord.length; i++) {
    correctGuesses[i] = "*";
}

//Prints the whole row of correct guesses which should be all asterisk.
console.log(correctGuesses);

// while tries are larger than 0 and correctWordFound is false, then:
while (tries > 0 && correctWordFound == false) {

    //Used to find out if a letter is found.
    let letterFound = false;

    //Let the player choose a letter.
    let guess = (prompt("Choose a character: "));

    //Loop through the indexes of secretWord
    for (let index in secretWord) {

        //if the player guesses a correct character, then
        if (secretWord[index] == guess) {

            //change variable to true
            letterFound = true;

            //Inform the player that a correct character were found.
            console.log("Character " + guess + " found");

            //Store the correct guess at the index of our array with asterisks.
            correctGuesses[index] = guess;
        }
    }

    //If we never found a character that matched, then:
    if (letterFound == false) {

        //remove one try.
        tries--;

        //add the guessed character in the array.
        guesses.push(guess);

        //Inform the player about the character.
        console.log("Character " + guess + " not found. You have  " + tries + " tries remaining");
    }

    //if the correct guesses are equal to secretWord, then:
    if (correctGuesses === secretWord) {
        
        //Inform the player that the word were found
        console.log("Du hitta rätt ord! Grattis");

        //used to exit the loop.
        correctWordFound = true;
    }

    //Just a console log to make sure everything are working.
    console.log(guesses);
    console.log(correctGuesses);
}