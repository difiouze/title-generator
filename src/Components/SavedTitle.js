import React from 'react'

const SavedTitle = ({ itemSaved, setItemSaved }) => {

    const clickToDelete = () => {
        console.log("deleted")
        for(let i = 0; i < itemSaved.length; i++) {
  
            for(let j = 0; j < itemSaved[i].length; j++) {
              
               const filteredItem = itemSaved[i][j].key;
                console.log(filteredItem)
                
            }
         }
    }

    return (
        <div className='playlist-item__container'>
            {itemSaved.map(item => (
                <React.Fragment key={Math.random() * 1000}>
                    {item.map(itemSaved => (
                        <div key={itemSaved.key} className='playlist-item__item'>
                        <div  className='playlist-item__thumb'>
                            <img src={itemSaved.image} alt={itemSaved.key}/>
                        </div>
                        <div className='playlist-item__title'> {itemSaved.subject} {itemSaved.verb} {itemSaved.complement}</div>
                        <button onClick={clickToDelete}>Click to delete</button>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default SavedTitle
