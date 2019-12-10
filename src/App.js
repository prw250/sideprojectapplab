import React, { useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

let promptItems= ["Write 5 things you are most grateful for today.", "What is something that always puts you in a good mood?", "Write about a time when a situation that seemed bad turned out okay in the end.","What is your favorite thing about yourself?","Tell about a time you were grateful for something a friend did for you.","What’s something that you’re looking forward to?","What’s a simple pleasure that you’re grateful for?","What’s something that you grateful to have today that you didn’t have a year ago?", "Write about a happy memory.","Write about someplace you’ve been that you’re grateful for.", "What’s something about your body or health that you’re grateful for?", "What’s an accomplishment you’re proud of?", "Open the door or window and look outside. What’s something you’re grateful for outside?", "Open your phone or photo album and find a photo that you like. Why are you grateful for this photo? What are you grateful for in the photo?", "What have you been given that you’re grateful for?","Write about some of your best qualities", "What would your teenage self love about you now?",]
 
var firebaseConfig = {
  apiKey: "AIzaSyCe4-5423X8sV1INwyp8BG57JbpQwHuTmA",
  authDomain: "sideprojectapplab.firebaseapp.com",
  databaseURL: "https://sideprojectapplab.firebaseio.com",
  projectId: "sideprojectapplab",
  storageBucket: "sideprojectapplab.appspot.com",
  messagingSenderId: "989661843128",
  appId: "1:989661843128:web:dfda055533053f3d10ae4d",
  measurementId: "G-GDZV69EXYV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  const [quote, setQuote] = useState();
  const [remainingtime, setRemainingtime] = useState(300);
  const [buttonclicked, setButtonclicked] = useState(false);
  const [message,setMessage]= useState("");
  const [messages,setMessages]= useState({});
  function randomquote(){
    console.log(Math.floor(Math.random() * 17));
    return(
      setQuote(Math.floor(Math.random() * 17))
    )
  }
  useEffect(() => {
    var Ref = firebase.database().ref("messages");
Ref.on('value', function(snapshot) {
  console.log(snapshot.val());
  setMessages(snapshot.val());
});
    const id = setInterval(() => {
      if (buttonclicked) setRemainingtime(n => n - 1)}, 1000);
    return () => clearInterval(id);
  }, [buttonclicked]);

  function handleclick() {
    let  fiveMinutes = 60 * 5,
    display = document.querySelector('#time');

   randomquote();
   setButtonclicked(true);
  //  startTimer(fiveMinutes, display);
  }

  function handleSubmit(){
    firebase.database().ref("messages").push(message)
  }
  function handleChange(event){
    setMessage(event.target.value);
  }

  return (
    <div className="App" >
        <style>
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
</style>
        <h1>Guided Positivity Break</h1>
        <span id="time">{remainingtime}</span>
        <div><style>
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
</style>
          <button className = 'button1' onClick={handleclick}>BEGIN</button></div>
        <p>
          {promptItems[quote]}
        </p>
        <textarea rows="10" cols="55" onChange={handleChange}>{message}</textarea>
        <div><button className='button2'onClick={handleSubmit}>SUBMIT</button></div>
        {Object.keys(messages).map(k => {
          return <div>{messages[k]}</div>;
        })}
    </div>

  );
}




export default App;
