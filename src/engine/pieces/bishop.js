import Piece from './piece';
import {MovementUtils} from "./movementUtils";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;
        console.log("bishop player:" + this.player.toString());
        let allPossibleMoves = MovementUtils.getDiagonalMoves(board, myRow,myColumn, board);
        return this.removeFriendlyFire(board, allPossibleMoves);
    }



}
