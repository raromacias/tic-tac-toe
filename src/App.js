import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {

  const newStr = "Heya!"
  return (
    <div className="App">
     <Square newStr={newStr}/>
    </div>
  );
}

export default App;
