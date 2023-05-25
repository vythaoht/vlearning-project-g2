import React from 'react'
import {Outlet} from "react-router-dom"
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

type Props = {}

function HomeTemplate({}: Props) {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeTemplate