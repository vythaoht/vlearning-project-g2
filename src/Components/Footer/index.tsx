import React, { useEffect, useState } from 'react'
import styles from "./footer.module.scss"
import cls from "classnames"
import { Link } from 'react-router-dom'
import Button from '../../Core/Button'

type Props = {}

function Footer({ }: Props) {
  const [toggleBackToTop, setToggleBackToTop] = useState<boolean>(false)

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 1000 && !toggleBackToTop) {
        setToggleBackToTop(true)
      } else {
        setToggleBackToTop(false)
      }

    })
  }, [])

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={cls("row", styles.cardTitle)}>
          <div className={cls("col-4", styles.left)}>
            <Link to="#" className={styles.name}>
              <span className={styles.titleOne}>V</span>
              <span className={styles.titleTwo}> learning</span>
            </Link>
            <ul className={styles.listStyleIcon}>
              <li className={styles.icon}>
                <i className="fa fa-phone"></i>
                <span>1800-123-4567</span>
              </li>
              <li className={styles.icon}>
                <i className="fa fa-envelope-open-text"></i>
                <span>bonniesoft@gmail.com</span>
              </li>
              <li className={styles.icon}>
                <i className="fa fa-map-marker-alt"></i>
                <span>Thành phố Hồ Chí Minh</span>
              </li>
            </ul>
          </div>

          <div className={cls("col-4", styles.middle)}>
            <div>
              <h2>Liên kết</h2>
              <ul>
                <li className={styles.icon}>
                  <i className="fa fa-angle-right"></i>
                  <Link to="#">Trang chủ</Link>
                </li>
                <li className={styles.icon}>
                  <i className="fa fa-angle-right"></i>
                  <Link to="#">Dịch vụ</Link>
                </li>
                <li className={styles.icon}>
                  <i className="fa fa-angle-right"></i>
                  <Link to="#">Nhóm</Link>
                </li>
                <li className={styles.icon}>
                  <i className="fa fa-angle-right"></i>
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2>Khóa học</h2>
              <ul>
                <li className={styles.icon}>
                  <i className="fa fa-angle-right"></i>
                  <Link to="#">Front end</Link>
                </li>
                <li className={styles.icon}>
                  <i className="fa fa-angle-right"></i>
                  <Link to="#">Back end</Link>
                </li>
                <li className={styles.icon}>
                  <i className="fa fa-angle-right"></i>
                  <Link to="#">Full stack</Link>
                </li>
                <li className={styles.icon}>
                  <i className="fa fa-angle-right"></i>
                  <Link to="#">Node JS</Link>
                </li>
              </ul>

            </div>
          </div>

          <div className={cls("col-4", styles.right)}>
            <h2>Đăng kí tư vấn</h2>
            <form action="" className={styles.styleForm}>
              <input type="text" placeholder='Họ và tên' />
              <input type="email" placeholder='Email' />
              <input type="text" />
            </form>
            <Button title='ĐĂNG KÝ' />
          </div>
        </div>
        <hr />
        <div className={styles.contact}>
          <div><p>Copyright © 2021. All rights reserved.</p></div>
          <div className={styles.contactIcon}>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
          </div>

        </div>
      </div>

      {
        toggleBackToTop && <div className={styles.backToTop}>
          <Button title={<i className="fa fa-angle-up"></i>} onClick={handleScrollToTop} />
        </div>
      }

    </div>
  )
}

export default Footer