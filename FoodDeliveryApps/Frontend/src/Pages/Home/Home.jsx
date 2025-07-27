import React, { useState } from 'react'
import './Home.css';
import Header from '../../Components/Header/Header';
import Exploremenu from '../../Components/ExploreMenu/Exploremenu';
import FoodDisplay from '../../Components/FoodDisplaay/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState("all")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
