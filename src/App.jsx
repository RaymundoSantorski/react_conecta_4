import { useState } from 'react'
import './App.css'

const initialBoard = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [1,2,0,0,0,0,0],
]

function App() {

  const [board, setBoard] = useState(initialBoard);

  return (
    <>
      <div className="controls"></div>
      <div className="game_board">
        {
          board.map((line, idx) => {
            return (
              <div key={idx} className='game_board_line'>
                {
                  line.map((piece, i) => {
                    if(piece === 0) {
                      return (
                        <div key={`${idx}${i}`} className='empty_piece'></div>
                      )
                    }else if(piece === 1){
                      return (
                        <div key={`${idx}${i}`} className="piece_1"></div>
                      )
                    }else{
                      return (
                        <div key={`${idx}${i}`} className="piece_2"></div>
                      )
                    }
                  })
                }
              </div>
            )
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
