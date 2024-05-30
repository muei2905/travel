import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './page/Home/Home'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
import { Route, Routes } from 'react-router-dom'
import Cart from './page/Cart/Cart'
const App = () => {
  const [showLogin, setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart/:id' element={<Cart/>}/>
      </Routes>
      <Footer/>      
    </div>
    
    </>    
  )
}
export default App
