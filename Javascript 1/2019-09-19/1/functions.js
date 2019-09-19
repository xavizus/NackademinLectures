let changePlayerButton = document.getElementById("changePlayer");
changePlayerButton.addEventListener("click", change)

function change() {
    let index = Number(document.getElementById("player_turn").value) + 1;
    console.log(index);
    if (index > 3) {
        index = 1;
    }
    let activePlayers = document.getElementsByClassName("active");

    for (let element of activePlayers) {
        element.classList.remove("active");
    }

    document.getElementById("player" + index).classList.add("active");
    document.getElementById("player_turn").value = index;
}