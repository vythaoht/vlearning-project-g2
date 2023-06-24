import React from "react";
import { useNavigate } from "react-router-dom";
import { Course } from "../../Redux/Slices/courseCategoriesSlice";
import Button from "../Button";
import styles from "./itemBySearch.module.scss";

type Props = {
    item: Course;
};

function ItemBySearch({ item }: Props) {
    const { tenKhoaHoc, hinhAnh: img, moTa, nguoiTao, maKhoaHoc } = item;

    //giới hạn số kí tự trong đoạn văn bản
    const limitText = (content: string, limit: number) => {
        if (content.length <= limit) {
            return content;
        }
        return content.slice(0, limit) + "...";
    };

    const content = moTa;

    const navigate = useNavigate();
    const handleNavigateToDetailsCourse = (courseId: string) => {
        navigate(`/details/${courseId}`)
    }

    return (
        <div>
            <div className={styles.showResult}>
                <div className={styles.info}>
                    <img className={styles.poster}
                        src={img} alt={tenKhoaHoc}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "./image/default.jpeg"
                        }}
                        loading="lazy"

                    />
                    <div className={styles.content}>
                        <h3>{tenKhoaHoc}</h3>
                        <p>{limitText(content, 50)}</p>
                        <div className={styles.icon}>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className={styles.author}>
                            <img src="./image/pic6.jpg" alt="#"
                                loading="lazy"
                            />
                            <span>{nguoiTao.taiKhoan}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.details}>
                    <Button title="XEM CHI TIẾT" onClick={() => handleNavigateToDetailsCourse(maKhoaHoc)} />
                </div>
            </div>
        </div>
    );
}

export default ItemBySearch;
