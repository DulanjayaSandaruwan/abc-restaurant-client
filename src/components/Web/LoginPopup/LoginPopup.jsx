import React, { useContext, useRef, useState } from "react";
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Input, Checkbox, } from "@material-tailwind/react";
import toast from "react-hot-toast";
import axios from "axios";
import { StoreContext } from "../../../context/StoreContext";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/web/WebService.jsx";
import { registerUser } from "../../../services/Common/CommonService";

const notify = (message, type) => {
    type == 'success' && toast.success(message);
    type == 'error' && toast.error(message);
};

const errorHandle = (error) => {
    error.code == 'ERR_BAD_REQUEST' ? notify(error.response.data.message, 'error') : toast.error('Something wrong!\n Please try again later');
}

const passwordValidate = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password)
}


const LoginPopup = ({ open, close }) => {
    const navigate = useNavigate();
    const [currentState, setCurrentState] = useState('Sign In');
    const { refreshToken } = useContext(StoreContext)

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        passwordValidate(formData.password) ? null : {

        }

        if (!passwordValidate(formData.password)) {
            toast('Password must be at least 8 characters long, include uppercase and lowercase letters, at least one digit, and a special character.', 'success');
            return;
        }

        if (currentState == 'Sign Up') {
            registerUser(formData)
                .then(response => {
                    setCurrentState('Sign In');
                })
        } else if (currentState == 'Sign In') {
            loginUser({
                email: formData.email,
                password: formData.password,
            })
                .then(response => {
                    console.log(response.data)
                    const userToken = { token: response.data.id, authorization: response.headers.authorization, name: response.data.fullName, role: response.data.role };
                    localStorage.setItem('user', JSON.stringify(userToken));
                    refreshToken()
                    if (response.data.role === "STAFF" || response.data.role === "ADMIN") {
                        window.location.href = '/admin';
                    }
                    close();
                })
                .catch((error) => {
                    console.log(error)
                    errorHandle(error)
                })
        }
    };


    return (
        <>
            <Dialog
                size="xs"
                open={open}
                handler={close}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <form onSubmit={handleSubmit} autoComplete="on">
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="blue-gray" >
                                {currentState}
                            </Typography>
                            <Typography
                                className="mb-3 font-normal"
                                variant="paragraph"
                                color="gray"
                            >
                                {currentState == 'Sign In' ? 'Enter your email and password to Sign In.' : 'Fill this form to Sign Up'}
                            </Typography>

                            <Input
                                type="email"
                                name="email"
                                label="Email"
                                size="lg"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                required
                            />

                            {currentState == 'Sign Up' &&
                                <>
                                    <Input
                                        name="fullName"
                                        label="Full Name"
                                        size="lg"
                                        onChange={(e) => { handleChange(e) }}
                                        required
                                    />
                                    <Input
                                        name="phone"
                                        label="phone"
                                        size="lg"
                                        onChange={(e) => { handleChange(e) }}
                                        required
                                    />
                                    <Input
                                        name="address"
                                        label="Address"
                                        size="lg"
                                        onChange={(e) => { handleChange(e) }}
                                        required
                                    />
                                </>
                            }

                            <Input
                                name="password"
                                type="password"
                                label="Password"
                                size="lg"
                                onChange={(e) => { handleChange(e) }}
                                required
                            />

                            <div className="-ml-2.5 -mt-3">
                                <Checkbox label="Remember Me" />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button type="submit" className="bg-red-800" fullWidth>
                                {currentState}
                            </Button>
                            {currentState == 'Sign In'
                                ?
                                <Typography variant="small" className="mt-4 flex justify-center">
                                    Don&apos;t have an account?
                                    <Typography
                                        as="a"
                                        href="#sighup"
                                        variant="small"
                                        color="blue-gray"
                                        className="ml-1 font-bold"
                                        onClick={() => setCurrentState('Sign Up')}
                                    >
                                        Sign up
                                    </Typography>
                                </Typography>
                                :
                                <Typography variant="small" className="mt-4 flex justify-center">
                                    Do you have an account?
                                    <Typography
                                        as="a"
                                        href="#sighup"
                                        variant="small"
                                        color="blue-gray"
                                        className="ml-1 font-bold"
                                        onClick={() => setCurrentState('Sign In')}
                                    >
                                        Sign In
                                    </Typography>
                                </Typography>
                            }
                        </CardFooter>
                    </form>
                </Card>
            </Dialog >
        </>
    );
}

export default LoginPopup;