import React from 'react'
import SavedTitle from './SavedTitle'


const Playlist = ({ itemSaved, setItemSaved }) => {

    const resetPlaylist = () => {
        setItemSaved([]);
    }

    return (
        <div className='playlist__container'>
            <div className='playlist__control'>
                <h3 className='playlist__title'>Item Saved: {itemSaved.length}</h3>
                {itemSaved.length ? <button className='btnmain' onClick={resetPlaylist}>Reset Playlist</button> : <span>No item saved yet!</span>}
            </div>
            <SavedTitle itemSaved={itemSaved} setItemSaved={setItemSaved}/>
        </div>
    )
}

export default Playlist
