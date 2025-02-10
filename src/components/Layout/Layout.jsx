import React from 'react'
import Navbar from '../basic/Navbar'
import Footer from '../basic/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Layout
