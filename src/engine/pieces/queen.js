import Piece from './piece';
import {MovementUtils} from "./movementUtils";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;

        let colMoves = MovementUtils.getColumnMoves(board, myRow, myColumn);
        let rowMoves = MovementUtils.getRowMoves(board, myRow, myColumn);
        let diagMoves = MovementUtils.getDiagonalMoves(board, myRow, myColumn);

        let allPossibleMoves = colMoves.concat(rowMoves.concat(diagMoves));
        return this.removeFriendlyFire(board, allPossibleMoves)
    }

}
