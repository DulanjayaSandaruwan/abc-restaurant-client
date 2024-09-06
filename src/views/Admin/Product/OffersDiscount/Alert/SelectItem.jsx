import React from 'react'
import { Button, Card, CardBody, CardFooter, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'

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


const SelectItem = (open, close) => {
    return (
        <>
            <Dialog size="sm" open={open} handler={close} className="p-4">
                <DialogHeader>Select the offered items</DialogHeader>
                <DialogBody>

                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="gray"
                        // onClick={() => handleOpen(null)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="red"
                    // onClick={() => handleOpen(null)}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default SelectItem
