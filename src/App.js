import React, { useState } from 'react';
import numbers from './Utils/Numbers';
import days from './Utils/Days';
import months from './Utils/Months';
import images from './Utils/Images'
import Title from './Components/Title';
import Playlist from './Components/Playlist';
import './App.css';

function App() {

  const [title, setTitle] = useState([]);
  const [itemSaved, setItemSaved] = useState([]);

  const randomTitle = () => {
    setTitle([{
      key: Math.random() * 1000,
      subject: numbers[Math.floor(Math.random() * numbers.length)],
      verb: days[Math.floor(Math.random() * days.length)],
      complement: months[Math.floor(Math.random() * months.length)],
      image: images[Math.floor(Math.random() * images.length)],
    }
    ]);
  };

  return (
    <div className="App">
      <h1 className='main-title'>Click to generate a title </h1>
      <button className='btnmain' onClick={randomTitle}>Random Title!</button>
      <div className='main-wrapper'>
        <div className='main-wrapper__video'>
          <Title title={title} itemSaved={itemSaved} setItemSaved={setItemSaved} />
        </div>
        <div className='main-wrapper__playlist'>
          <Playlist itemSaved={itemSaved} setItemSaved={setItemSaved} />
        </div>
      </div>
    </div>
  );
}

export default App;
