import React from 'react'
import styles from "./boxNumber.module.scss"
import cls from "classnames"
import CountUp from 'react-countup';

type Props = {}

function BoxNumber({ }: Props) {
    return (
        <div className={styles.container}>
            <div className='row'>
                <div className={cls("col-3", styles.item)}>
                    <img src="./image/friends.png"
                        alt="#"
                        width="80px"
                        height="80px" />
                    <h1>
                        <CountUp end={9000} />
                    </h1>
                    <p>Học viên</p>
                </div>
                <div className={cls("col-3", styles.item)}>
                    <img src="./image/timetable.png"
                        alt="#"
                        width="80px"
                        height="80px" />
                    <h1>
                        <CountUp end={1000} />

                    </h1>
                    <p>Khóa học</p>
                </div>
                <div className={cls("col-3", styles.item)}>
                    <img src="./image/hourglass.png"
                        alt="#"
                        width="80px"
                        height="80px" />
                    <h1>
                        <CountUp end={33200} />

                    </h1>
                    <p>Giờ học</p>
                </div>
                <div className={cls("col-3", styles.item)}>
                    <img src="./image/teacher.png"
                        alt="#"
                        width="80px"
                        height="80px" />
                    <h1>
                        <CountUp end={400} />
                    </h1>
                    <p>Giảng viên</p>
                </div>
            </div>
        </div>
    )
}

export default BoxNumber