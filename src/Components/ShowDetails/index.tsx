import React from 'react'
import styles from './showDetails.module.scss'
import cls from 'classnames'
import { useNavigate } from 'react-router-dom'
import { Course } from '../../Redux/Slices/courseCategoriesSlice'

type Props = {
    course: Course;
}

function ShowDetails({ course }: Props) {
    const navigate = useNavigate();
    const {
        maKhoaHoc,
        tenKhoaHoc,
        moTa
    } = course;

    return (
        <div className={styles.ShowDetails}>
            <div className={styles.card__header}>
                <img src='/image/avatar-showDetails.png' alt='avatarDetails' />
                <span className={cls('ml-1', styles.card__title)}>Elun Musk Ricard</span>
            </div>
            <h6>{tenKhoaHoc}</h6>

            <div className={styles.cardContent}>
                <article>{moTa}</article>
            </div>

            <div className={styles.card__footer}>
                <button
                    className={styles.ShowDetails__button}
                    onClick={() => {
                        navigate(`/details/${maKhoaHoc}`)
                    }}
                >
                    Xem chi tiết
                </button>
            </div>
        </div>

    )
}

export default ShowDetails