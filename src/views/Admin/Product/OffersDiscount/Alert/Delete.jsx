import React from 'react'
import { Button, Card, CardBody, CardFooter, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import { deleteOffer } from '../../../../../services/admin/AdminService'

const Delete = ({ open, close, data, rerender }) => {

    const handelDeleteOffer = (id) => {
        deleteOffer(id).then(response => {
            rerender()
            close()
        })
    }

    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <DialogHeader>Are you shure deleted {data.offerName}</DialogHeader>
            <DialogBody>
                {
                    data.offerName && (
                        <Card className="shadow-white">
                            <CardBody className='flex gap-3 border-dashed border-2 p-2 rounded-md'>
                                <img width={125} height={125} src={data.imageUrl} className='rounded-md' />
                                <Typography className='flex flex-col justify-between'>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">{data.offerName}</Typography>
                                    <Typography>{data.description}</Typography>
                                    <Typography>Rs : {data.offerUnitPrice}</Typography>
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
                    onClick={() => handelDeleteOffer(data.id)}
                >
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default Delete
