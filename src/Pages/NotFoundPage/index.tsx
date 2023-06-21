import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Core/Button";
import styles from "./loading.module.scss";

type Props = {};

function NotFoundPage({ }: Props) {
    const navigate = useNavigate();
    const handleHomePage = () => {
        navigate("/")
    }
    return (
        <div className={styles.container}>
            <div className={styles.error}>
                <p>404</p>

            </div>
            <div className={styles.content}>
                <h1>Thông tin đang được cập nhật</h1>
                <Button margin="20px"
                    bgColor="#41b294"
                    title="Quay về trang chủ"
                    onClick={handleHomePage} />
            </div>
        </div>
    );
}

export default NotFoundPage;
