import React from 'react'

const SavedTitle = ({ playlist }) => {

    return (
        <div className='playlist-item__container'>
            {playlist.map(item => (
                <div className='playlist-item__item'>
                    {item.map(newTitle => (
                        <span key={newTitle.key}> {newTitle.subject} {newTitle.verb} {newTitle.complement}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SavedTitle
