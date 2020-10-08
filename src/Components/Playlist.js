import React from 'react'
import SavedTitle from './SavedTitle'


const Playlist = ({ playlist, setPlaylist }) => {

    const resetPlaylist = () => {
        setPlaylist([]);
    }

    return (
        <div className='playlist__container'>
            <div className='playlist__control'>
                <h3 className='playlist__title'>Item Saved:</h3>
                {playlist.length ? <button className='btnmain' onClick={resetPlaylist}>Reset Playlist</button> : <span>No item saved yet!</span>}
            </div>
            <SavedTitle playlist={playlist} />
        </div>
    )
}

export default Playlist
