
import React from 'react'
import styles from './registerPage.module.scss'
import RegisterComponent from './RegisterForm';
import { useNavigate } from 'react-router-dom';
import Button from '../../Core/Button';
import useLoading from '../../hooks/useLoading';
import Loading from '../../Components/Loading';

type Props = {}

function RegisterPage({ }: Props) {
    const showLoading = useLoading()

    const navigate = useNavigate()
    const handleNavigateToLogin = () => {
        navigate("/login")
    }

    return (
        <div className={styles.login}>
            <div className={styles.login__formAll}>
                {/* Giao diện đăng nhập */}
                <div className={styles.container} id='container'>
                    {/* Giao diện đăng ký */}
                    <div className={`${styles.form__content} ${styles.register__content}`}>
                        <RegisterComponent />
                    </div>


                    {/* Giao diện Xin chào */}
                    <div className={styles.overlay__container}>
                        <div className={styles.overlay}>

                            <div className={`${styles.overlay__panel} ${styles.overlay__right}`}>
                                <div className={styles.title}>
                                    <h1>Chào mừng bạn đã trở lại!</h1>
                                    <span>Vui lòng đăng nhập để kết nối với tài khoản của bạn</span>
                                </div>

                                <Button title="Đăng nhập" color="#36867b" bgColor="#fff" onClick={handleNavigateToLogin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showLoading && <Loading />
            }
        </div>
    )
}

export default RegisterPage