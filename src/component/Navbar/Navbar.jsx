import React, {useState} from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu]=useState("menu")
  const [active, setActive]= useState('navbar-content')
  const showNav=()=>{
    setActive(active === 'navbar-content' ? 'navbar-content active-navbar' : 'navbar-content')
  }
  const hideNav = () => {
    setActive('navbar-content')
  }
  return (
    <div className='navbar' id='navbar'>
      <Link to='/'><img src={assets.logo} className='logo' /></Link>
      <div className="navbar-content-form">
        <div className={active}>
          <ul className="navbar-menu flex">
            <a href="#navbar" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Home</a>
            <a href="">Packages</a>
            <a href="#place-display">Shop</a>
            <a href="">About</a>
            <a href="">Pages</a>
            <a href="">News</a>
            <a href="#footer">Contact</a>
          </ul>
          <div className="close-navbar" onClick={hideNav}>
            <img src={assets.x} alt="" />
          </div>
        </div>
        <div className="navbar-menu-list" >
          <img src={assets.menu} alt="" width='40px' onClick={showNav} />
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>   
    </div>
    
  )
}

export default Navbar
