import { useState } from 'react';
import './index.css'

const App =() => {
  const[diceNumber,setDiceNumber] = useState(6)
  const refreshDice = () =>{
    const ranno = Math.floor(Math.random() *6)+1
    setDiceNumber(ranno)
  }
  return (
    <div>
      <center>
        <h1> Simple Dice Roller App</h1>
      <img width ={450} height ={350} src={require(`./assets/${diceNumber}.jpg`)}></img>
      <br></br>
      <br></br>
      <button onClick={()=> refreshDice()} className='button'> Roll</button>
      </center>
    </div>
  );
}

export default App;
