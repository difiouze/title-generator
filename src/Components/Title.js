import React from 'react'

const Title = ({ title, playlist, setPlayslist }) => {

    const addToPlaylist = () => {
        //Object.fromEntries(data);
        setPlayslist([...playlist, title]);
      }
    

    return (
        <div>
            {title.map(newTitle => (
                <div key={newTitle.key}>
                    <h1> {newTitle.subject} {newTitle.verb} {newTitle.complement}</h1>
                    <button onClick= {addToPlaylist}>Add to playlist</button>
                </div>
            ))} 
        </div>
    )
}

export default Title


