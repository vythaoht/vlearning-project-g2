import React from 'react'
import styles from './categoryPage.module.scss'
import ProgramBE from './ProgramBE'

type Props = {}

function CategoryPage({ }: Props) {
  return (
    <section className={styles.category}>
      <div className={styles.category__title}>
        <h3>KHÓA HỌC THEO DANH MỤC</h3>
        <p>HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
      </div>

      <ProgramBE />
    </section>
  )
}

export default CategoryPage