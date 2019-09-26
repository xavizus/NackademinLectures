document.addEventListener("DOMContentLoaded", () => {
  let pins = 21;
  let playerTurn = 0;
  printPinsOnScreen(pins);
  updatePlayer(playerTurn);

  document.getElementById("nextPlayer").addEventListener("click", () => {
    let substractPins = getPlayerPins();
    if (pins - substractPins <= 0) {
      playerTurn++;
      updateWinnerOfTheGame(playerTurn);
      document.getElementById("gameButtons").insertAdjacentHTML('beforeend', "<button id='newGame'>New game?</button>");
      document.getElementById("nextPlayer").disabled = true;
      return true;
    } else {
      playerTurn++;
      pins -= substractPins;
      updatePlayer(playerTurn);
      printPinsOnScreen(pins);
    }
  });

  document.getElementById('gameButtons').addEventListener("click", (event) => {
    if (event.target.id === "newGame") {
      document.getElementById("newGame").remove();
      pins = 21;
      playerTurn = 0;
      updatePlayer(playerTurn);
      printPinsOnScreen(pins);
      document.getElementById("nextPlayer").disabled = false;
    }
  });
});

function updatePlayer(playerTurn) {
  document.getElementById('playerTurn').innerHTML = "Det är spelare " + ((playerTurn % 2) + 1) + " tur";
}

function updateWinnerOfTheGame(playerTurn) {
  document.getElementById('playerTurn').innerHTML = "Spelet är över, spelare " + ((playerTurn % 2) + 1) + " vann!";
}

function printPinsOnScreen(noOfPins) {
  document.getElementById("pins").textContent = "";
  for (let pinIndex = 0; pinIndex < noOfPins; pinIndex++) {
    document.getElementById("pins").append("|");
  }
}

function getPlayerPins() {
  let radioButtons = document.getElementsByName("noOfPins");
  for (let radioButton of radioButtons) {
    if (radioButton.checked) {
      return radioButton.value;
    }
  }
}
