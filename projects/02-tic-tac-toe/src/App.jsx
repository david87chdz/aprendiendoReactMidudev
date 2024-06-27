import { useState } from 'react';

const TURNS = {
  X: 'x',
  O: 'o'
}
 
const WINNING_COMBINATIONS = [
  [0, 1, 2], //horizontal
  [3, 4, 5], //horizontal
  [6, 7, 8], //horizontal
  [0, 3, 6], //vertical
  [1, 4, 7], //vertical
  [2, 5, 8], //vertical
  [0, 4, 8], //diagonal
  [2, 4, 6] //diagonal
]
 

const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    console.log('click en el '+ index );
    updateBoard(index);
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}



function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); //null no hay ganador y false es un empate

  const checkWinner = (boardToCheck) => {
    for (let combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      if(
        boardToCheck[a] && 
        boardToCheck[a] == boardToCheck[b] && 
        boardToCheck[a] == boardToCheck[c]) 
        {
        return boardToCheck[a];
      }   
    }
    //Si no hay ganador
    return null;
  }

  const updateBoard = (index) => {
    /*
    Esto no se puede hacer debido a que el array es inmutable
    board[index] = turn;
    */

    //no actualizamos la posición si ya tiene algo
    if(board[index] || winner) return

    //Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn; // x or o
    setBoard(newBoard);
    console.log(newBoard[index]);

    
    //Cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Verificar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner) {
      /*La actualización de los estados son asincronos*/
      setWinner(newWinner);
      alert('El ganador es '+ newWinner);
    }
  }
  
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => (
           <Square 
           key={index}
           index={index}
           updateBoard={updateBoard}
           >
            {board[index]}
           </Square>
          ))
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X }>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )  
}

export default App
