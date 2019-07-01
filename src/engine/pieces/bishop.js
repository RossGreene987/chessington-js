import Piece from './piece';
import Player from "../player";
import Square from '../../../src/engine/square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let possibleMoves = new Array(0);
        let mySquare = board.findPiece(this);
        let myRow = mySquare.row;
        let myColumn = mySquare.col;
        let isWhite = (this.player === Player.WHITE);
        return this.getDiagonalMoves(myRow,myColumn, board)
    }

    getDiagonalMoves(row,column){
        let moves = new Array(0);
        for(let i=-7; i<=7; i++){
            if (!(i===0)){moves.push(new Square(row + i, column + i))}

        }
        for(let i = -7; i<=7; i++){
            if (!(i===0)){moves.push(new Square(row + i, column - i))}
        }
        return this.removeIllegalMoves(moves)
    }

}
