import React from 'react'
import NaviBar from '../components/Navibar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
    return (
        <div>
            <NaviBar />
            <ToastContainer />
            <Outlet />
        </div>
    )
}

export default MainLayout
