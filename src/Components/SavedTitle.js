import React from 'react'

const SavedTitle = ({ playlist }) => {

    return (
        <div>
            {playlist.map(item => (
                <div>
                    {item.map(newTitle => (
                        <div key={newTitle.key}>
                            <h1> {newTitle.subject} {newTitle.verb} {newTitle.complement}</h1>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SavedTitle
