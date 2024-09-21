import React from 'react'
import NaviBar from '../components/Navibar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = ({ searchText, handleSearchText }) => {
    return (
        <div>
            <NaviBar searchText={searchText} handleSearchText={handleSearchText} />
            <ToastContainer />
            <Outlet />
        </div>
    )
}

export default MainLayout
