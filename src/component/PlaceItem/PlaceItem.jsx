import React from 'react'
import './PlaceItem.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const PlaceItem = ({id, name, price, description, image, country}) => {
  return (
    <Link to={`/cart/${id}`} className='place-item'>
      <div className="place-item-img-container">
        <img className='place-item-img' src={image}/>
      </div>
      <div className="place-item-info">
        <h3>{name}</h3>
        <div className="country flex">
            <img src={assets.location}/>
            <p>{country}</p>           
        </div>
        <hr />
        <p className='description'>{description}</p>  
      </div> 
      <div className="place-item-bottom flex">
            <button>Details</button>
            <p>${price}</p>
        </div>
    </Link>
  )
}

export default PlaceItem
