import React from 'react'
import { Dialog, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { registerUser } from '../../../../../services/Common/CommonService';
import { errorHandle, notify } from '../../../../../utils/Common/Notification';

const AddStaffAlert = ({ open, close, rerender }) => {

    const [addItemData, setAddItemData] = useState({
        fullName: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        role: 'STAFF',
    })

    const updateSetAddItemData = (name, value) => {
        setAddItemData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        try {
            registerUser(addItemData)
                .then(response => {
                    console.log(response)
                    notify('Successfully add the staff', 'success')
                    rerender()
                    close()
                })
                .catch((error) => {
                    notify('error', 'error')
                    console.log(error)
                    errorHandle(error)
                })
        } catch (error) {
            console.log(error)
            errorHandle(error)
        }
    }

    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <div className=" w-full p-10 bg-white rounded-xl z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Register staff</h2>
                </div>
                <form className="mt-8 space-y-3" onSubmit={(e) => handelSubmit(e)}>
                    <div className='md:flex gap-3'>
                        <div className="grid grid-cols-1 space-y-2 w-full md:w-1/2">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">Full Name</label>
                            <Input name='fullName' label='Full Name' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
                        </div>

                        <div className="grid grid-cols-1 space-y-2 w-full md:w-1/2">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">Email</label>
                            <Input name='email' type='email' label='Email' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
                        </div>
                    </div>
                    <div className='md:flex gap-3'>
                        <div className="grid grid-cols-1 space-y-2 w-full md:w-1/2">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">Address</label>
                            <Input name='address' label='Address' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
                        </div>

                        <div className="grid grid-cols-1 space-y-2 w-full md:w-1/2">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">Phone Number</label>
                            <Input name='phone' type='tel' label='Phone number' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
                        </div>
                    </div>
                    <div className="">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Password</label>
                        <Input name='password' type='password' label='Password' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
                    </div>
                    <div>
                        <button type="submit"
                            className="my-5 w-full flex justify-center bg-red-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default AddStaffAlert
