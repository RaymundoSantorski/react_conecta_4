import './App.css'
import { Row } from './components/Row';
import { useGame } from './hooks/useGame';

function App() {

  const [board, doAMove, turn, winner, wins, restart, clearWins] = useGame();

  return (
    <>
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
      <div className="navbar">
          <p className='turn_1'>&#9673; <span>{wins[1]}</span></p>
          <h2 
            className={turn !== 0 
              ? `turn_${turn}`
              : `turn_${winner}`
            }
          >
            {
              winner !== 0
              ? `Gana el jugador ${winner}`
              : `Turno del jugador ${turn}`
            }
          </h2>          
          <p className='turn_2'>&#9673; <span>{wins[2]}</span></p>
      </div>
      <div className="footer">
        <button 
          className='button button_start'
          onClick={(e) => {
            e.preventDefault();
            restart();
          }}
        >Comenzar de nuevo</button>
        <button 
          className='button button_clear'
          onClick={clearWins}
        >Limpiar marcador</button>
      </div>
    </>
  )
}

export default App
