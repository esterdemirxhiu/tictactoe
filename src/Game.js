import {useState} from 'react'


function Square(props) {
    

    return(
        <button onClick ={props.setMove}>{props.value ? props.value : "-"} </button>
    )
}



function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    
    function handleClick(index) {
        const clonedSquares = squares.slice()
        if (clonedSquares [index]) {
            return
        }


        clonedSquares[index] = xIsNext ? "X" :"O"

         const winner = checkWinner (clonedSquares)

         if (winner) {
            console.log(winner)
         }

        setXIsNext(!xIsNext)
        setSquares(clonedSquares)

        

    }


    function renderSquare(index){
         return(
              <Square value={squares[index]} setMove={()=>handleClick(index)}/>
         )
    }

    function resetBoard(){
        setSquares(Array(9).fill(null))
    }

    function checkWinner(squares){
        const winningCombinations = [
            [0,4,8],
            [0,1,2],
            [2,4,6],
            [0,3,6],
            [2,5,8],
            [1,4,7],
            [3,4,5],
            [6,7,8],
        ]

           for(let i =0; i < winningCombinations.length; i++) {
            const [a,b,c] = winningCombinations[i]
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a]

                console.log("Winner")
                return true

            }
               
           }
        }
    
    
    
    return (
        <div>
            <div className = "board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className = "board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className = "board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <button onClick={resetBoard}> reset</button>
        </div>
    )



    }




function Game() {
    return(
        <Board/>
    )
}

export default Game;
