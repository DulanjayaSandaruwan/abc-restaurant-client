import React, { useContext, useEffect } from 'react'
import { Dialog, Input, Option, Select, Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import { createCategory, updateCategory } from '../../../../../services/admin/AdminService';
import { StoreContext } from '../../../../../context/StoreContext';


const Add = ({ open, close, data }) => {
    console.log(data)

    const { setRerenderCategory } = useContext(StoreContext)

    const [addItemData, setAddItemData] = useState({
        categoryName: data ? data.categoryName : '',
    })

    const updateSetAddItemData = (name, value) => {
        setAddItemData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (data) {
            updateCategory(data.id, addItemData.categoryName)
                .then(response => {
                    setRerenderCategory()
                })
        } else {
            createCategory(addItemData)
                .then(response => {
                    setRerenderCategory()
                })
        }
        close()
    }

    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <div className=" w-full p-10 bg-white rounded-xl z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">{data ? 'Update category' : 'Add category'}</h2>
                </div>
                <form className="mt-8 space-y-3" onSubmit={handelSubmit}>

                    <div className="grid grid-cols-1 space-y-2 w-full">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Category Name</label>
                        <Input value={addItemData.categoryName} name='categoryName' label='Category name' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
                    </div>
                    <div>
                        <button type="submit" className="my-5 w-full flex justify-center bg-red-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
                        >
                            {data ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default Add
