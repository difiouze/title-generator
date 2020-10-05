import React from 'react'

const Title = ({ title, playlist, setPlaylist }) => {

    const addToPlaylist = () => {
        setPlaylist([...playlist, title]);
    }

    return (
        <div>
            {title.map(newTitle => (
                <div key={newTitle.key}>
                    <h1> {newTitle.subject} {newTitle.verb} {newTitle.complement}</h1>
                </div>
            ))}

            {title.length ? <button className='btnmain' onClick= {addToPlaylist}>Add to playlist</button> : <div></div>}
        </div>
    )
}

export default Title


