class Game {
    constructor() {
        this.playerTurn;
        this.board = [];
        this.selected_piece = null;
        this.moveFrom = null;
    }

    startGame() {
        this.createEmptyBoard();
        this.drawGameBoard();
        this.setupPieces();

        // Check for click event
        $(".container").click((event) => {

            // if the dom-object we clicked got an id,
            // and  (moveFrome is null or moveFrom is not equal to the same id )
            if (this.getPieceFromId(event.target.id) && ((this.moveFrom == null) || (this.moveFrom != event.target.id))) {

                if (!$(event.target).hasClass("marked")) {
                    $(".marked").removeClass("marked");
                    $(event.target).addClass("marked");
                    //Save id for reminder.
                    this.moveFrom = event.target.id;
                } else {
                    $(".marked").removeClass("marked");
                }
                // Else if clicked id is not a piece, and moveTo is null
            } else if (!this.getPieceFromId(event.target.id) && this.moveFrom != null) {
                $(".marked").removeClass("marked");

                //move the piece
                this.movePiece(this.moveFrom, event.target.id);
                this.moveFrom = null;
            } else {
                if (!$(event.target).hasClass("marked")) {
                    $(".marked").removeClass("marked");
                    $(event.target).addClass("marked");
                    //Save the moveFrom id.
                    this.moveFrom = event.target.id;
                } else {
                    $(".marked").removeClass("marked");
                }
            }
        });
    }

    //moves the piece fromId to toId
    movePiece(fromId, toId) {
        console.log(`From: ${fromId} \n To: ${toId}`);
        //For-loop which uses index.
        for (let row in this.board) {

            // Character is used to find 
            let character = "A";
            for (let column in this.board[row]) {
                if (this.board[row][column].position != undefined) {
                    if (fromId == (this.board[row][column].position.x + this.board[row][column].position.y)) {
                        console.log("piece removed here " + (this.board[row][column].position.x + this.board[row][column].position.y));
                        this.board[row][column].removePiece();
                        this.board[row][column] = "";
                    }
                }
                if (toId == character + Number(row)) {
                    console.log("Piece added here " + character + Number(row));
                    this.board[Number(row) - 1][column] = new Piece({
                        position: character + Number(row),
                        color: this.selected_piece.color,
                        type: this.selected_piece.type,
                        moves: this.selected_piece.moves
                    });
                    this.selected_piece = null;
                } else {
                    console.log(toId);
                }
                character = String.fromCharCode(character.charCodeAt(0) + 1);
            }

        }

    }

    getPieceFromId(id) {
        for (let row = 0; row < this.board.length; row++) {
            for (let column = 0; column < this.board[row].length; column++) {
                let currentPiece = this.board[row][column];
                if (currentPiece.position !== undefined) {
                    if (id == (currentPiece.position.x + currentPiece.position.y)) {
                        this.selected_piece = currentPiece;
                        return true;
                    }
                }
            }
        }

        return false;
    }

    setupPieces() {
        let startWhite = [
            ["rook", "knight", "bishop", "king", "queen", "bishop", "knight", "rook"],
            ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"]
        ];
        let startBlack = [
            ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
            ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
        ];

        for (let row = 0; row < 2; row++) {
            let character = "A";
            for (let column = 0; column < 8; column++) {
                this.board[row][column] = new Piece({
                    position: character + (Number(row) + 1),
                    color: "w",
                    type: startWhite[row][column],
                    moves: ""
                });
                character = String.fromCharCode(character.charCodeAt(0) + 1);
            }
        }

        for (let row = 0; row < 2; row++) {
            let character = "A";
            for (let column = 0; column < 8; column++) {
                this.board[Number(row) + 6][column] = new Piece({
                    position: character + (Number(row) + 7),
                    color: "b",
                    type: startBlack[row][column],
                    moves: ""
                });
                character = String.fromCharCode(character.charCodeAt(0) + 1);
            }
        }
    }

    createEmptyBoard() {
        for (let x = 0; x <= 7; x++) {
            this.board.push([]);
            for (let y = 0; y <= 7; y++) {
                this.board[x].push("");
            }
        }
    }

    drawGameBoard() {
        let columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
        let cell_counter = 0;
        for (let x = 8; x >= 1; x--) {
            for (let y = 0; y <= 7; y++) {
                let cell_class = cell_counter % 2 == 0 ? "cellWhite" : "cellBlack";
                $("<div>", {
                    "class": "cell " + cell_class,
                    id: columns[y] + x
                }).appendTo(".container");
                cell_counter++;
            }
            cell_counter++;
        }
    }
}