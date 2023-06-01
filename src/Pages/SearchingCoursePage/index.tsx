import { toHaveStyle } from "@testing-library/jest-dom/matchers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ItemBySearch from "../../Core/ItemBySearch";
import { fetchListCourseAction } from "../../Redux/Slices/searchSlice";
import { DispatchType, RootState } from "../../Redux/store";
import styles from "./searchingCoursePage.module.scss";

type Props = {};

function SearchingCoursePage({ }: Props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch: DispatchType = useDispatch();
    useEffect(() => {
        dispatch(fetchListCourseAction(searchParams.get("query") || ""));
    }, [searchParams.get("query")]);
    const { searchList } = useSelector((state: RootState) => state.searchReducer);
    console.log(searchList)
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.title}>
                    <h1>TÌM KIẾM</h1>
                    <p>KẾT QUẢ TÌM KIẾM KHÓA HỌC!!!</p>
                </div>

                {searchList.length ? (
                    searchList.map((item) => {
                        return (
                            <div key={item.maKhoaHoc}>
                                <ItemBySearch item={item} />
                            </div>
                        );
                    })
                ) : (
                    <h2
                        style={{
                            padding: "40px 150px",
                            height: "200px",
                            textAlign: "center",
                            fontStyle: "italic",
                            color: "#c82829"
                        }}>Không tìm thấy khoá học tương ứng</h2>
                )}
            </div>
        </div >
    );
}

export default SearchingCoursePage;
