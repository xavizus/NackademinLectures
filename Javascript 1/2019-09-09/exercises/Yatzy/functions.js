rollDice();

// Roll dice when button is clicked
document.getElementById("rollDice").onclick = () => {
    rollDice();
}

function rollDice() {
    for (let i = 0; i < 5; i++) {
        const newDice = Math.floor(Math.random()*6)+1 //Randomize a number between 1 and 6
        document.getElementById("dice-"+(i+1)).className = "dice-"+(newDice);
    }
}