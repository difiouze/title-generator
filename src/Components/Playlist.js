import React from 'react'
import SavedTitle from './SavedTitle'


const Playlist = ({playlist, setPlaylist}) => {

const resetPlaylist = () => {
    setPlaylist([]);
}

    return (
        <div>
            <button onClick={resetPlaylist}>Reset Playlist</button>
            <SavedTitle playlist={playlist}/>
        </div>
    )
}

export default Playlist
