import React, { useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography } from '@material-tailwind/react'
import { SendRounded } from '@mui/icons-material'
import { responseInquiry } from '../../../../services/admin/AdminService';
const Response = ({ open, close, data, rerender }) => {
    const [response, setResponse] = useState('');

    const handelSendResponse = (e) => {
        e.preventDefault();
        console.log(data)
        responseInquiry(data, response)
        rerender()
        close()
    }

    return (
        <Dialog size="sm" open={open} handler={close} className="p-4">
            <DialogHeader className='capitalize'>{data?.user?.fullName} </DialogHeader>
            <DialogBody>
                {
                    data && (
                        <>
                            <form onSubmit={handelSendResponse}>
                                <Input label='Response' onChange={(e) => setResponse(e.target.value)} required />
                                <ButtonGroup color='red' className='mt-5 '>
                                    <Button type='submit' className='w-full capitalize'> Respond &nbsp;&nbsp;<SendRounded /> </Button>
                                </ButtonGroup>
                            </form>
                        </>
                    )
                }
            </DialogBody>
        </Dialog>
    )
}

export default Response