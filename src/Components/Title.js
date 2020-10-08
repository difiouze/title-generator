import React from 'react'

const Title = ({ title, playlist, setPlaylist }) => {

    const addToPlaylist = () => {
        setPlaylist([...playlist, title]);
    }

    return (
        <>
            {title.map(newTitle => (
                <div key={newTitle.key} className='main-wrapper__video-item' >
                    <img className='video-image' src={newTitle.image} alt={newTitle.subject} />
                    <h1> {newTitle.subject} {newTitle.verb} {newTitle.complement}</h1>
                </div>
            ))}

            {title.length ? <button className='btnmain' onClick= {addToPlaylist}>Add to playlist</button> : <div></div>}
        </>
    )
}

export default Title


