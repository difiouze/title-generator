import React, { useState} from 'react';
import numbers from './Utils/Numbers';
import days from './Utils/Days';
import months from './Utils/Months';
import Title from './Components/Title';
import Playlist from './Components/Playlist';
import './App.css';

function App() {

  const [title, setTitle] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const randomTitle = () => {
    setTitle([{
      key: Math.random() * 1000,
      subject: numbers[Math.floor(Math.random() * numbers.length)],
      verb: days[Math.floor(Math.random() * days.length)],
      complement: months[Math.floor(Math.random() * months.length)],
    }
    ]);
  };

  return (
    <div className="App">
      <h1>Click to generate a title </h1>
      <button onClick={randomTitle}>Random Title !</button>
      <Title title={title} playlist={playlist} setPlaylist={setPlaylist}/>
      <Playlist playlist={playlist} setPlaylist={setPlaylist}/>
    </div>
  );
}

export default App;
