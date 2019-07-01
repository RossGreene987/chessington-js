import Piece from './piece';
import Square from '../../../src/engine/square';
import Player from '../../../src/engine/player';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let possibleMoves = new Array(0);
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;
        let isWhite = (this.player === Player.WHITE)

        if (isWhite){
            possibleMoves.push(new Square(myRow + 1, myColumn));
        } else {
            possibleMoves.push(new Square(myRow - 1, myColumn ));
        }

        if(this.isYetToMove(isWhite, myRow)){
            if (isWhite){possibleMoves.push(new Square(myRow + 2, myColumn))}
            else {possibleMoves.push(new Square(myRow - 2, myColumn))}
        }
        return possibleMoves
    }

    isYetToMove(isWhite, myRow){
        if (isWhite){ return (myRow === 1)}
        else {return (myRow === 6)}
}
}



