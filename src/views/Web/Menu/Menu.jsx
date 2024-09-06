import React, { useState } from 'react'
import ExploreMenu from './ExploreMenu/ExploreMenu'
import FoodDisplay from './FoodDisplay/FoodDisplay'

const Menu = () => {

  const [category, setCategory] = useState("");
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Menu
