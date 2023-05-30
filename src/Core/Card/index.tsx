import React from 'react'
import { Link } from 'react-router-dom'
import { Course } from '../../Redux/Slices/courseCategoriesSlice'
import styles from "./card.module.scss"
import cls from "classnames"

type Props = {
    course: Course
}

function Card({ course }: Props) {
    const {
        hinhAnh: img,
        tenKhoaHoc,
        moTa,
        nguoiTao,
        luotXem
    } = course;
    return (
        <div className={styles.cardItem}>
            <Link to={""}>
                <div className={styles.part1}>
                    <span className={styles.status}>Yêu Thích</span>
                    <img src={img} alt={tenKhoaHoc}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "./image/default.jpeg"
                        }}
                    />
                    <span className={styles.title}>{tenKhoaHoc}</span>
                </div>
                <div className={styles.part2}>
                    <article>{moTa}</article>
                </div>
                <hr />
                <div className={styles.part3}>
                    <div className={cls(styles.author)}>
                        <img src="./image/human.png" alt="#" width="45" height="45" />
                        <span>{nguoiTao.taiKhoan}</span>
                    </div>
                    <div className={styles.viewer}>
                        <p>Lượt truy cập: {luotXem}</p>
                        <i className="fa fa-eye"></i>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card