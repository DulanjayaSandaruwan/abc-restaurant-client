import { Button, Card, CardBody, CardFooter, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { deleteItem } from '../../../../../services/admin/AdminService'

const DeleteItem = ({ open, close, data, rerender }) => {

    const handelConform = () => {
        deleteItem(data.id)
        rerender()
        close()
    }

    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <DialogHeader>Are you shure deleted {data.itemName}</DialogHeader>
            <DialogBody>
                {
                    data.itemName && (
                        <Card className="shadow-white">
                            <CardBody className='flex gap-3 border-dashed border-2 p-2 rounded-md'>
                                <img width={125} height={125} src={data.imageUrl} className='rounded-md' />
                                <Typography className='flex flex-col justify-between'>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">{data.itemName}</Typography>
                                    <Typography>{data.description}</Typography>
                                    <Typography>Rs : {data.unitPrice}</Typography>
                                </Typography>
                            </CardBody>
                        </Card>
                    )
                }
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="gray"
                    onClick={close}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button
                    variant="gradient"
                    color="red"
                    onClick={handelConform}
                >
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default DeleteItem
