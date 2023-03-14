import './App.css'
import { Board } from './components/Board';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { useGame } from './hooks/useGame';

function App() {

  const [board, doAMove, turn, winner, wins, restart, clearWins] = useGame();

  return (
    <>
     <Board board={board} doAMove={doAMove} />
      <Navbar wins={wins} turn={turn} winner={winner} />
      <Footer clearWins={clearWins} restart={restart} />
    </>
  )
}

export default App
