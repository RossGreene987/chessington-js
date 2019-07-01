import Square from "../square";


export class MovementUtils {
    static getColumnMoves(board, row, column){
        let upMoves = this.movesInDirection(board, row, column, 1, 0);
        let downMoves = this.movesInDirection(board, row, column, -1, 0);
        return upMoves.concat(downMoves)
    }

    static getRowMoves(board, row, column){
        let rightMoves = this.movesInDirection(board, row, column, 0, 1);
        let leftMoves = this.movesInDirection(board, row, column, 0, -1);

        return rightMoves.concat(leftMoves)
    }

    static getDiagonalMoves(board, row, column){
        let upRightMoves = this.movesInDirection(board, row, column, 1, 1);
        let upLeftMoves = this.movesInDirection(board, row, column, 1, -1);
        let downRightMoves = this.movesInDirection(board, row, column, -1, 1);
        let downLeftMoves = this.movesInDirection(board, row, column, -1, -1);

        return upRightMoves.concat(upLeftMoves.concat(downRightMoves.concat(downLeftMoves)))
    }

    static movesInDirection(board, row, column, upDirection, rightDirection){
        let moves = [];
        let nextSquare = new Square ( row + upDirection, column + rightDirection);
        while(board.isUnoccupied(nextSquare) && board.isOnBoard(nextSquare)){
            moves.push(nextSquare);
            nextSquare = new Square ( nextSquare.row + upDirection, nextSquare.col + rightDirection);
        }
        if (board.isOnBoard(nextSquare)){
            moves.push(nextSquare)
        }

        return moves
    }

}