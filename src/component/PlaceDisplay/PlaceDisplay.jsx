import React, { useContext } from 'react'
import './PlaceDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import PlaceItem from '../PlaceItem/PlaceItem'
const PlaceDisplay = (category) => {
    const {place_list} = useContext(StoreContext)
  return (
        <div className="place-display" id='place-display'>
            <h2>Most visited destinations</h2>
            <div className="place-display-list">
            {
                place_list.map(
                    (item, index)=>{
                            return <PlaceItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} country={item.country}/>    
                    }
                )
            }
            </div>
        </div>
  )
}
export default PlaceDisplay
