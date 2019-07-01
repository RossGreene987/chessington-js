import Piece from './piece';
import Square from '../../../src/engine/square';
import {MovementUtils} from "./movementUtils";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;

        let colMoves = MovementUtils.getColumnMoves(myRow, myColumn);
        let rowMoves = MovementUtils.getRowMoves(myRow, myColumn);
        return rowMoves.concat(colMoves)
    }

}
