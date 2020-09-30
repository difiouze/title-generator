import React, { useState } from 'react';
import numbers from './Utils/Numbers';
import days from './Utils/Days';
import months from './Utils/Months';
import './App.css';

function App() {
  const [numberStorage, setNumberStorage] = useState("Number");
  const [dayStorage, setDayStorage] = useState("Day");
  const [monthStorage, setMonthStorage] = useState("Month");

  const randomDay = () => {
    const number = numbers[Math.floor(Math.random() * numbers.length)];
    const day = days[Math.floor(Math.random() * days.length)];
    const month = months[Math.floor(Math.random() * months.length)];
    setDayStorage(day);
    setNumberStorage(number);
    setMonthStorage(month);
  }

  const reset = () => {
    setNumberStorage("Number");
    setDayStorage("Day");
    setMonthStorage("Month");
  }

  return (
    <div className="App">
      <h1> {numberStorage}  {dayStorage}  {monthStorage}</h1>
      <button onClick={randomDay}>Click me !</button>
      <button onClick={reset}>Back to title</button>
    </div>
  );
}

export default App;
