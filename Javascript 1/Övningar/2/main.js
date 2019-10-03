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

function getGuessedUserInput(lotteryNumbers) {
    return function() {
        let userInputs = document.getElementsByClassName("guessedValue");
        let guessedNumbers = [];
        for (let userInput of userInputs) {
            if (userInput.valueAsNumber) {
                guessedNumbers = [...guessedNumbers, userInput.valueAsNumber];
            }
        }
        let matched = lotteryNumbers.filter(res => guessedNumbers.includes(res));

        console.log(matched);

        console.table(lotteryNumbers);
        lotteryNumbers = generateNumbers(7);
    }
}

function main() {
    let lotteryNumbers = generateNumbers(7);
    document.getElementById("btnGuess").addEventListener("click", getGuessedUserInput(lotteryNumbers));


}

document.addEventListener("DOMContentLoaded", main);