import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../../assets/web/images/assets'
import { StoreContext } from '../../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItem, addToCart, removeFromCart, handleReviewsOpen } = useContext(StoreContext);

  return (
    <div className='food-item duration-150 hover:scale-105 before:scale-105 drop-shadow-2xl'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt="" />
        {
          !cartItem[id]
            ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" srcset="" />
            : <div className='food-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" srcset="" />
              <p>{cartItem[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" srcset="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" onClick={() => handleReviewsOpen(id)} />
        </div>
        <p className='food-item-description'>{description}</p>
        <div className='flex gap-5 items-center'>
          <p className="food-item-price">Rs:{price}</p>
          <button className='bg-red-800 rounded text-white hover:bg-red-700 h-8 px-4 w-full' onClick={() => addToCart(id)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
