import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Course } from '../../Redux/Slices/courseCategoriesSlice'
import styles from "./card.module.scss"
import cls from "classnames"
import ShowDetails from '../../Components/ShowDetails'

type Props = {
    course: Course,
    isTag?: boolean,
    isShowInfoDetails?: boolean,
}

function Card({ course, isTag, isShowInfoDetails }: Props) {
    const {
        hinhAnh: img,
        tenKhoaHoc,
        moTa,
        nguoiTao,
        luotXem
    } = course;
    const [imgSrc, setImgSrc] = useState(img)
    return (
        <div className={styles.cardItem}>
            <Link to={""}>
                <div className={styles.part1}>
                    {
                        isTag && <span className={styles.status}>Yêu Thích</span>
                    }

                    {
                        isShowInfoDetails && <div className={styles.showInfor}><ShowDetails course={course} /></div>
                    }

                    <img className={styles.part1__img} src={imgSrc} alt={tenKhoaHoc}
                        onError={() => {
                            setImgSrc("/image/default.jpeg")
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
                        <img src="/image/human.png" alt="#" width="45" height="45" />
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