

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    removeIllegalMoves(possibleMoves){
        return possibleMoves.filter(function(square) {
            let row = square.row;
            let column = square.col;
            return(row <=7 && row >= 0 && column <= 7 && column >= 0)
        });
    }

    removeFriendlyFire(board, possibleMoves){

        return possibleMoves.filter(square => {

            if (board.isUnoccupied(square)){
                return true
            } else {
                console.log(square);

                console.log("Piece:" + board.getPiece(square));
                console.log("Player: " +board.getPiece(square).player.toString());
                console.log("this: " +this);

                return !(this.player.toString() === board.getPiece(square).player.toString())
            }
        })
    }

}

