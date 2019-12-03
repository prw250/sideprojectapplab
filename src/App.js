import React, { useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

let promptItems= ["Write 5 things you are most grateful for today.", "What is something that always puts you in a good mood?", "Write about a time when a situation that seemed bad turned out okay in the end.","What is your favorite thing about yourself?","Tell about a time you were grateful for something a friend did for you.","What’s something that you’re looking forward to?","What’s a simple pleasure that you’re grateful for?","What’s something that you grateful to have today that you didn’t have a year ago?", "Write about a happy memory.","Write about someplace you’ve been that you’re grateful for.", "What’s something about your body or health that you’re grateful for?", "What’s an accomplishment you’re proud of?", "Open the door or window and look outside. What’s something you’re grateful for outside?", "Open your phone or photo album and find a photo that you like. Why are you grateful for this photo? What are you grateful for in the photo?", "What have you been given that you’re grateful for?","Write about some of your best qualities", "What would your teenage self love about you now?",]
 

function App() {
  const [quote, setQuote] = useState();
  const [remainingtime, setRemainingtime] = useState(300);
  function randomquote(){
    console.log(Math.floor(Math.random() * 17));
    return(
      setQuote(Math.floor(Math.random() * 17))
    )
  }
  useEffect(() => {
    const id = setInterval(() => setRemainingtime(n => n - 1), 1000);
    return () => clearInterval(id);
  }, []);

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
        <div><button onClick={handleclick}>BEGIN</button></div>
        <p>
          {promptItems[quote]}
        </p>
        <textarea rows="4" cols="50">xyz</textarea>
    </div>

  );
}




export default App;
