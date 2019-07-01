import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;
        let allJumps = [[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1],[1,0]];
        let possibleMoves = allJumps.map(jump => new Square(jump[0] + myRow, jump[1] + myColumn));
        return this.removeIllegalMoves(possibleMoves);
    }
}

