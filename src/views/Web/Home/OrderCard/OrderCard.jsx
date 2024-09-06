import React from 'react'

const OrderCard = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 justify-center items-center'>
            <div className='w-full h-96 '>
                <img src="https://www.kfc.lk/images/KFC-Home.jpg" width={400} alt="" srcset="" />
            </div>
            <div className='w-full h-96 grid grid-rows-4'>
                <p className='text-red-500'>Abc Food CHICKEN IS 100% LOCALLY SOURCED FROM OUR VERY OWN POULTRY FARMERS</p>
                <p className='text-2xl font-normal'>Hand-Breaded, Freshly Prepared & Finger Licking' Good!</p>
                <p className='text-2xl text-red-700 '>A Taste You Can Trust!</p>
                <button className='bg-red-800 rounded text-white hover:bg-red-700 h-14 w-fit px-5 text-xl'>Order Now</button>
            </div>
            <div className='w-full h-96 flex justify-end'>
                <img src="https://www.kfc.lk/images/KFC-Delivery.png" width={350} alt="" />
            </div>
        </div>
    )
}

export default OrderCard