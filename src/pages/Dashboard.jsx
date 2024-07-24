import React from 'react'
import { useSelector } from 'react-redux'
import {Outlet} from "react-router-dom"
import Sidebar from '../components/core/Dashboard/Sidebar'

const Dashboard = () => {
    console.log('dashboard')

    const {loading: authLoading} = useSelector( (state) => state.auth );
    const {loading: profileLoading} = useSelector( (state) => state.profile );
    //useSelector is a hook provided by React-Redux that allows you to access the Redux store's state and select specific pieces of it.

    if(profileLoading || authLoading) {
        return (
            <div className='mt-10'>
                Loading...
            </div>
        )
    }


  return (
    <div className='relative flex bg-richblack-400'>
        <Sidebar />
        <div className=' flex-1 overflow-auto bg-richblack-900'>
            <div className='py-10'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Dashboard
