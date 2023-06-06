import React from 'react'
import styles from './categoryPage.module.scss'
import ProgramBE from './ProgramBE'
import { useParams } from 'react-router-dom'

const mappingTitle = (category: string) => {
  return "Lập trình " + category;
}


type Props = {}
function CategoryPage({ }: Props) {
  const { maDanhMuc } = useParams();

  return (
    <section className={styles.category}>
      <div className={styles.category__title}>
        <h3>KHÓA HỌC THEO DANH MỤC</h3>
        <p>HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
      </div>

      <ProgramBE title={mappingTitle(maDanhMuc || '')} />
    </section>
  )
}

export default CategoryPage