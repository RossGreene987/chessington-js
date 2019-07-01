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
        console.log(this.player);

        if (this.player === Player.WHITE){
            possibleMoves.push(new Square(myRow + 1, myColumn));
        } else if (this.player === Player.BLACK){
            possibleMoves.push(new Square(myRow - 1, myColumn ));
        }
        console.log('Possible Moves: ' + possibleMoves);
        return possibleMoves
    }
}
