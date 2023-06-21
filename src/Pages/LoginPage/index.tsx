
import React, { useEffect, useState } from 'react'
import styles from './loginPage.module.scss'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/store';
import { loginUser } from '../../Redux/Services/loginAPI';
import { cleanUpUser, fetchLoginAction } from '../../Redux/Slices/userSlice';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../Core/Button';
import { toast } from 'react-toastify';
import useLoading from '../../Hooks/useLoading';
import Loading from '../../Components/Loading';

type Props = {}

function LoginPage({ }: Props) {
    const showLoading = useLoading()

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
    const { user, isError } = useSelector((state: RootState) => {
        return state.userReducer;
    });

    const [searchParams, _] = useSearchParams();

    const onSubmit = (values: {
        taiKhoan: string,
        matKhau: string,
    }) => {
        dispatch(fetchLoginAction(values));
    };

    const navigate = useNavigate();

    const handleNavigateToRegister = () => {
        navigate("/register")
    }

    useEffect(() => {
        if (isError) {
            toast.error("Đăng nhập không thành công, vui lòng kiểm tra lại thông tin")
            dispatch(cleanUpUser());
        }
    }, [isError])

    if (user) {
        if (searchParams.get(`fallbackUrl`)) {
            return <Navigate to={searchParams.get(`fallbackUrl`) || ""} />;
        }
        return <Navigate to="/" />;
    }

    return (
        <div className={styles.login}>
            <div className={styles.login__formAll}>
                {/* Giao diện đăng nhập */}
                <div className={styles.container} id='container'>
                    <div className={`${styles.form__content} ${styles.login__content}`}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={styles.login__box}
                        >
                            <div className={styles.title}>
                                <h1>Đăng nhập</h1>
                                <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
                            </div>

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

                            <Button title="Đăng nhập" color="#fff" bgColor="#36867b" margin='15px 0 0 0' />

                            <a href="#">Quên mật khẩu?</a>

                        </form>
                    </div>


                    {/* Giao diện Xin chào */}
                    <div className={styles.overlay__container}>
                        <div className={styles.overlay}>
                            <div className={`${styles.overlay__panel} ${styles.overlay__right}`}>
                                <div className={styles.title}>
                                    <h1>Xin chào!</h1>
                                    <span>Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!</span>
                                </div>
                                <Button title="Đăng ký" color="#36867b" bgColor="#fff" onClick={handleNavigateToRegister} />

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

export default LoginPage