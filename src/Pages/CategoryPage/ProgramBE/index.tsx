import React, { useEffect } from 'react'
import styles from './programBE.module.scss'
import { useParams } from 'react-router-dom'
import { DispatchType, RootState } from '../../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../Core/Card';
import cls from 'classnames'
import { Course, fetchCourseCategoriesByIdAction } from '../../../Redux/Slices/courseCategoriesByIdSlice';

type Props = {}

function ProgramBE({ }: Props) {
  const { maDanhMuc } = useParams();

  const { categories } = useSelector(
    (state: RootState) => state.courseCategoriesByIdReducer
  );

  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseCategoriesByIdAction(maDanhMuc || ""));
  }, [categories]);

  return (
    <section className={styles.programBE}>
      <div className={styles.tagName}>
        <button className={styles.program__name}>
          <i className="fas fa-desktop"></i>
          <span className="ml-2">Lập trình Backend</span>
        </button>
      </div>

      <div className={styles.programBE__item}>
        {categories?.map((course: Course) => {
          return (
            <div key={course.maKhoaHoc}>
              <div className={cls("row gutter", styles.items)}>
                <div className="col-6 col-4 col-3 colter">
                  <Card course={course} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default ProgramBE