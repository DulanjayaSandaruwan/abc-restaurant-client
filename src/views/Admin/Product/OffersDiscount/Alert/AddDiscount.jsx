import React, { useContext, useEffect } from 'react'
import { Accordion, AccordionBody, AccordionHeader, Avatar, Dialog, Input, MenuItem, Option, Select, Textarea, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { Hub, LocalOfferRounded, PunchClock } from '@mui/icons-material';
import SelectItem from './SelectItem';
import { Checkbox } from '@mui/material';
import { StoreContext } from '../../../../../context/StoreContext';

const itemList = [
    {
        id: "49bbc540-3eb0-479e-980d-d3a8711d6fa1",
        itemName: "awwwww",
        description: "This is a sample description for the item. It should be between 5 and 200 characters.",
        rate: 0,
        unitPrice: 200.0,
        discountPercentage: 5.0,
        imageUrl: "http://localhost:8080/api/uploads/720f0c10-0a64-405f-a7a4-c64b0e10752f_10.jpeg",
        status: "ACTIVE",
        category: {
            id: "d9894258-6ce3-4f59-91bd-eece4d9c4100",
            categoryName: "Hot",
            status: "ACTIVE"
        }
    }, {
        id: "49bbc540-3eb0-479e-980d-d3a8711d6fa2",
        itemName: "ffffff",
        description: "This is a sample description for the item. It should be between 5 and 200 characters.",
        rate: 0,
        unitPrice: 200.0,
        discountPercentage: 5.0,
        imageUrl: "http://localhost:8080/api/uploads/720f0c10-0a64-405f-a7a4-c64b0e10752f_10.jpeg",
        status: "ACTIVE",
        category: {
            id: "d9894258-6ce3-4f59-91bd-eece4d9c4100",
            categoryName: "Hot",
            status: "ACTIVE"
        }
    },
    {
        id: "49bbc540-3eb0-479e-980d-d3a8711d6fa3",
        itemName: "aaaaaa",
        description: "This is a sample description for the item. It should be between 5 and 200 characters.",
        rate: 0,
        unitPrice: 200.0,
        discountPercentage: 5.0,
        imageUrl: "http://localhost:8080/api/uploads/720f0c10-0a64-405f-a7a4-c64b0e10752f_10.jpeg",
        status: "ACTIVE",
        category: {
            id: "d9894258-6ce3-4f59-91bd-eece4d9c4100",
            categoryName: "Hot",
            status: "ACTIVE"
        }
    }
];

const AddDiscount = ({ open, close, data, type }) => {

    const { itemsList, setRerenderItems } = useContext(StoreContext)

    const [addItemData, setAddItemData] = useState({
        discountPercentage: '',
        startDate: data ? data.category : '',
        endDate: data ? data.category : '',
        items: []
    })

    const updateSetAddItemData = (name, value, isChecked = null) => {
        setAddItemData(prev => {
            if (name === 'items') {
                const updatedItems = isChecked
                    ? [...prev.items, { id: value }]
                    : prev.items.filter((item) => item.id !== value);


                return {
                    ...prev,
                    items: updatedItems,
                };
            } else {
                return {
                    ...prev,
                    [name]: value,
                };
            }
        });
    };

    const handelImageUpload = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            updateSetAddItemData('imageUrl', reader.result)
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    const [openAccording, setOpenAccording] = useState(false)

    return (
        <>
            <Dialog size="sm" open={open} handler={close} className="p-4">
                <div className=" w-full p-10 bg-white rounded-xl z-10 flex flex-col gap-1 max-h-[90vh] overflow-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">{data ? 'Update item' : 'Add Discount'}</h2>
                    </div>
                    <form className="mt-8 space-y-3" onSubmit={handelSubmit}>
                        <div className="grid grid-cols-1 space-y-2 w-full">
                            <label className="text-sm font-bold text-gray-500 tracking-wide text-left">Select Item</label>
                            <div>
                                <Accordion open={openAccording} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                                    <AccordionHeader
                                        onClick={() => setOpenAccording(pre => !pre)}
                                        className={`border-b-0 transition-colors text-sm text-gray-500 ${openAccording && "text-blue-500 hover:!text-blue-700"}`}
                                    >
                                        Select offered item
                                    </AccordionHeader>
                                    <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-3 max-h-96 overflow-auto">
                                        {
                                            itemsList.filter(item => item.status == 'ACTIVE')
                                                .map((item, index) => (
                                                    <label key={index} className="flex items-center gap-4 py-2 pl-2 pr-8 bg-gray-100 hover:bg-gray-200 rounded-md w-full" htmlFor={item.id}>
                                                        <Checkbox name='items' id={item.id} size="small" color="default" value={item.id} onClick={(e) => updateSetAddItemData('items', e.target.value, e.target.checked)} />
                                                        <Avatar
                                                            variant="circular"
                                                            alt="paypal"
                                                            src={item.imageUrl}
                                                        />
                                                        <div className="flex flex-col gap-1">
                                                            <Typography variant="small" color="gray" className="font-semibold">{item.itemName}</Typography>
                                                            <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
                                                                <LocalOfferRounded fontSize="small" />Rs : {item.unitPrice}.00
                                                            </Typography>
                                                        </div>
                                                    </label>
                                                ))
                                        }
                                    </AccordionBody>
                                </Accordion>
                            </div>

                        </div>
                        <div className='md:flex gap-3'>
                            <div className="grid grid-cols-1 space-y-2 w-full md:w-1/2">
                                <label className="text-sm font-bold text-gray-500 tracking-wide">Start date</label>
                                <Input type='date' value={addItemData.startDate} name='startDate' label='Start date' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
                            </div>

                            <div className="grid grid-cols-1 space-y-2 w-full md:w-1/2">
                                <label className="text-sm font-bold text-gray-500 tracking-wide">End date</label>
                                <Input type='date' value={addItemData.endDate} name='endDate' label='End date' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 space-y-2 w-full">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">Discount percentage</label>
                            <Input type='number' value={addItemData.discountPercentage} name='discountPercentage' label='Discount percentage' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} required />
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
        </>
    )
}

export default AddDiscount
