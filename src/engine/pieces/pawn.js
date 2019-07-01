import Piece from './piece';
import Square from '../../../src/engine/square';
import Player from '../../../src/engine/player';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let possibleMoves = [];
        console.log("Want to know: " + board.getPiece(new Square(2,2)));
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;
        let isWhite = (this.player === Player.WHITE);

        let advanceDirection = isWhite ? 1 : -1;

        if(board.isUnoccupied(new Square(myRow + advanceDirection, myColumn))){
            possibleMoves.push(new Square(myRow + advanceDirection, myColumn));
            if(board.isUnoccupied(new Square(myRow + 2 *advanceDirection, myColumn)) && this.isYetToMove(isWhite, myRow)){
                possibleMoves.push(new Square(myRow + 2 *advanceDirection, myColumn));
            }
        }

        let attackMoves = [new Square(myRow + advanceDirection, myColumn - 1), new Square(myRow + advanceDirection, myColumn + 1)]
        attackMoves = attackMoves.filter(square => {
            return (board.isOnBoard(square) && !board.isUnoccupied(square) && !(this.player === board.getPiece(square).player))
        });
        possibleMoves = possibleMoves.concat(attackMoves);
        return this.removeIllegalMoves(possibleMoves)
    }

    isYetToMove(isWhite, myRow) {
        return isWhite
            ? myRow === 1
            : myRow === 6;
    }
}




