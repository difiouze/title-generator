import React from 'react'

const SavedTitle = ({ itemSaved, setItemSaved }) => {


const clickToDelete = (item) => {
    console.log(item.key);
    setItemSaved(itemSaved.filter((el) => el.key !== item.key));
}


    return (

<div className='playlist-item__container'>
{itemSaved.map(item => (
                <div key={item.key} className='playlist-item__item' >
                    <div className="playlist-item__thumb">
                         <img src={item.image} alt={item.subject} />
                    </div>
                    
                    <div className='playlist-item__title'> {item.subject} {item.verb} {item.complement}</div>
                        <button onClick={() => clickToDelete(item)}>Click to delete</button>
                
                </div>
            ))}
</div>

       
    )
}

export default SavedTitle
