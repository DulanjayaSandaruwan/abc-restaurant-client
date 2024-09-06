import React, { useContext } from 'react'
import Drawer from '../../Common/Drawer/Drawer';
import { AddCircleOutline, DeleteForever, ProductionQuantityLimits, RemoveCircleOutline, ShoppingCart } from '@mui/icons-material';
import { StoreContext } from '../../../context/StoreContext';

const Cart = ({ cartIsOpen, setCartIsOpen, setCheckoutOpen }) => {

    const { cartItem, itemsList, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(StoreContext);
    return (
        <div>
            <Drawer isOpen={cartIsOpen} setIsOpen={setCartIsOpen}>
                <div className='mt-10 mx-8 flex flex-col h-full'>
                    <div className='h-5/6 w-full flex flex-col'>
                        <h2 className='text-2xl text-center'><ShoppingCart /> Your Cart</h2>
                        <hr className='w-full my-4' />
                        <div className='flex flex-col gap-2 h-full'>
                            {
                                Object.keys(cartItem).filter(key => cartItem[key] !== 0).length > 0
                                    ?
                                    (
                                        Object.entries(cartItem).map(([key, value], index) => {
                                            if (value > 0) {
                                                const item = itemsList.find(item => item.id === key);
                                                return item ? (
                                                    <>
                                                        <div key={key} className='flex gap-3 justify-between'>
                                                            <img src={item.imageUrl} width={100} alt="" className='rounded' />
                                                            <div>
                                                                <p>{item.itemName}</p>
                                                                <p>Rs: {item.unitPrice}.00</p>
                                                            </div>
                                                            <div className='flex gap-3 text-xs items-center'>
                                                                <span className='text-gray-400' onClick={() => removeFromCart(key)}><RemoveCircleOutline /></span>
                                                                <span>{value}</span>
                                                                <span className='text-green-400' onClick={() => addToCart(key)}><AddCircleOutline /></span>
                                                            </div>
                                                            <div className='flex items-center'>
                                                                <span className='text-red-500' onClick={() => deleteFromCart(key)}><DeleteForever /></span>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </>
                                                ) : null;
                                            }
                                        })
                                    )

                                    :
                                    <div className='flex justify-center items-center h-full'>
                                        <ProductionQuantityLimits sx={{ fontSize: 150 }} className='text-gray-200' />
                                    </div>
                            }
                        </div>
                    </div>
                    <div className='h-1/6 w-full grid justify-items-stretch '>
                        {/* <div className='text-right text-sm text-gray-400 grid gap-1'> */}
                        {/* <p>Delivery Charge : Rs. 3500.00</p> */}
                        {/* <p>Packing Charge : Rs. 100.00</p> */}
                        {/* <p className='text-green-400'>Total Charge : Rs. {getTotalCartAmount()}.00</p> */}
                        {/* </div> */}
                        {
                            !Object.keys(cartItem).filter(key => cartItem[key] !== 0).length > 0 ? '' :
                                <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full h-10 self-end'
                                    onClick={() => {
                                        setCartIsOpen(false)
                                        setCheckoutOpen()
                                    }}>
                                    <span>Checkout</span>
                                </button>
                        }
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Cart
