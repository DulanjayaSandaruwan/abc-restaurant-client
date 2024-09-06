import { Button, Card, CardBody, CardFooter, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { updateOrderStatus } from '../../../../services/Common/CommonService'

const Conform = ({ open, close, data, type, rerender }) => {

    const handelConform = () => {
        updateOrderStatus(data.id, type)
        rerender()
        close()
    }
    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <DialogHeader className='capitalize'>{type} </DialogHeader>
            <DialogBody>
                <p>Are you sure you want to {type} ?</p>
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

export default Conform
