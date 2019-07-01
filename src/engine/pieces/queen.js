import Piece from './piece';
import Square from "../square";
import {MovementUtils} from "./movementUtils";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;

        let colMoves = MovementUtils.getColumnMoves(myRow, myColumn);
        let rowMoves = MovementUtils.getRowMoves(myRow, myColumn);
        let diagMoves = this.removeIllegalMoves(MovementUtils.getTooManyDiagonalMoves(myRow, myColumn));

        return colMoves.concat(rowMoves.concat(diagMoves))
    }




}
