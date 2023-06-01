import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import styles from "./homeTemplate.module.scss"

type Props = {}

function HomeTemplate({ }: Props) {
  return (
    <div>
      <Header />
      <div className={styles.outletNormal}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default HomeTemplate