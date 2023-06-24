import React from 'react'
import styles from "./creators.module.scss"

type Props = {}

function Creators({ }: Props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CÁC NHÀ ĐỒNG SÁNG TẠO</h1>

            <div className={styles.gridList}>
                <div className={styles.gridItem}>
                    <img src="./image/pic1.jpg" alt="#"
                        width="300px"
                        loading="lazy"
                    />
                    <h4>NGUYỄN NHẬT</h4>
                    <p>CEO TECHVIET PRODUCTION</p>
                </div>
                <div className={styles.gridItem}>
                    <img src="./image/pic2.jpg" alt="#"
                        width="300px"
                        loading="lazy"
                    />
                    <h4>NGUYỄN NHẬT NAM</h4>
                    <p>CEO TECHVIET PRODUCTION</p>
                </div>
                <div className={styles.gridItem}>
                    <img src="./image/pic3.jpg" alt="#"
                        width="300px"
                        loading="lazy"
                    />
                    <h4>NGUYỄN NAM</h4>
                    <p>CEO TECHVIET PRODUCTION</p>
                </div>
                <div className={styles.gridItem}>
                    <img src="./image/pic4.jpg" alt="#"
                        width="300px"
                        loading="lazy"
                    />
                    <h4>JHONNY ĐẶNG</h4>
                    <p>CEO TECHVIET PRODUCTION</p>
                </div>
                <div className={styles.gridItem}>
                    <img src="./image/pic5.jpg" alt="#"
                        width="300px"
                        loading="lazy"
                    />
                    <h4>NGÔ HENRY</h4>
                    <p>CEO TECHVIET PRODUCTION</p>
                </div>
                <div className={styles.gridItem}>
                    <img src="./image/pic6.jpg" alt="#"
                        width="300px"
                        loading="lazy"
                    />
                    <h4>VƯƠNG PHẠM VN</h4>
                    <p>CEO TECHVIET PRODUCTION</p>
                </div>
                <div className={styles.gridItem}>
                    <img src="./image/pic7.jpg" alt="#"
                        width="300px"
                        loading="lazy"
                    />
                    <h4>ROBER IMACU</h4>
                    <p>CEO TECHVIET PRODUCTION</p>
                </div>
                <div className={styles.gridItem}>
                    <img src="./image/pic8.jpg" alt="#"
                        width="300px"
                        loading="lazy"
                    />
                    <h4>KHOA PUG</h4>
                    <p>CEO TECHVIET PRODUCTION</p>
                </div>
            </div>
        </div>
    )
}

export default Creators