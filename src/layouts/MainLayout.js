import React from 'react'
import NaviBar from '../components/Navibar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
    return (
        <div>
            <NaviBar />
            <Outlet />
        </div>
    )
}

export default MainLayout
