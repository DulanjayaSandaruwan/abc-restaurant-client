import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../../assets/web/images/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext';
import { Person } from '@mui/icons-material';

const navBar = ({ setShowLogin, setCartIsOpen, setMyAccountOpen }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token } = useContext(StoreContext)

  return (
    <div className='navBar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => { setMenu("home") }} className={menu == "home" ? "active" : null} >Home</Link>
        <Link to='/menu' onClick={() => { setMenu("menu") }} className={menu == "menu" ? "active" : null} >Menu</Link>
        <Link to='/facilities' onClick={() => { setMenu("facilities") }} className={menu == "facilities" ? "active" : null} >Facilities</Link>
        <Link to='/gallery' onClick={() => { setMenu("gallery") }} className={menu == "gallery" ? "active" : null} >Gallery</Link>
        <Link to='/contact' onClick={() => { setMenu("contact") }} className={menu == "contact" ? "active" : null} >Contact us</Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" srcset="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" srcset="" onClick={() => setCartIsOpen(true)} />
          <div className={getTotalCartAmount() === 0 ? null : "dot"}></div>
        </div>
        {
          token
            ? <button className='bg-red-800 text-white hover:bg-red-700 rounded-full py-2 px-4' onClick={() => { setMyAccountOpen(true) }}><Person /> My Account</button>
            : <button className='bg-red-800 text-white hover:bg-red-700 rounded-full py-2 px-4' onClick={() => { setShowLogin(true) }}>sign in</button>
        }
      </div>
    </div>
  )
}

export default navBar
