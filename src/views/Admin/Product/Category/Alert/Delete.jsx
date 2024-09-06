import { Button, Card, CardBody, CardFooter, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { StoreContext } from '../../../../../context/StoreContext'
import { deleteCategory } from '../../../../../services/admin/AdminService'

const Delete = ({ open, close, data }) => {
    const { setRerenderCategory } = React.useContext(StoreContext)


    const handelConform = () => {
        deleteCategory(data.id)
        setRerenderCategory()
        close()
    }

    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <DialogHeader>Are you shure deleted {data.categoryName}</DialogHeader>
            <DialogBody>
                {
                    data.categoryName && (
                        <Card className="shadow-white">
                            <CardBody className='flex gap-3 border-dashed border-2 p-2 rounded-md'>
                                <Typography className='flex flex-col justify-between'>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">{data.categoryName}</Typography>
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
                    onClick={() => handleOpen(null)}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button
                    variant="gradient"
                    color="red"
                    onClick={() => handelConform()}
                >
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default Delete
