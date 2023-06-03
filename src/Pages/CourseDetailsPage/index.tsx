import React from 'react'
import styles from './courseDetailsPage.module.scss'

type Props = {}

function CourseDetailsPage({ }: Props) {
    return (
        <section className={styles.courserDetails}>
            <div className={styles.courserDetails__title}>
                <h3>THÔNG TIN KHÓA HỌC</h3>
                <p>TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</p>
            </div>

            <div className={styles.courserDetails__content}>
                <div className='row gutter'>
                    
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsPage