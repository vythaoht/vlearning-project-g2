import React from "react";
import styles from "./sponsors.module.scss";
import cls from "classnames";

type Props = {};

function Sponsors({ }: Props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>NHÀ TÀI TRỢ CHƯƠNG TRÌNH</h1>
            <div className={cls("row gutter", styles.listItem)}>
                <div className={cls("col-3 colter")}>
                    <img src="./image/meta.jpg" alt="#"
                        loading="lazy"
                    />
                    <h2>FACEBOOK</h2>
                </div>
                <div className={cls("col-3 colter")}>
                    <img src="./image/microsoft.jpg" alt="#"
                        loading="lazy"
                    />
                    <h2>MICROSOFT</h2>

                </div>
                <div className={cls("col-3 colter")}>
                    <img src="./image/Google-logo.jpg" alt="#"
                        loading="lazy"
                    />
                    <h2>GOOGLE</h2>


                </div>
                <div className={cls("col-3 colter")}>
                    <img src="./image/amazon.jpg" alt="#"
                        loading="lazy"
                    />
                    <h2>AMAZON</h2>

                </div>
            </div>
        </div>
    );
}

export default Sponsors;
