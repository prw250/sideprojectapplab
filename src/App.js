import React, { useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

let promptItems= ["Write 5 things you are most grateful for today.", "xyz",]
 

function App() {
  const [quote, setQuote] = useState();
  const [remainingtime, setRemainingtime] = useState(300);
  function randomquote(){
    console.log(Math.floor(Math.random() * 2));
    return(
      setQuote(Math.floor(Math.random() * 2))
    )
  }
 useEffect( 
function startTimer(duration, display) {
    var timer = duration;
    setInterval(function () {
      console.log(remainingtime)
      setRemainingtime(remainingtime-1)
        
    }, 1000);

    console.log(display);
}
 )

  function handleclick() {
    let  fiveMinutes = 60 * 5,
    display = document.querySelector('#time');

   randomquote();
  //  startTimer(fiveMinutes, display);
  }

  return (
    <div className="App" >
        <h1>Guided Positivity Break</h1>
        <span id="time">{remainingtime}</span>
        <button onClick={handleclick}>BEGIN</button>
        <p>
          {promptItems[quote]}
        </p>
        
    </div>
  );
}




export default App;
