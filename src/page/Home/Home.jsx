import React, { useState } from 'react'
import Header from '../../component/Header/Header'
import PlaceDisplay from '../../component/PlaceDisplay/PlaceDisplay'
import './Home.css'
const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <PlaceDisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
