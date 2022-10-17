import {useState} from 'react';
import './App.css';
import Square from './Square';



function App() {

 const [squares, setSquares]= useState(['', '', '', '', '', '', '', '', ''])
 const [player, setPlayer] = useState(true)
 const handleClick = () => {
  setSquares(['', '', '', '', '', '', '', '', '']);
  setPlayer(true)
 };
 const calculateWinner = (arr) => {
         const lines = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]]
         for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (
              arr[a] &&
              arr[a] === arr[b] &&
              arr[a] === arr[c]
          ) {
              return `${arr[a]} won!`;
          }
      }
      return "Who will win?";
  };
         
        
 

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className='container'>
        {squares.map((value, index) => {
          return (<Square squareValue={value} key={index} player={player} setPlayer={setPlayer} squares={squares} setSquares={setSquares} index={index}/>)
        })}
     <button onClick={handleClick}>Reset</button>
    </div>
    </div>
  );
}

export default App;
