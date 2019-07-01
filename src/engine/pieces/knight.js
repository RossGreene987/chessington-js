import Piece from './piece';
import Square from '../../../src/engine/square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;
        let allJumps = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
        let possibleMoves = allJumps.map(jump => new Square(jump[0] + myRow, jump[1] + myColumn));
        return this.removeIllegalMoves(possibleMoves);
    }
}
