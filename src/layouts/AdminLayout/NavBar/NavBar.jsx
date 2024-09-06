import { AccountCircle, HomeOutlined, LogoutOutlined, LogoutRounded, MenuRounded, Notifications, Settings } from '@mui/icons-material'
import React, { useContext } from 'react'
import { LayoutContext } from "../../../context/LayoutContext";
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { StoreContext } from '../../../context/StoreContext';
import { notify } from '../../../utils/Common/Notification';


const NavBar = () => {

    const { resetToken } = useContext(StoreContext)
    const logout = () => {
        resetToken()
        notify('Successfully log out.', 'success')
    }

    const { setOpen, open } = useContext(LayoutContext)

    return (
        <nav className="flex text-center justify-between py-2 px-3 bg-white shadow w-full rounded-s">
            <div className="mb-2 sm:mb-0 inner text-gray-500 ">

                <span className='md:hidden' onClick={() => setOpen(true)}><MenuRounded /></span>
                <span className='hidden md:inline-block me-2' onClick={() => setOpen(!open)}><LogoutOutlined sx={{ fontSize: 17 }} className={`duration-500 ${open ? 'scale-x-[-1]' : 'scale-x-[1]'}`} /></span>
                <span className="text-xs text-grey-dark hidden md:inline "><HomeOutlined sx={{ fontSize: 20 }} /> / Dashboard</span>

            </div>

            <div className="flex gap-3 text-gray-500">
                <span><Settings sx={{ fontSize: 17 }} /></span>
                <span><Notifications sx={{ fontSize: 17 }} /></span>
                <Menu>
                    <MenuHandler>
                        <span><AccountCircle sx={{ fontSize: 30 }} /></span>
                    </MenuHandler>
                    <MenuList className='text-xs'>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Setting</MenuItem>
                        <MenuItem onClick={logout}><span>LogOut</span> <LogoutRounded sx={{ fontSize: '15px' }} /></MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </nav>
    )
}

export default NavBar
