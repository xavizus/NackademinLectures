class Piece {
    constructor(object) {

        let x = object.position.substring(0, 1);
        let y = object.position.substring(1);
        this.position = {
            x: x,
            y: y
        };
        this.color = object.color;
        this.type = object.type;
        this.moves = object.moves;
        this.image = `./images/${this.color}_${this.type}.png`;
        this.placePiece();
    }

    placePiece() {
        $("#" + this.position.x + this.position.y).css('background-image', `url(${this.image})`);
        $("#" + this.position.x + this.position.y).css('background-size', `80px 80px`);
        $("#" + this.position.x + this.position.y).css('background-repeat', `no-repeat`);
    }

    removePiece() {
        $("#" + this.position.x + this.position.y).css('background-image', ``);
        $("#" + this.position.x + this.position.y).css('background-size', ``);
        $("#" + this.position.x + this.position.y).css('background-repeat', ``);
    }
}