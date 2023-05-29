import React from 'react'
import styles from "./carouselBanner.module.scss"

type Props = {}

function CarouselBanner({ }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.timeEvent}>
                <div className={styles.countdown}>
                    <section className={styles.timing}>
                        <p style={{ color: "#ffbe0b" }}>00</p>
                        <p><small>NGÀY</small></p>
                    </section>
                    <section className={styles.timing}>
                        <p style={{ color: "#fb5607" }}>00</p>
                        <p><small>GIỜ</small></p>
                    </section>
                    <section className={styles.timing}>
                        <p style={{ color: "#ff006e" }}>00</p>
                        <p><small>PHÚT</small></p>
                    </section>
                    <section className={styles.timing}>
                        <p style={{ color: "#8338ec" }}>00</p>
                        <p><small>GIÂY</small></p>
                    </section>
                </div>
                <div className={styles.title}>
                    <h2>SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2023</h2>
                    <h4>20 - 25 THÁNG 12, 2023, VIỆT NAM</h4>
                </div>
            </div>
        </div>
    )
}

export default CarouselBanner