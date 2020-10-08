import React from 'react'

const SavedTitle = ({ playlist }) => {

    return (
        <div className='playlist-item__container'>
            {playlist.map(item => (
                <React.Fragment key={Math.random() * 1000}>
                    {item.map(itemSaved => (
                        <div key={itemSaved.key} className='playlist-item__item'>
                        <div  className='playlist-item__thumb'>
                            <img src={itemSaved.image} alt={itemSaved.key}/>
                        </div>
                        <div className='playlist-item__title'> {itemSaved.subject} {itemSaved.verb} {itemSaved.complement}</div>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default SavedTitle
