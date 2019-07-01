import Piece from './piece';
import Player from "../player";
import Square from '../../../src/engine/square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;

        let colMoves = (this.getColumnMoves(myRow, myColumn));
        let rowMoves = (this.getRowMoves(myRow, myColumn));

        return rowMoves.concat(colMoves)
    }

    getColumnMoves(row, column){
        let colMoves = new Array(0);
        for(let i=0; i<8; i++){
            if (!(i===column)){
                colMoves.push(new Square(row, i))
            }
        }
        return colMoves
    }

    getRowMoves(row, column){
        let rowMoves = new Array(0);
        for(let i=0; i<8; i++){
            if (!(i===row)){
                rowMoves.push(new Square(i, column))
            }
        }
        return rowMoves
    }

}
