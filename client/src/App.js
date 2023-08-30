
import './App.css';
import GameLogic from './components/GameLogic';

function App() {
  return (
    <div className="App">
      <h1>Guess the Hidden Number!</h1>
      <h3> between 1 to 20</h3>
      <GameLogic />
    </div>
  );
}

export default App;
