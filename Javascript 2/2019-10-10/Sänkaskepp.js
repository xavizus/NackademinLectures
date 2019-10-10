class Battleships {

    constructor(players = 2) {

        this.gameGrids = this.createGameGrids(players);
    }

    createGameGrids(players) {
        let gameGrids = [];
        for (let player = 1; player <= players; player++) {
            gameGrids.push(new Grid());
        }
        return gameGrids;
    }
    controllIfShipExistOnCordinates(x, y) {

    }
}

class Grid {
    constructor(width = 10, height = 10) {
        this.grid = this.createGrid(width, height);
    }

    createGrid(width, height) {
        let grid = [];
        for (let y = 0; y < height; y++) {

            grid.push([]);
            for (let x = 0; x < width; x++) {
                grid[y].push(0);
            }
        }
        return grid;
    }
}

class ship {
    constructor(id, storlek, startVarde, slutvarde) {
        this.startVarde, this.slutvarde, this.storlek, this.id = startVarde, slutvarde, storlek, id;
    }
}
let spel = new Battleships();