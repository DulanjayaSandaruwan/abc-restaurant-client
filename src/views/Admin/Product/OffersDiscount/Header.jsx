import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'
import { AddRounded, ArrowRightAltRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import AddDiscount from './Alert/AddDiscount'
import AddOffers from './Alert/AddOffers'

const Header = () => {

    const [isAddDiscountOpen, setAddDiscountOpen] = useState(false)
    const [isAddOffersOpen, setAddOffersOpen] = useState(false)

    // const [isUpdateDiscountOpen, setUpdateDiscountOpen] = useState(false)
    // const [isUpdateOffersOpen, setUpdateOffersOpen] = useState(false)

    return (
        <div className="flex gap-5 justify-center">
            <AddDiscount open={isAddDiscountOpen} close={() => setAddDiscountOpen(false)} data={null} />
            <AddOffers open={isAddOffersOpen} close={() => setAddOffersOpen(false)} data={null} />
            <Card className="mt-6">
                <CardBody className="flex  justify-center items-center ">
                    <img src="https://img.pikbest.com/origin/10/06/13/385pIkbEsTe9Q.png!sw800" width={100} alt="" />
                    <div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Total Offers - <span className="text-green-400">10</span>
                        </Typography>
                        <Typography>
                            Because it&apos;s about  motivating <br /> the doers.
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2 bg-gray-400" onClick={() => setAddOffersOpen(true)}>
                            Add New Offers
                            <AddRounded />
                        </Button>
                    </a>
                </CardFooter>
            </Card>

            <Card className="mt-6">
                <CardBody className="flex  justify-center items-center ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iFNVw0fItP5jGydlom2vzNeFvcHvcqjVBw&s" width={100} alt="" />
                    <div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Total Discount - <span className="text-green-400">5</span>
                        </Typography>
                        <Typography>
                            Because it&apos;s about  motivating <br /> the doers.
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2 bg-gray-400" onClick={() => setAddDiscountOpen(true)}>
                            Add new Discount
                            <AddRounded />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Header
