import React from 'react'

const SavedTitle = ({ playlist }) => {

    return (
        <div>
            {playlist.map(newItem => (
                <div key={newItem.key}>
                    <h1> {newItem.subject} {newItem.verb} {newItem.complement}</h1>
                </div>
            ))}
        </div>
    )
}

export default SavedTitle
