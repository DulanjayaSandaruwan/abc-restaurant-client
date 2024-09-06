import React, { useEffect } from 'react'
import { useContext } from 'react';
import NavBar from './navbar/NavBar';
import Footer2 from './Footer2/Footer';
import { StoreContext } from '../../context/StoreContext';
import { Toaster } from 'react-hot-toast';
import Cart from '../../components/Web/Cart/Cart';
import Coupon from '../../components/Web/Coupon/Coupon';
import Reviews from '../../components/Web/Reviews/Reviews';
import Checkout from '../../components/Web/Checkout/Checkout';
import PlaceOrder from '../../components/Web/PlaceOrder/PlaceOrder';
import LoginPopup from '../../components/Web/LoginPopup/LoginPopup';
import MyAccount from '../../components/Web/MyAccount/MyAccount';

const WebLayout = ({ children }) => {
    const { reviewsOpen, token } = useContext(StoreContext);

    const [showLogin, setShowLogin] = React.useState(false);
    const [cartIsOpen, setCartIsOpen] = React.useState(false);
    const [checkoutOpen, setCheckoutOpen] = React.useState(false);
    const [placeOrderOpen, setPlaceOrderOpen] = React.useState(false);
    const [couponOpen, setCouponOpen] = React.useState(false);
    const [isMyAccountOpen, setMyAccountOpen] = React.useState(false);

    const handleLoginOpen = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    const handleCheckoutOpen = () => setCheckoutOpen(true);
    const handleCheckoutClose = () => setCheckoutOpen(false);

    const handlePlaceOrderOpen = () => setPlaceOrderOpen(true);
    const handlePlaceOrderClose = () => setPlaceOrderOpen(false);

    const handleCouponOpen = () => setCouponOpen(true);
    const handleCouponClose = () => setCouponOpen(false);

    useEffect(() => {
        setMyAccountOpen(false)
    }, [token])

    return (
        <>
            <LoginPopup open={showLogin} close={handleLoginClose} />
            <div className='app'>
                <NavBar
                    setShowLogin={handleLoginOpen}
                    setCartIsOpen={setCartIsOpen}
                    setCheckoutOpen={setCheckoutOpen}
                    setMyAccountOpen={setMyAccountOpen}
                />
                {children}
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                    toastOptions={{
                        className: '',
                        style: {
                            zIndex: 99999,
                        },
                    }}
                    containerStyle={{
                        zIndex: 99999,
                    }}

                />
                <Cart
                    cartIsOpen={cartIsOpen}
                    setCartIsOpen={setCartIsOpen}
                    setCheckoutOpen={handleCheckoutOpen}
                />
                <Checkout
                    checkoutOpen={checkoutOpen}
                    setCheckoutClose={handleCheckoutClose}
                    setPlaceOrderOpen={handlePlaceOrderOpen}
                />
                <PlaceOrder
                    Open={placeOrderOpen}
                    Close={handlePlaceOrderClose}
                    handleCouponOpen={handleCouponOpen}
                />
                <Coupon
                    Open={couponOpen}
                    Close={handleCouponClose}
                />
                {reviewsOpen && <Reviews />}
                {token && <MyAccount isOpen={isMyAccountOpen} setIsOpen={setMyAccountOpen} />}
                <Footer2 />
            </div>
        </>
    )
}

export default WebLayout