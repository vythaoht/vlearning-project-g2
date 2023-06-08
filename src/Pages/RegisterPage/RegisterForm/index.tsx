import React, { useState } from "react";
import styles from "./registerForm.module.scss";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { registerUser } from "../../../Redux/Services/registerAPI";
import { toast } from "react-toastify";
import Button from "../../../Core/Button";
type Props = {};

function RegisterForm({ }: Props) {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            hoTen: "",
        },
    });

    const navigate = useNavigate();
    const { user } = useSelector((state: RootState) => {
        return state.userReducer;
    });

    const onSubmit = async (values: {
        taiKhoan: string;
        matKhau: string;
        email: string;
        soDt: string;
        maNhom: string;
        hoTen: string;
    }) => {
        try {
            setIsLoading(true);
            await registerUser(values);
            toast.success("Đăng ký thành công");
            navigate(`/login`);
        } catch {
            toast.error("Đăng ký không thành công");
        } finally {
            setIsLoading(false);
        }
    };

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <div className={styles.register}>
            <form className={styles.register__box} onSubmit={handleSubmit(onSubmit)}>
                <h1>Đăng ký</h1>

                {/* Text tài khoản */}
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

                {/* Text họ tên */}
                <input
                    type="text"
                    placeholder="Họ Tên *"
                    {...register("hoTen", {
                        required: {
                            value: true,
                            message: "Họ tên không được để trống",
                        },
                    })}
                />
                {errors.hoTen && <p>{errors.hoTen.message}</p>}

                {/* Text mật khẩu */}
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

                {/* Text email */}
                <input
                    type="email"
                    placeholder="Email *"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email không được để trống",
                        },
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                {/* Text số điện thoại */}
                <input
                    type="text"
                    placeholder="Số Điện Thoại *"
                    {...register("soDt", {
                        required: {
                            value: true,
                            message: "Số điện thoại không được để trống",
                        },
                        pattern: {
                            value: /[\d]/,
                            message: "Vui lòng nhập đúng định dạng",
                        },
                    })}
                />
                {errors.soDt && <p>{errors.soDt.message}</p>}

                {/* Select mã nhóm  */}
                <select
                    className="maNhom"
                    {...register("maNhom", {
                        required: {
                            value: true,
                            message: "Vui lòng chọn loại người dùng",
                        },
                    })}
                >
                    <option value="">Mã nhóm</option>
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                    <option value="GP04">GP04</option>
                    <option value="GP05">GP05</option>
                    <option value="GP06">GP06</option>
                    <option value="GP07">GP07</option>
                    <option value="GP08">GP08</option>
                    <option value="GP09">GP09</option>
                    <option value="GP010">GP010</option>
                </select>
                {errors.maNhom && <p>{errors.maNhom.message}</p>}
                <Button
                    title="Đăng ký"
                    color="#fff"
                    bgColor="#36867b"
                    margin="15px 0 0 0"
                    loading={isLoading}
                />
            </form>
        </div>
    );
}

export default RegisterForm;
