import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../../Redux/Services/registerAPI";
import styles from "./userInfoPage.module.scss"
import Button from "../../Core/Button";
import { DeleteCoursePayload, deleteCourseRegister, infoUserRequest, updateInfoUserRequest } from "../../Redux/Services/infoUser";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateInfoUser } from "../../Redux/Slices/userSlice";
import useScrollTop from "../../Hooks/useScrollTop";

type Props = {};

type CourseInfo = {
    maKhoaHoc: string,
    tenKhoaHoc: string,
    hinhAnh: string
}

type DataResponse = {
    taiKhoan: string,
    hoTen: string,
    matKhau: string,
    email: string,
    soDT: string,
    maLoaiNguoiDung: string,
    maNhom: string,
    chiTietKhoaHocGhiDanh?: CourseInfo[]

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
    useScrollTop();
    const navigate = useNavigate()
    const dispatch: DispatchType = useDispatch()
    const [listCourseRegister, setListCourseRegister] = useState<CourseInfo[]>([])

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
            if (data.chiTietKhoaHocGhiDanh) {
                setListCourseRegister(data.chiTietKhoaHocGhiDanh)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchDeleteCourseRegister = async (values: DeleteCoursePayload) => {
        try {
            await deleteCourseRegister(values)
            await fetchUserInfo()
            toast.success("Đã huỷ ghi danh thành công")
        } catch (error) {
            toast.error("Huỷ ghi danh thất bại")
        }
    }

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

    const handleNavigateToCourseDetails = (maKhoaHoc: string) => {
        navigate(`/details/${maKhoaHoc}`)
    }

    useEffect(() => {
        fetchUserInfo()
    }, [])

    return (<div className={styles.container}>
        <div className={styles.left}>
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
                    margin="10px 0"
                    color="#fff"
                    bgColor="#36867b"
                />
            </form>
        </div>
        <div className={styles.right}>
            <h2>Khoá học đã đăng ký</h2>
            <table>
                <thead>
                    <tr>
                        <th>Hình Ảnh</th>
                        <th>Mã Khoá Học</th>
                        <th>Tên Khoá Học</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listCourseRegister.map((item) => {
                        return <tr key={item.maKhoaHoc}
                            onClick={() => handleNavigateToCourseDetails(item.maKhoaHoc)}>
                            <td>
                                <img src={item.hinhAnh} alt={item.tenKhoaHoc}
                                    width="75px"
                                    height="75px" />
                            </td>
                            <td>{item.maKhoaHoc}</td>
                            <td>{item.tenKhoaHoc}</td>
                            <td>
                                <Button title="Huỷ ghi danh" onClick={() => {
                                    if (user) {
                                        fetchDeleteCourseRegister({
                                            maKhoaHoc: item.maKhoaHoc,
                                            taiKhoan: user.taiKhoan
                                        })
                                    }

                                }} />
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    </div >);
}

export default UserInfoPage;
