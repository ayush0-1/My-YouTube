import React from 'react'
import SideBar from './SideBar'
import MainCont from './MainCont'
import { Outlet } from 'react-router-dom'
import  Head from "./Haed"

const Body = () => {
  return (
    <div className='flex flex-col'>
      <Head/>
      <div className='flex'>
      <SideBar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default Body