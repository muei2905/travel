import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
    return (
        <div className='header'>
            <div className="overlay"></div>
            <video src={assets.background_header} autoPlay muted loop className="background-video"></video>
            <div className="header-content">
                <div className="text-content">
                    <span className='small-text'>
                        Our Packages
                    </span>
                    <h1 className='header-title'>
                        Search Your Holiday
                    </h1>
                </div>
            <div className="card-content grid">
                <div className="destination-input">
                    <label htmlFor="city">Search Your Destination:</label>
                    <div className="input flex">
                    <input type="text" placeholder='Enter name here....' />
                    <img src={assets.location} alt="" />                
                </div>
                </div>
                

                <div className="date-input">
                    <label htmlFor="date">Search Your Date:</label>
                    <div className="input flex">
                    <input type="date"/>                 
                </div>
                </div>
                

                <div className="price-input">
                    <div className="label-total flex">
                        <label htmlFor="price">Max price:</label>
                        <label htmlFor="total">$5000</label>
                    </div>    
                    <div className="input flex">
                    <input type="range" max="5000" min="1000"/>            
                </div>
                </div>
                <div className="search-option flex">
                    <img src={assets.filter} alt="" />
                    <span>More Filter</span>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Header
