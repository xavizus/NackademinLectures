let sticks = 21;
let player = 0;

function chooseSticks(sticks, player) {
    let valdStickor = 0;

    while (!(valdStickor == 3 || valdStickor == 2 || valdStickor == 1)) {
        valdStickor = prompt(" Det är" + sticks + " stickor kvar.\n " + "Det är spelare " + player + " player tur." + "Välj antal stickor (1,2 eller 3)");
    }

    return sticks - valdStickor;
}

while (sticks > 0) {
    if (player % 2 == 0) {
        sticks = chooseSticks(sticks, 1);

        if (sticks <= 0) {
            console.log("Player 1 Lost");
            alert("Player 1 lost");
        }
    } else {
        sticks = chooseSticks(sticks, 2);

        if (sticks <= 0) {
            alert("Player 2 lost");
            console.log("Player 2 Lost");
        }

    }
    player++;

}