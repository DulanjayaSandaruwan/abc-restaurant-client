import React, { useContext, useEffect, useState } from 'react'
import { Close, LogoutRounded, Person, SearchOffRounded, Subject } from '@mui/icons-material'
import Drawer from '../../Common/Drawer/Drawer'
import { StoreContext } from '../../../context/StoreContext';
import ConformDelete from './ConformDelete';
import toast from 'react-hot-toast';
import { Button, ButtonGroup, Input, Tab, Tabs, TabsHeader, Textarea } from '@material-tailwind/react'
import { IconButton, Tooltip, Typography } from '@mui/material';
import { getUserId } from '../../../utils/Common/Notification';
import { createInquiry, getAllInquiryById, updateOrderStatus } from '../../../services/Common/CommonService';
import { getAllOrderById } from '../../../services/web/WebService.jsx';

const MyAccount = ({ isOpen, setIsOpen }) => {

    const { token, resetToken } = useContext(StoreContext);
    const [activeNav, setActiveNav] = useState('Account')
    const [confirm, setConfirm] = useState(false)
    const [rerender, setRerender] = useState(false)

    const [inquiryList, setInquireList] = useState([])

    useEffect(() => {
        const userId = getUserId();
        getAllInquiryById(userId)
            .then(response => {
                setInquireList(response.content)
            })
    }, [rerender, isOpen])

    const [inquiry, setInquiry] = useState({
        subject: '',
        message: '',
    })

    const updateInquiry = (name, value) => {
        setInquiry(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        getAllOrderById(getUserId())
            .then(response => {
                setOrderList(response?.content)
                console.log(response?.content)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [rerender])

    const handelOnSubmit = (e) => {
        e.preventDefault();
        const data = {
            "subject": inquiry.subject,
            "message": inquiry.message,
            "user": {
                "id": getUserId(),
            }
        }
        createInquiry(data)
            .then(response => {
                console.log(response)
                setRerender(prev => !prev)
            })
    }

    const handelCausalOrder = (id) => {
        updateOrderStatus(id, 'CANCELLED')
        setRerender(!rerender)
    }


    return (
        <div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='mt-10 mx-8 flex flex-col max-h-full overflow-y-auto overflow-x-hidden '>
                    <h2 className='text-2xl text-center'><Person /> My Account</h2>
                    <hr className='w-full my-4' />
                    <h2 className='text-1xl text-center'>Hello {token.name}</h2>
                    <div className='flex mt-4'>
                        <Tabs value={activeNav} className='w-full pb-4 overflow-x-auto'>
                            <TabsHeader>
                                <Tab value={'Account'} onClick={() => setActiveNav("Account")}>Account</Tab>
                                <Tab value={'Order'} onClick={() => setActiveNav("Order")}>Order</Tab>
                                <Tab value={'Inquiry'} onClick={() => setActiveNav("Inquiry")}>Inquiry</Tab>
                            </TabsHeader>
                        </Tabs>
                        <div>
                            <Tooltip title="LogOut">
                                <IconButton onClick={() => setConfirm(true)}>
                                    <LogoutRounded className='text-red-300 hover:scale-110 duration-150' />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>

                    {activeNav == "Account" &&
                        <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                            <p className='text-xl font-semibold text-gray-300'>Account Details</p>
                            <div className='flex flex-col gap-5 px-10 my-3 w-full'>
                                <input type="text" placeholder='User name' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                                <input type="email" placeholder='Email' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                                <input type="tel" placeholder='mobile' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                                <input type="text" placeholder='Address' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                                <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full h-10'>Save</button>
                            </div>
                        </div>
                    }

                    {activeNav == "Order" &&
                        <div>
                            {
                                orderList.length > 0 ?
                                    (
                                        orderList.map((order, index) => (
                                            <div key={index} className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                                                {/* <p className='text-xl font-semibold text-gray-300'>Previous Orders</p> */}
                                                <>
                                                    <div>
                                                        <p>Total Amount : Rs: {order.totalAmount}.00</p>
                                                        <p>Order Type : {order.orderType}</p>
                                                        <p>Delivery date : {order.orderDate}</p>
                                                        <p>Order Status : {order.status}</p>
                                                    </div>
                                                    <div className='grid grid-cols-2 gap-5 mt-5 '>

                                                        {
                                                            order.orderDetails.map((orderData, orderDataIndex) => (
                                                                <div key={orderDataIndex} class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
                                                                    <img class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0" src={orderData.item.imageUrl} alt="Woman's Face" />
                                                                    <div class="text-center space-y-2 sm:text-left">
                                                                        <div class="space-y-0.5">
                                                                            <p class="text-lg text-black font-semibold">
                                                                                {orderData.item.itemName}
                                                                            </p>
                                                                            <p class="text-slate-500 font-medium">
                                                                                {orderData.item.unitPrice}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }

                                                    </div>
                                                    {order.status !== 'CANCELLED' &&
                                                        <ButtonGroup color='red' className='mt-5 w-full'>
                                                            <Button className='w-full' onClick={() => handelCausalOrder(order.id)}>CANCEL</Button>
                                                        </ButtonGroup>
                                                    }
                                                </>
                                            </div>
                                        ))
                                    )
                                    :
                                    <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                                        <p className='text-xl font-semibold text-gray-300'>No Orders</p>
                                    </div>
                            }
                        </div>
                    }

                    {activeNav == "Inquiry" &&
                        <div>
                            <div className='flex flex-col items-center w-full my-2 p-3 border-dashed  border-2 border-gray-300'>
                                <p className='text-xl font-semibold text-green-400'>Send Inquiry</p>
                                <form onSubmit={handelOnSubmit} className='w-full flex flex-col gap-5 mt-5'>
                                    <Input label='Subject' onChange={(e) => updateInquiry('subject', e.target.value)} required />
                                    <Textarea label='Message' onChange={(e) => updateInquiry('message', e.target.value)} required></Textarea>
                                    <ButtonGroup color='red'>
                                        <Button type='submit' className='w-full'>Submit</Button>
                                    </ButtonGroup>
                                </form>
                            </div>
                            {
                                inquiryList.map((item, index) => (
                                    <div key={index} className='flex flex-col items-center w-full my-2 p-3 border-dashed  border-2 border-gray-300'>
                                        <p className='text-xl font-semibold text-green-400'>Response</p>
                                        {
                                            item.status == 'PENDING' &&
                                            <div className='w-full flex flex-col gap-5 mt-5 justify-center items-center'>
                                                <p className='text-gray-500'>Response is pending</p>
                                                <img src="https://cdn.dribbble.com/users/3765/screenshots/3619014/play.gif" width={100} alt="" />
                                                {/* <SearchOffRounded className='text-gray-300' sx={{ fontSize: '100px' }} /> */}
                                            </div>
                                        }
                                        {
                                            item.status == 'RESPONDED' &&
                                            <div className='w-full flex flex-col gap-5 mt-5 '>
                                                <div>
                                                    <p>Subject : </p>
                                                    <p className='ms-10 text-gray-500'>{item.subject}</p>
                                                </div>
                                                <div>
                                                    <p>Message : </p>
                                                    <p className='ms-10 text-gray-500'>{item.message}</p>
                                                </div>
                                                <div>
                                                    <p>Response : </p>
                                                    <p className='ms-10 text-gray-500'>{item.response}</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }

                    <ConformDelete open={confirm} close={() => setConfirm(false)} conformFunction={() => {
                        resetToken()
                        toast.success('Successfully log out.')
                    }}
                    />
                </div>
            </Drawer>
        </div>
    )
}

export default MyAccount
