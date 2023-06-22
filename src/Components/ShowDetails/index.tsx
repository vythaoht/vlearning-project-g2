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
    } = course;

    return (
        <div className={styles.ShowDetails}>
            <div className={styles.card__header}>
                <img src='/image/avatar-showDetails.png' alt='avatarDetails' />
                <span className={cls('ml-1', styles.card__title)}>Elun Musk Ricard</span>
            </div>
            <h6>{tenKhoaHoc}</h6>

            <div className={styles.cardContent}>
                <p>
                    Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
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