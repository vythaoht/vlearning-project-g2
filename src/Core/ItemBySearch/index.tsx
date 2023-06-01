import React from "react";
import { Course } from "../../Redux/Slices/courseCategoriesSlice";
import Button from "../Button";
import styles from "./itemBySearch.module.scss";

type Props = {
    item: Course;
};

function ItemBySearch({ item }: Props) {
    const { tenKhoaHoc, hinhAnh: img, moTa, nguoiTao } = item;

    //giới hạn số kí tự trong đoạn văn bản
    const limitText = (content: string, limit: number) => {
        if (content.length <= limit) {
            return content;
        }
        return content.slice(0, limit) + "...";
    };

    const content = moTa;

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
                            <img src="./image/pic6.jpg" alt="#" />
                            <span>{nguoiTao.taiKhoan}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.details}>
                    <Button title="XEM CHI TIẾT" />
                </div>
            </div>
        </div>
    );
}

export default ItemBySearch;
