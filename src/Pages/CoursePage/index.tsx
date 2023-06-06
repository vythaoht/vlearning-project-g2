
import React, { useEffect, useState } from 'react'
import styles from './coursePage.module.scss'
import cls from 'classnames'
import Card from '../../Core/Card'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../Redux/store'
import { fetchCourseListAction } from '../../Redux/Slices/courseListSlice'
import Pagination from '../../Core/Pagination/Pagination'

type Props = {}

function CoursePage({ }: Props) {
    const dispatch: DispatchType = useDispatch();
    useEffect(() => {
        dispatch(fetchCourseListAction());
    }, []);

    const { courseList } = useSelector(
        (state: RootState) => state.courseListReducer
    );

    // xử lý phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = courseList.slice(firstPostIndex, lastPostIndex);

    return (
        <section className={styles.course}>
            <div className={styles.course__title}>
                <h3>Khóa học</h3>
                <p>Bắt đầu hành trình nào!!!</p>
            </div>

            <div className={styles.course__contentList}>
                <div className={styles.row}>
                    <div className={cls('col-md-2 col-sm-4', styles.course__item)}>
                        <div className={cls(styles.course__box, styles.backgound1)}>
                            <h6>Chương trình học</h6>
                            <i className="fas fa-laptop" />
                            <p>300</p>
                        </div>
                    </div>
                    <div className={cls('col-md-2 col-sm-4', styles.course__item)}>
                        <div className={cls(styles.course__box, styles.backgound2)}>
                            <h6>Nhà sáng tạo</h6>
                            <i className="fas fa-camera" />
                            <p>10000</p>
                        </div>
                    </div>
                    <div className={cls('col-md-2 col-sm-4', styles.course__item)}>
                        <div className={cls(styles.course__box, styles.backgound3)}>
                            <h6>Nhà thiết kế</h6>
                            <i className="fas fa-briefcase" />
                            <p>400</p>
                        </div>
                    </div>
                    <div className={cls('col-md-2 col-sm-4', styles.course__item)}>
                        <div className={cls(styles.course__box, styles.backgound4)}>
                            <h6>Bài giảng</h6>
                            <i className="fas fa-book" />
                            <p>3000</p>
                        </div>
                    </div>
                    <div className={cls('col-md-2 col-sm-4', styles.course__item)}>
                        <div className={cls(styles.course__box, styles.backgound5)}>
                            <h6>Video</h6>
                            <i className="fas fa-play-circle" />
                            <p>40000</p>
                        </div>
                    </div>
                    <div className={cls('col-md-2 col-sm-4', styles.course__item)}>
                        <div className={cls(styles.course__box, styles.backgound6)}>
                            <h6>Lĩnh vực</h6>
                            <i className="fas fa-dice-d20" />
                            <p>200</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.course__boxList}>
                <h6>
                    <i className="fas fa-bookmark"></i>
                    Danh sách khóa học
                </h6>

                <div className={styles.course__itemList}>
                    <div className={cls("row gutter")}>
                        {currentPost?.map((course) => {
                            return (
                                <div key={course.maKhoaHoc} className="col-6 col-3 col-4 colter">
                                    <Card course={course} />
                                </div>
                            );
                        })}
                    </div>
                    <Pagination
                        totalPosts={courseList.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>

            </div>
        </section >
    )
}

export default CoursePage
