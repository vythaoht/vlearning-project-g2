import React from 'react'
import Button from '../../Core/Button'
import styles from "./carousel.module.scss"
import cls from "classnames"

type Props = {}

function Carousel({ }: Props) {
    return (
        <div className="row">
            <div className={cls("col-6", styles.left)}>
                <div>
                    <div className={styles.arrowCloud}>
                        <img
                            src="./image/arrowCloud.png"
                            alt="#"
                            width="145"
                            height="145" />
                    </div>
                    <h1>Chào mừng</h1>
                    <h1>Đến với môi trường</h1>
                    <h1> V
                        <span>  learning</span>
                    </h1>
                    <Button title="BẮT ĐẦU NÀO" margin="30px 0" />
                </div>

            </div>

            <div className={cls("col-6", styles.right)}>
                <div className={styles.deskMate}>
                    <img src="./image/deskmate.png" alt="#" />
                </div>
            </div>
        </div>
    )
}

export default Carousel