
import React, { useEffect, useState } from 'react'
import styles from './loginPage.module.scss'
import { useForm } from 'react-hook-form';
import RegisterComponent from './RegisterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/store';
import { loginUser } from '../../Redux/Services/loginAPI';
import { fetchLoginAction } from '../../Redux/Slices/userSlice';
import { Navigate, useSearchParams } from 'react-router-dom';

type Props = {}

function LoginPage({ }: Props) {
    // const signUpButton = document.getElementById('login');
    // const signInButton = document.getElementById('register');
    // const container = document.getElementById('container');

    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            taiKhoan: "",
            matKhau: "",
        },
    });

    const dispatch: DispatchType = useDispatch();
    const { user } = useSelector((state: RootState) => {
        return state.userReducer;
    });

    const [searchParams, _] = useSearchParams();


    const onSubmit = (values: string) => {
        dispatch(fetchLoginAction(values));
    };

    // if (user) {
    //     if (searchParams.get(`fallbackUrl`)) {
    //         return <Navigate to={searchParams.get(`fallbackUrl`) || ""} />;
    //     }
    //     return <Navigate to="/" />;
    // }



    return (
        <div className={styles.login}>
            <div className={styles.login__formAll}>
                {/* Giao diện đăng nhập */}
                <div className={styles.container} id='container'>
                    <div className={`${styles.form__content} ${styles.login__content}`}>
                        <form
                            // onSubmit={handleSubmit(onSubmit)} 
                            className={styles.login__box}
                        >
                            <h2>ĐĂNG NHẬP</h2>
                            <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>

                            <input
                                type="text"
                                placeholder="Tài Khoản *"
                                {...register("taiKhoan", {
                                    required: {
                                        value: true,
                                        message: "Tài khoản không được để trống",
                                    },
                                    pattern: {
                                        value: /^\S+$/,
                                        message: "Tài khoản không được chứa khoảng trắng",
                                    },
                                })}
                            />
                            {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}

                            <input
                                type={"password"}
                                placeholder="Mật Khẩu *"
                                {...register("matKhau", {
                                    required: {
                                        value: true,
                                        message: "Mật khẩu không được để trống",
                                    },
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                                        message: "Mật khẩu phải chứa ít nhất 1 chữ cái và 1 chữ số",
                                    },
                                })}
                            />
                            {errors.matKhau && <p>{errors.matKhau.message}</p>}

                            <a href="#">Quên mật khẩu?</a>
                            <button type="submit">Đăng nhập</button>
                        </form>
                    </div>

                    {/* Giao diện đăng ký */}
                    <div className={`${styles.form__content} ${styles.register__content}`}>
                        <RegisterComponent />
                    </div>

                    {/* Giao diện Xin chào */}
                    <div className={styles.overlay__container}>
                        <div className={styles.overlay}>
                            <div className={`${styles.overlay__panel} ${styles.overlay__left}`}>
                                <h1>Chào mừng bạn đã trở lại!</h1>
                                <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                                <button className={styles.overlay__button} id="login">Đăng nhập</button>
                            </div>
                            <div className={`${styles.overlay__panel} ${styles.overlay__right}`}>
                                <h1>Xin chào!</h1>
                                <p>Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!</p>
                                <button className={styles.overlay__button} id="register">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage