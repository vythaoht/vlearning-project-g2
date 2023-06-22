import React, { useEffect } from 'react'
import styles from './programBE.module.scss'
import { useParams } from 'react-router-dom'
import { DispatchType, RootState } from '../../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../Core/Card';
import cls from 'classnames'
import { fetchCourseCategoriesByIdAction } from '../../../Redux/Slices/courseCategoriesByIdSlice';

type Props = {
  title: string
}

function ProgramBE({ title }: Props) {
  const { maDanhMuc } = useParams();

  const { courses } = useSelector(
    (state: RootState) => state.courseCategoriesByIdReducer
  );

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    if (maDanhMuc) {
      dispatch(fetchCourseCategoriesByIdAction(maDanhMuc));
    }
  }, [maDanhMuc]);

  return (
    <section className={styles.programBE}>
      <div className={styles.tagName}>
        <button className={styles.program__name}>
          <i className="fas fa-desktop"></i>
          <span className="ml-2">{title}</span>
        </button>
      </div>

      <div className={styles.programBE__item}>
        <div className={cls("row gutter", styles.items)}>
          {courses?.map((course) => {
            return (
              <div key={course.maKhoaHoc} className="col-6 col-4 col-3 colter">
                <Card course={course} isTag isShowInfoDetails />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default ProgramBE