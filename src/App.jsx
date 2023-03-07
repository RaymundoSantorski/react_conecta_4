import { useState } from 'react'
import './App.css'
import { Row } from './components/Row';

const initialBoard = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]

function App() {

  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState(1);

  const toggleTurn = () => {
    if(turn === 1) setTurn(2);
    else setTurn(1);
  }

  const doAMove = (col, idx = 0) => {
    if(idx > 5) return;
    if(idx === 0 && board[idx][col] !== 0) return;
    if(board[idx][col] === 0){
      let auxBoard = [...board];
      auxBoard[idx][col] = turn;
      if(idx > 0) auxBoard[idx - 1][col] = 0;
      setBoard(auxBoard);
      setTimeout(() => {
        doAMove(col, idx + 1);
      }, 200);
    }
    toggleTurn();
  }

  return (
    <>
      <div className="controls"></div>
      <div className="game_board">
        {
          board.map((line, idx) => {
            return <Row
              key={idx}
              idx={idx}
              line={line}
              doAMove={doAMove}
            />
          })
        }
      </div>
      <div className="score"></div>
      <div className="navbar"></div>
      <div className="footer"></div>
    </>
  )
}

export default App
