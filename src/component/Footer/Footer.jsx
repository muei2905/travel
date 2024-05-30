import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="video-content">
                <video src={assets.background_footer} autoPlay muted loop className="background-video"></video>
            </div>
            <div className="footer-content">
                <div className="contact grid">
                    <div className="text-contact">
                        <p>KEEP IN TOUCH</p>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="input-content flex">
                    <input type="email" placeholder='Enter your email' required />
                    <button>SEND</button>
                    </div>                   
                </div>
                <div className="footer-content-item">
                    <div className="footer-content-form">
                        <div className="footer-content-left">
                            <img src={assets.logo} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique itaque corporis id libero, quisquam ea! Ipsam dolor sequi, laudantium pariatur reprehenderit quidem sapiente minima nostrum possimus praesentium mollitia eligendi cupiditate?</p>
                            <div className="footer-social-icons">
                                <img src={assets.facebook_icon} alt="" />
                                <img src={assets.twitter_icon} alt="" />
                                <img src={assets.linkedin_icon} alt="" />
                            </div>
                        </div>
                        <div className="footer-content-center">
                            <h2>COMPANY</h2>
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Delivery</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                        <div className="footer-content-right">
                            <h2>CONTACT</h2>
                            <ul>
                                <li>+84368174274</li>
                                <li>phanthanhtu9a5bl2017@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <p className="footer-copyright">Copyright © Phan Thanh Tú - DH52111990 - D21_TH12 - Nhóm 22</p>
                </div>              
            </div>
        </div>

    )
}

export default Footer
