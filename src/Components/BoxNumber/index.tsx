import React from 'react'
import styles from "./boxNumber.module.scss"
import cls from "classnames"
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor"

type Props = {}

function BoxNumber({ }: Props) {
    return (
        <div className={styles.container}>
            <div className='row'>
                <div className={cls("col-3 col-6-md", styles.item)}>
                    <img src="./image/friends.png"
                        alt="#"
                        width="80px"
                        height="80px"
                        loading="lazy"
                    />
                    <h1>
                        <CountUp end={9000} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </h1>
                    <p>Học viên</p>
                </div>
                <div className={cls("col-3 col-6-md", styles.item)}>
                    <img src="./image/timetable.png"
                        alt="#"
                        width="80px"
                        height="80px"
                        loading="lazy"
                    />
                    <h1>
                        <CountUp end={1000} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>

                    </h1>
                    <p>Khóa học</p>
                </div>
                <div className={cls("col-3 col-6-md", styles.item)}>
                    <img src="./image/hourglass.png"
                        alt="#"
                        width="80px"
                        height="80px"
                        loading="lazy"
                    />
                    <h1>
                        <CountUp end={33200} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>

                    </h1>
                    <p>Giờ học</p>
                </div>
                <div className={cls("col-3 col-6-md", styles.item)}>
                    <img src="./image/teacher.png"
                        alt="#"
                        width="80px"
                        height="80px"
                        loading="lazy"
                    />
                    <h1>
                        <CountUp end={400} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </h1>
                    <p>Giảng viên</p>
                </div>
            </div>
        </div>
    )
}

export default BoxNumber