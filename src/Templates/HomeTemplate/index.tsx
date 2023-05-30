import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

type Props = {}

function HomeTemplate({ }: Props) {
  return (
    <div>
      <Header />
      {/* padding: "0 50px" */}
      <div style={{ marginTop: "103.5px" }}> 
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default HomeTemplate