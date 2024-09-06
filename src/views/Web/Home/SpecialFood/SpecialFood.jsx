import React, { useContext } from 'react'
import './SpecialFood.css'
import { StoreContext } from '../../../../context/StoreContext'
import FoodItem from '../../../../components/Web/FoodItem/FoodItem'

const SpecialFood = ({ limit }) => {

  const { itemsList } = useContext(StoreContext)


  // const { food_list } = useContext(StoreContext)

  return (
    <div className='Special-Food-Display' id='Food-Display'>
      {/* <h2>Top dishes near you</h2> */}
      <div className="Special-food-display-list">
        {itemsList.slice(0, limit).map((item, index) => {
          if (true) {
            return <FoodItem key={index} id={item.id} name={item.itemName} price={item.unitPrice} description={item.description} image={item.imageUrl}></FoodItem>
          }
        })}
      </div>
    </div>
  )
}

export default SpecialFood
