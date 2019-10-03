function randomnizeNumber(min, max) {
    return Math.floor(Math.random() *(max-min +1 ))+min;
}

function generateNumbers(totalNumbers) {
    let randomNumbers = [];
    for(let indexOfTotalNumbers = 0; indexOfTotalNumbers < totalNumbers; indexOfTotalNumbers++) {
        randomNumbers = [...randomNumbers, randomnizeNumber(1,50)];
    }

    return randomNumbers;
}

function main() {
    let lotteryNumbers = generateNumbers(7);

}

document.addEventListener("DOMContentLoaded", main);