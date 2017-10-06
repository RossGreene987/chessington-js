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


        if (isWhite){
            if(board.isUnoccupied(new Square(myRow +1, myColumn))){
                possibleMoves.push(new Square(myRow + 1, myColumn));
                if(board.isUnoccupied(new Square(myRow +2, myColumn)) && this.isYetToMove(isWhite, myRow)){
                    possibleMoves.push(new Square(myRow + 2, myColumn));
                }
            }
        } else {
            if(board.isUnoccupied(new Square(myRow -1, myColumn))){
                possibleMoves.push(new Square(myRow - 1, myColumn));
                if(board.isUnoccupied(new Square(myRow -2 , myColumn)) && this.isYetToMove(isWhite, myRow)){
                    possibleMoves.push(new Square(myRow - 2, myColumn));
                }
            }
        }

        return possibleMoves
    }

    isYetToMove(isWhite, myRow) {
        return isWhite
            ? myRow === 1
            : myRow === 6;
    }
}




