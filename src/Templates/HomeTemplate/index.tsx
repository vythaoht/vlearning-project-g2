import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Loading from '../../Components/Loading'
import useLoading from '../../hooks/useLoading'
import styles from "./homeTemplate.module.scss"

type Props = {}

function HomeTemplate({ }: Props) {
  const showLoading = useLoading()
  return (
    <div>
      <Header />
      <div className={styles.outletNormal}>
        <Outlet />
      </div>
      <Footer />
      {
        showLoading && <Loading />
      }
    </div>
  )
}

export default HomeTemplate