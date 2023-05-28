import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./card.module.scss"

type Props = {}

function Card({ }: Props) {
    return (
        <div className={styles.cardItem}>
            <Link to={""}>
                <div className={styles.part1}>
                    <span className={styles.status}>Yêu Thích</span>
                    <img src="https://picsum.photos/200/200" alt="#" />
                    <span className={styles.title}>Lập Trình Web</span>
                </div>
                <div className={styles.part2}>
                    <article>Lorem ipsum dolor sit amet consetr adipisg elit consetr consetr.</article>

                </div>
                <hr />
                <div className={styles.part3}>
                    <div className='row'>
                        <img src="./image/human.png" alt="#" width="45" height="45" />
                        <span>Elon Musk</span>
                    </div>
                    <div className={styles.price}>
                        <p>800.000
                            <sup>đ</sup>
                        </p>
                        <p>400.000
                            <sup>đ</sup>
                            <i className="fa fa-tag"></i>
                        </p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card