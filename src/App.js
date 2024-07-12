import BasketballPlayerCard from './BasketballPlayerCard';
import './App.css';

function App() {
  const player = {
    name: "LeBron James",
    image: "imges/basketballimage.jpeg",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard 
        name={player.name} 
        image={player.image} 
        position={player.position} 
        stats={player.stats} 
      />
    </div>
  );
}

export default App;
