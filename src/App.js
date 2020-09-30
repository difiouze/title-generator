import React, {useState, useEffect} from 'react';
import days from './Utils/Days';
import './App.css';

function App() {
  const [dayStorage, setDayStorage] = useState(["Click the button to pick a day"]);
 
  const randomDay = () => {
     const day = days[Math.floor(Math.random() * days.length)];
     setDayStorage(day);
  }

  return (
    <div className="App">
      <h1>{dayStorage}</h1>
      <button onClick={randomDay}>Click me !</button>
    </div>
  );
}

export default App;
