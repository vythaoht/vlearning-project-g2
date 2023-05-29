import React from 'react'
import styles from "./posterInfo.module.scss"

type Props = {}

function PosterInfo({ }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h2>V LEARNING HỌC LÀ VUI</h2>
                    <h1>Cùng nhau khám phá nhưng điều mới mẻ</h1>
                    <h3>Học đi đôi với hành</h3>
                </div>
            </div>
        </div>
    )
}

export default PosterInfo