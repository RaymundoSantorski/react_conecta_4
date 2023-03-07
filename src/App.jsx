import './App.css'
import { Row } from './components/Row';
import { useGame } from './hooks/useGame';

function App() {

  const [board, doAMove] = useGame();

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
