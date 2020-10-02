import React, {useState} from 'react'

const Title = ({ title }) => {
    const [playlist, setPlayslist] = useState([]);

    const addToPlaylist = () => {
        console.log("Hello");
        setPlayslist(...playlist, title);
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
