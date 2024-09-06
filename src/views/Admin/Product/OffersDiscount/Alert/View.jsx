import React from 'react'
import { Button, Card, CardBody, CardFooter, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
const View = ({ open, close, data }) => {
    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <DialogBody>
                {
                    data.offerName && (
                        <Card className="shadow-white">
                            <CardBody className='flex flex-col gap-3 border-dashed border-2 p-2 rounded-md'>
                                <Typography className='flex gap-3'>
                                    <img width={125} height={125} src={data.imageUrl} className='rounded-md' />
                                    <Typography className='flex flex-col justify-between'>
                                        <Typography variant="h5" color="blue-gray" className="mb-2">{data.offerName}</Typography>
                                        <Typography>{data.description}</Typography>
                                        <Typography>Rs : {data.offerUnitPrice}</Typography>
                                    </Typography>

                                </Typography>
                                <Typography className='flex flex-col items-center'>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">Offered items</Typography>

                                    {
                                        data.items.map((item, index) => (
                                            <Typography key={index} className='flex gap-3 border-dashed border-2 p-2 w-4/5'>
                                                <img width={100} height={100} src={data.imageUrl} className='rounded-md' />
                                                <Typography className='flex flex-col justify-between'>
                                                    <Typography variant="h5" color="blue-gray" className="mb-2">{item.itemName}</Typography>
                                                    {/* <Typography>{item.description}</Typography> */}
                                                    <Typography>Rs : {item.unitPrice}</Typography>
                                                </Typography>
                                            </Typography>
                                        ))
                                    }

                                </Typography>
                            </CardBody>
                        </Card>
                    )
                }
            </DialogBody>
        </Dialog>
    )
}

export default View
