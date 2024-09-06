import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../../../../components/Web/FoodItem/FoodItem'
import { StoreContext } from '../../../../context/StoreContext'

const FoodDisplay = ({ category }) => {

  const { itemsList } = useContext(StoreContext)

  return (
    <div className='Food-Display' id='Food-Display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {itemsList.map((item, index) => {
          if (category === "" || category === item.category.categoryName) {
            return <FoodItem key={index} id={item.id} name={item.itemName} price={item.unitPrice} description={item.description} image={item.imageUrl}></FoodItem>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
