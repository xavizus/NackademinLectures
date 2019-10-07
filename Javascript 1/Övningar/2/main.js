function randomnizeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumbers(totalNumbers) {
    let randomNumbers = [];
    for (let indexOfTotalNumbers = 0; indexOfTotalNumbers < totalNumbers; indexOfTotalNumbers++) {
        let randomNumber = randomnizeNumber(1, 50);

        if (randomNumbers.includes(randomNumber)) {
            indexOfTotalNumbers--;
        } else {
            randomNumbers = [...randomNumbers, randomNumber];
        }

    }
    return randomNumbers;
}

function createUlElement(arrayOfStrings) {
    let ul = document.createElement("ul");
        for(let string of arrayOfStrings) {
            let li = document.createElement("li");
            let textNode = document.createTextNode(string);
            li.appendChild(textNode);
            ul.appendChild(li);
        }
    return ul;
}

function getGuessedUserInput(lotteryNumbers) {
    return function() {
        let userInputs = document.getElementsByClassName("guessedValue");
        let guessedNumbers = [];
        for (let userInput of userInputs) {
            if (userInput.valueAsNumber) {
                guessedNumbers = [...guessedNumbers, userInput.valueAsNumber];
            }
        }
        let matches = lotteryNumbers.filter(res => guessedNumbers.includes(res));

        document.getElementById("correctGuesses").innerHTML = "";
        document.getElementById("lotteryNumbers").innerHTML = "";
        let correctGuessesElements = createUlElement(matches);
        document.getElementById("correctGuesses").appendChild(correctGuessesElements);

        let lotteryNumbersElements = createUlElement(lotteryNumbers);
        document.getElementById("lotteryNumbers").appendChild(lotteryNumbersElements);

        
        console.log(matches);

        console.table(lotteryNumbers);
        lotteryNumbers = generateNumbers(7);


    }
}

function main() {
    let lotteryNumbers = generateNumbers(7);
    document.getElementById("btnGuess").addEventListener("click", getGuessedUserInput(lotteryNumbers));


}

document.addEventListener("DOMContentLoaded", main);