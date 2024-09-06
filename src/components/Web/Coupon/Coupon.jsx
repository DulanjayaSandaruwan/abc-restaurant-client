import { Box, Modal, TextField } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.375rem',
    width: '400px',
    bgcolor: 'background.paper',
};

const Coupon = ({ Open, Close }) => {
    return (
        <div>
            <Modal
                open={Open}
                onClose={Close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='p-10 flex flex-col gap-3'>
                        <p>Enter your coupon code here.</p>
                        <TextField id="outlined-basic" label="coupon code" variant="outlined" />
                        <button className='bg-red-800 rounded text-white hover:bg-red-700 p-3' onClick={Close}>Place Order</button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Coupon
