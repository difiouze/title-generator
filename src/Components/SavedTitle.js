import React from 'react'

const SavedTitle = ({ playlist }) => {

    return (
        <div className='playlist-item__container'>
            {playlist.map(item => (
                <div key={Math.random() * 1000} className='playlist-item__item'>
                     <div className='playlist-item__thumb'></div>
                    {item.map(newTitle => (
                        <div key={newTitle.key}> {newTitle.subject} {newTitle.verb} {newTitle.complement}</div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SavedTitle
