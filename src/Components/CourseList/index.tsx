import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Core/Card";
import { fetchCourseCategoriesAction } from "../../Redux/Slices/courseCategoriesSlice";
import { DispatchType, RootState } from "../../Redux/store";
import styles from "./courseList.module.scss";
import cls from "classnames"

type Props = {};

function CourseList({ }: Props) {
    const dispatch: DispatchType = useDispatch();
    useEffect(() => {
        dispatch(fetchCourseCategoriesAction());
    }, []);

    const { categories } = useSelector(
        (state: RootState) => state.courseCategoriesReducer
    );

    return (
        <div className={styles.container}>
            {categories.slice(0, 3).map((item) => {
                return (
                    <div key={item.maDanhMuc}>
                        <p>
                            <Link to="#">{item.tenDanhMuc}</Link>
                        </p>
                        <div className={cls("row gutter", styles.items)}>
                            {item.khoaHocLienQuan.map((course) => {
                                return (
                                    <div key={course.maKhoaHoc} className="col-6 col-4 col-3 colter">
                                        <Card course={course} isTag />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CourseList;
