import { useState } from 'react';
import { Square } from './components/Square';
import { checkWinner, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal';
import { TURNS } from './constants';
import confetti from 'canvas-confetti';





function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board');
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn');
    return savedTurn ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null); //null no hay ganador y false es un empate

  

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
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

    //Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);

    //Verificar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner) {
      confetti();
      /*La actualización de los estados son asincronos*/
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }
  
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => (
           <Square 
           key={index}
           index={index}
           updateBoard={updateBoard}
           >
            {square}
           </Square>
          ))
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X }>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

       <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )  
}

export default App
