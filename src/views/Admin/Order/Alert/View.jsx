import React from 'react'
import { Button, Card, CardBody, CardFooter, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
const View = ({ open, close, data }) => {
    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <DialogHeader className='capitalize'>{data?.user?.fullName} </DialogHeader>
            <DialogBody>
                {
                    data && (
                        <>
                            <p>Total Amount : {data.totalAmount}</p>
                            <p>Order Type : {data.orderType}</p>
                            <p>Delivery date : {new Date(data.orderDate).toLocaleString()}</p>
                            <Card className="shadow-white mt-5 flex gap-3">
                                <CardBody className='flex flex-col gap-3 border-dashed border-2 p-2 rounded-md'>
                                    <Typography className='font-bold'>Delivery Details</Typography>
                                    <Typography className='ms-4'>
                                        <p>User Name : {data?.user?.fullName}</p>
                                        <p>Email : {data?.user?.email}</p>
                                        <p>Address : {data?.user?.address}</p>
                                        <p>Phone : {data?.user?.phone}</p>
                                    </Typography>
                                </CardBody>
                                <CardBody className='flex flex-col gap-3 border-dashed border-2 p-2 rounded-md'>
                                    <Typography className='font-bold'>Order Items</Typography>
                                    <Typography className='flex flex-col items-center'>

                                        {
                                            data?.orderDetails?.map((orderItem, index) => (
                                                <Typography key={index} className='flex flex-col gap-3 border-dashed border-2 p-2 w-4/5'>
                                                    <Typography>
                                                        <p>Quantity : {orderItem?.quantity}</p>
                                                    </Typography>
                                                    <Typography className='flex gap-3'>
                                                        <img width={100} height={100} src={orderItem?.item?.imageUrl} className='rounded-md' />
                                                        <Typography className='flex flex-col justify-between'>
                                                            <Typography variant="h5" color="blue-gray" className="mb-2">{orderItem?.item?.itemName}</Typography>
                                                            {/* <Typography>{orderItem.item.description}</Typography> */}
                                                            <Typography>Rs : {orderItem?.item?.unitPrice}</Typography>
                                                        </Typography>
                                                    </Typography>
                                                </Typography>
                                            ))
                                        }

                                    </Typography>
                                </CardBody>
                            </Card>
                        </>
                    )
                }
            </DialogBody>
        </Dialog>
    )
}

export default View
