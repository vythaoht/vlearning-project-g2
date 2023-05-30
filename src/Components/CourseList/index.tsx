import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Core/Card";
import { courseCategoriesRequest } from "../../Redux/Services/showCourseAPI";
import { fetchCourseCategoriesAction } from "../../Redux/Slices/courseCategoriesSlice";
import { DispatchType, RootState } from "../../Redux/store";
import styles from "./courseList.module.scss";

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
            {categories.map((item) => {
                return (
                    <div key={item.maDanhMuc}>
                        <p>
                            <Link to="#">{item.tenDanhMuc}</Link>
                        </p>
                        <div className="row gutter">
                            {item.khoaHocLienQuan.map((course) => {
                                return (
                                    <div key={course.maKhoaHoc} className="col-3 colter">
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
