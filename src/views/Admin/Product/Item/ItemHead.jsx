import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'
import { AddRounded } from '@mui/icons-material'
import React from 'react'

const ItemHead = ({ setOpen }) => {
    return (
        <div className="flex gap-5 justify-center">
            <Card className="mt-6">
                {/* <CardBody className="flex  justify-center items-center ">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGiiQ9Bu543SlWXKdrcZyXdxGyyHOUeCmtwd4DFuc06U7z2WtM" width={100} alt="" />
                    <div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Total Item - <span className="text-green-400">70</span>
                        </Typography>
                        <Typography>
                            Because it&apos;s about  motivating <br /> the doers.
                        </Typography>
                    </div>
                </CardBody> */}
                <CardFooter className="">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2 bg-gray-400" onClick={() => setOpen(true)}>
                            Add new item
                            <AddRounded />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemHead
