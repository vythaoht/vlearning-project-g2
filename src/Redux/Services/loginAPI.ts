import axiosClient from "../../Config/axiosClient";

// call API dể đăng nhập
export const loginUser = async (payload: string) => {
    try {
        const response = await axiosClient.post("/QuanLyNguoiDung/DangNhap", payload);
        return response;
    } catch (error) {
        throw error;
    }
}