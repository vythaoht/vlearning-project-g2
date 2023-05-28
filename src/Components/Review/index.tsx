import classNames from 'classnames'
import React from 'react'
import styles from "./review.module.scss"
import cls from "classnames"

type Props = {}

function Review({ }: Props) {
    return (
        <div className={cls('row', styles.container)}>
            <div className="col-6">
                <div className={styles.left}>
                    <div className={styles.symbol}>
                        <img src="./image/review.png"
                            alt="#"
                            width="200"
                            height="200" />
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className={styles.right}>
                    <i className="fa fa-quote-left"></i>
                    <span>Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm. Thực sự rất hay và hấp dẫn.</span>
                    <p>Nhi Dev</p>
                    <p>Học viên xuất sắc</p>
                </div>
            </div>

        </div>
    )
}

export default Review