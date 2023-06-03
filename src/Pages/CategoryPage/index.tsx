import React from 'react'
import styles from './categoryPage.module.scss'
import ProgramBE from './ProgramBE'
import { useParams } from 'react-router-dom'
import WebDesign from './WebDesign'
import ProgramMobile from './ProgramMobile'
import ProgramFE from './ProgramFE'
import ProgramFT from './ProgramFT'
import ThinkingProgram from './ThinkingProgram'

type Props = {}

function CategoryPage({ }: Props) {
  const { maDanhMuc } = useParams();

  const backend = 'BackEnd';
  const design = 'Design';
  const mobile = 'DiDong';
  const frontend = 'FrontEnd';
  const fullstack = 'FullStack';
  const thinking = 'TuDuy';

  return (
    <section className={styles.category}>
      <div className={styles.category__title}>
        <h3>KHÓA HỌC THEO DANH MỤC</h3>
        <p>HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
      </div>

      {/* Sử dụng bậc tam thức (conditional renderings) để chuyển trang */}
      {maDanhMuc === backend ? <ProgramBE /> :
        maDanhMuc === design ? <WebDesign /> :
          maDanhMuc === mobile ? <ProgramMobile /> :
            maDanhMuc === frontend ? <ProgramFE /> :
              maDanhMuc === fullstack ? <ProgramFT /> :
                maDanhMuc === thinking ? <ThinkingProgram /> :
                  null}
    </section>
  )
}

export default CategoryPage