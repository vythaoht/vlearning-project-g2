import React from "react";
import Button from "../../Core/Button";
import styles from "./carousel.module.scss";
import cls from "classnames";
import TextLooping from "../TextLooping";

type Props = {};

function Carousel({ }: Props) {
    return (
        <div className={cls("row", styles.container)}>
            <div className={cls("col-6", styles.left)}>
                <div>
                    <div className={styles.arrowCloud}>
                        <img
                            src="./image/arrowCloud.png"
                            alt="#"
                            width="145"
                            height="145"
                        />
                    </div>
                    <h1>Chào mừng</h1>
                    <h1>Đến với môi trường</h1>
                    <TextLooping title="V learning" ms={500} />
                    <Button title="BẮT ĐẦU NÀO" margin="30px 0" />
                </div>
            </div>

            <div className={cls("col-6", styles.right)}>
                <div className={styles.deskMate}>
                    <img
                        className={styles.rela}
                        src="./image/deskmate.png"
                        alt="#"
                        loading="lazy"
                    />
                    <img
                        className={styles.abs1}
                        src="./image/clouds.png"
                        alt="#"
                        loading="lazy"
                    />
                    <img
                        className={styles.abs2}
                        src="./image/clouds.png"
                        alt="#"
                        loading="lazy"
                    />
                    <img
                        className={styles.abs3}
                        src="./image/message.png"
                        alt="#"
                        loading="lazy"
                    />
                    <img
                        className={styles.abs4}
                        src="./image/code.png"
                        alt="#"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
