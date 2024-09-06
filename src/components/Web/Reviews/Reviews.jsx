import { Box, Modal, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { StarBorder, StarBorderPurple500, StarRate } from '@mui/icons-material';
import { StoreContext } from '../../../context/StoreContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.375rem',
    width: '400px',
    bgcolor: 'background.paper',
};

const Reviews = () => {

    const { reviewsOpen, id, handleReviewsClose, food_list } = useContext(StoreContext);
    const [itemStar, setItemStar] = useState(0);

    return (
        <div>
            <Modal
                open={reviewsOpen}
                onClose={handleReviewsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='p-10 flex flex-col gap-3'>
                        {(() => {
                            const item = food_list.find(item => item._id === id);
                            return (
                                <div>
                                    <img src={item.image} />
                                    <h2 className='text-xl font-bold mt-1'>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <div className='text-yellow-500 flex justify-center w-full m-3'>
                                        {[...Array(5)].map((_, index) => (
                                            itemStar >= index + 1
                                                ? <span key={index} onClick={() => setItemStar(index + 1)}><StarRate /></span>
                                                : <span key={index} onClick={() => setItemStar(index + 1)}><StarBorder /></span>
                                        ))}
                                    </div>
                                    <button
                                        className='bg-red-800 rounded text-white hover:bg-red-700 w-full h-10 self-end'
                                        onClick={handleReviewsClose}>
                                        <span>Submit</span>
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Reviews
