import Square from "../square";

export class MovementUtils {
    static getColumnMoves(row, column){
        let colMoves = new Array(0);
        for(let i=0; i<8; i++){
            if (!(i===column)){
                colMoves.push(new Square(row, i))
            }
        }
        return colMoves
        
    }

    static getRowMoves(row, column){
        let rowMoves = new Array(0);
        for(let i=0; i<8; i++){
            if (!(i===row)){
                rowMoves.push(new Square(i, column))
            }
        }
        return rowMoves
    }

    static getTooManyDiagonalMoves(row, column){
        let moves = new Array(0);
        for(let i=-7; i<=7; i++){
            if (!(i===0)){moves.push(new Square(row + i, column + i))}

        }
        for(let i = -7; i<=7; i++){
            if (!(i===0)){moves.push(new Square(row + i, column - i))}
        }
        return moves
    }

    static movesInDirection(board, row, column, upDirection, rightDirection){
        let moves = [];
        let nextSquare = new Square ( row + upDirection, column + rightDirection);
        while(board.isUnoccupied(nextSquare) && board.isOnBoard(nextSquare)){
            moves.push(nextSquare);
            nextSquare = new Square ( nextSquare.row + upDirection, nextSquare.col + rightDirection);
        }

        return moves
    }
}