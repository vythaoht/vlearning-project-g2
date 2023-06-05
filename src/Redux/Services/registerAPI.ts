import axiosClient from "../../Config/axiosClient";

// call API dể đăng ký
export async function registerUser(payload: string) {
    try {
        const response = await axiosClient.post("/QuanLyNguoiDung/DangKy", payload);
        return response;
    } catch (error) {
        throw error;
    }
}