import React from "react";
import styles from "./startUp.module.scss";
import cls from "classnames"
import Button from "../../Core/Button";

type Props = {};

function StartUp({ }: Props) {
    return (
        <div className={styles.container}>
            <div className={cls("row", styles.startUp)}>
                <div className={cls("col-6", styles.left)}>
                    <img src="./image/startup.png"
                        alt="#"
                        width="400" />
                </div>
                <div className={cls("col-6", styles.right)}>
                    <h1>SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP</h1>
                    <h3>Nơi gặp gỡ của những tư tưởng lớn</h3>
                    <p>Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)</p>
                    <Button title="THAM GIA" bgColor="#41b294" />
                    <Button title="TÌM HIỂU THÊM" margin="0 15px" />
                </div>
            </div>
        </div>
    );
}

export default StartUp;
