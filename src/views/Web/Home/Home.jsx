import React, { useState } from 'react'
import './Home.css'
import OrderCard from './OrderCard/OrderCard';
import Header from './Header/Header';
import SpecialFood from './SpecialFood/SpecialFood';

const Home = () => {

  return (
    <div>
      <Header />
      <SpecialFood limit={6} />
      <OrderCard />
    </div>
  )
}

export default Home