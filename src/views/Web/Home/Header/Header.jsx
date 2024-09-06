import React, { useEffect, useState } from "react";
import { Moped, Search } from '@mui/icons-material';
import { assets } from '../../../../assets/web/images/assets'
import { Carousel } from "@material-tailwind/react";

const Header = () => {

    // slider start 

    const images = [
        'https://admin-kfc-web.azurewebsites.net//images/sliderimages/03216f67500642769d7b19d5298f3e4d.jpg',
        'https://admin-kfc-web.azurewebsites.net//images/sliderimages/51114ff3e474404b81f9a97f11b7dbd7.jpg',
        'https://admin-kfc-web.azurewebsites.net//images/sliderimages/03216f67500642769d7b19d5298f3e4d.jpg',
        'https://admin-kfc-web.azurewebsites.net//images/sliderimages/d5a32ea361ef43d89dfb16096003a1eb.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    // slider end

    const [searchType, setSearchType] = useState('delivery');
    const [open, setOpen] = useState(true);

    return (
        <div className="flex flex-col justify-center items-center static h-screen">

            <Carousel loop={true} autoplay={true} className="w-full h-1/2 rounded-xl">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Carousel Image"
                        className="h-full w-full object-cover object-center"
                    />
                ))}
            </Carousel>

            <div className='w-full h-1/2  relative overflow-hidden rounded-lg'>
                <div className='h-full w-full flex flex-col justify-center items-center'>
                    <div className='h-2/5'></div>
                    <div className='text-center items-center flex flex-col gap-4 h-3/5 bottom-0'>
                        <h2 className='text-3xl md:text-5xl font-bold'>Best Crispy Chicken in Sri Lanka</h2>
                        <p className='font-bold text-gray-400'>Abc Food CHICKEN IS 100% LOCALLY SOURCED FROM OUR VERY OWN POULTRY FARMERS</p>
                        <p className='text-red-500'>A Taste You Can Trust!</p>
                        <img src={assets.logo} width={150} />
                    </div>
                </div>
            </div>

            {/* middle cart */}
            <div className='absolute flex justify-center items-center h-screen'>
                {/* open time show  */}
                {
                    open ?
                        <div className='flex flex-col rounded-lg bg-white p-5 drop-shadow-2xl gap-3'>
                            <p>Start your order here</p>
                            <div className='grid grid-rows-2 md:grid-rows-1 grid-flow-col md:grid-flow-col-2 gap-4 '>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div
                                        className={`h-24 w-auto min-w-32  p-1 flex justify-center items-center flex-col  rounded-lg border-2 border-gray-300 ${searchType == 'delivery' ? 'bg-red-700 text-white border-none' : 'text-gray-400 hover:bg-gray-100'}`}
                                        onClick={() => setSearchType('delivery')}
                                    >
                                        <img src="https://www.kfc.lk/images/icons/scooter.svg"
                                            style={{ filter: `invert(1) ${searchType == 'delivery' ? 'brightness(1)' : 'brightness(0)'} saturate(100%)` }}
                                            width={50}
                                        />
                                        <p>Delivery</p>
                                    </div>
                                    <div
                                        className={`h-24 w-auto min-w-32 p-1 flex justify-center items-center flex-col rounded-lg border-2 border-gray-300 ${searchType == 'pickup' ? 'bg-red-700 text-white border-none' : 'text-gray-400 hover:bg-gray-100'}`}
                                        onClick={() => setSearchType('pickup')}
                                    >
                                        <img src="https://www.kfc.lk/images/icons/food.svg"
                                            style={{ filter: `invert(1) ${searchType == 'pickup' ? 'brightness(1)' : 'brightness(0)'} saturate(100%)` }}
                                            width={50}
                                        />
                                        <p>Pickup</p>
                                    </div>
                                </div>
                                <div className='col-span-2 grid grid-rows-2 grid-flow-col gap-3'>
                                    <p className='bg-gray-200 px-3 py-2 w-96 rounded'>Enter Your Delivery Location</p>
                                    <button className='bg-red-800 rounded text-white hover:bg-red-700'><Search /> Search</button>
                                </div>
                            </div>
                        </div>

                        :
                        <div className='flex flex-col rounded-lg bg-white p-5 drop-shadow-2xl gap-3'>
                            <p className="font-sans">Sorry!! We are closed</p>
                            <div className='grid grid-rows-2 md:grid-rows-1 grid-flow-col md:grid-flow-col-2 gap-4 '>
                                <span className="font-sans text-sm text-red-500">Dear Customer, Orders are taken only between 10: 00 AM to 10: 00 PM. Thank you for your cooperation.</span>
                            </div>
                        </div>
                }
            </div>

        </div>
    );
};

export default Header;