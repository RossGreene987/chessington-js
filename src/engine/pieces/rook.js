import Piece from './piece';
import {MovementUtils} from "./movementUtils";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;

        let colMoves = MovementUtils.getColumnMoves(board, myRow, myColumn);
        let rowMoves = MovementUtils.getRowMoves(board, myRow, myColumn);
        let allPossibleMoves = rowMoves.concat(colMoves);
        return this.removeFriendlyFire(board, allPossibleMoves);
    }
}
