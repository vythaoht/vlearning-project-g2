import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../../Redux/Services/registerAPI";
import styles from "./userInfoPage.module.scss"
import Button from "../../Core/Button";
import { infoUserRequest, updateInfoUserRequest } from "../../Redux/Services/infoUser";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateInfoUser } from "../../Redux/Slices/userSlice";

type Props = {};

type DataResponse = {
    taiKhoan: string,
    hoTen: string,
    matKhau: string,
    email: string,
    soDT: string,
    maLoaiNguoiDung: string,
    maNhom: string
}

const schema = yup.object({
    taiKhoan: yup.string(),
    hoTen: yup.string().required("Họ tên không được để trống"),
    matKhau: yup
        .string()
        .required("Mật khẩu không được để trống")
        .matches(
            /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
            "Mật khẩu phải chứa ít nhất 1 chữ cái và 1 chữ số"
        ),
    email: yup
        .string()
        .required("Email không được để trống"),
    soDT: yup
        .number()
        .required("Số điện thoại không được để trống")

});

function UserInfoPage({ }: Props) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        // Khai báo các giá trị khởi tạo cho các input
        defaultValues: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            email: "",
            soDT: "",
            maLoaiNguoiDung: "",
            maNhom: ""
        },
        mode: "onTouched",
        //Khai báo validation bằng yup
        resolver: yupResolver(schema),
    });

    const { user } = useSelector((state: RootState) => {
        return state.userReducer;
    });

    const fetchUserInfo = async () => {
        try {
            const data: DataResponse = await infoUserRequest()
            setValue("taiKhoan", data.taiKhoan)
            setValue("hoTen", data.hoTen)
            setValue("matKhau", data.matKhau)
            setValue("email", data.email)
            setValue("soDT", data.soDT)
            setValue("maLoaiNguoiDung", data.maLoaiNguoiDung)
            setValue("maNhom", data.maNhom)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchUserInfo()
    }, [])

    const navigate = useNavigate()
    const dispatch: DispatchType = useDispatch()
    const onSubmit = async (values: DataResponse) => {
        try {
            const response = await updateInfoUserRequest(values);
            dispatch(updateInfoUser(response.data))
            toast.success("Cập nhật thông tin thành công")
            navigate("/")
        } catch (error) {
            toast.error("Cập nhật thất bại")
        }
    }

    return (<div className={styles.container}>
        <h2>Chỉnh sửa thông tin</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formStyle}>
            <div className={styles.inputStyle}>
                <input type="text"
                    placeholder="Tài khoản"
                    {...register("taiKhoan")} disabled />
                {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
            </div>
            <div className={styles.inputStyle}>
                <input type="text"
                    placeholder="Họ tên"
                    {...register("hoTen")} />
                {errors.hoTen && <p>{errors.hoTen.message}</p>}
            </div>
            <div className={styles.inputStyle}>
                <input type="password"
                    placeholder="Mật khẩu"
                    {...register("matKhau")} />
                {errors.matKhau && <p>{errors.matKhau.message}</p>}
            </div>
            <div className={styles.inputStyle}>
                <input type="email"
                    placeholder="Email"
                    {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={styles.inputStyle}>

                <input type="number"
                    placeholder="Số điện thoại"
                    {...register("soDT")} />
                {errors.soDT && <p>{errors.soDT.message}</p>}
            </div>
            <Button
                title="Cập nhật"
                margin="20px 0"
                color="#fff"
                bgColor="#36867b"
            />
        </form>
    </div >);
}

export default UserInfoPage;
