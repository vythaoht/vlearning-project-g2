import React from 'react'
import styles from "./oneOfListRating.module.scss"

type Props = {
    image: string,
    name: string,
    skill: string,
}

function OneOfListRating({ image, name, skill }: Props) {
    return (
        <div className={styles.ratingItem}>
            <img src={image}
                className={styles.circleImg}
                alt="#"
                width="75"
                height="75"
                loading="lazy"

            />
            <h4>{name}</h4>
            <p>{skill}</p>
            <div className={styles.icon}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span> 4.9</span>
            </div>
            <p>100 Đánh giá</p>
        </div>
    )
}

export default OneOfListRating