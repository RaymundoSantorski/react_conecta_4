import './App.css'
import { Row } from './components/Row';
import { useGame } from './hooks/useGame';

function App() {

  const [board, doAMove, turn, winner] = useGame();

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
      <div className="navbar">
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
        
      </div>
      <div className="footer"></div>
    </>
  )
}

export default App
