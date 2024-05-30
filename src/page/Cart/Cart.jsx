import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
const Cart = () => {
  const { id } = useParams()
  const { place_list } = useContext(StoreContext)
  const item = place_list.find(item => item._id === parseInt(id))
  return (
    <div className='cart-item'>
      <img src={item.image} alt="" />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <div>
            <p>{item.country}</p>           
        </div>
        <hr />
        <p className='des'>{item.description}</p>  
        <div className="cart-bottom flex">
            <button>Book</button>
            <p>${item.price}</p>
        </div>
      </div> 
      
    </div>
  )
}

export default Cart
