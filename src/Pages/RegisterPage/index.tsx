
import React, { useEffect, useState } from 'react'
import styles from './registerPage.module.scss'
import { useForm } from 'react-hook-form';
import RegisterComponent from './RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/store';
import { loginUser } from '../../Redux/Services/loginAPI';
import { fetchLoginAction } from '../../Redux/Slices/userSlice';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../Core/Button';

type Props = {}

function RegisterPage({ }: Props) {


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
        </div>
    )
}

export default RegisterPage