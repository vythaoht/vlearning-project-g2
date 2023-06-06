import axiosClient from "../../Config/axiosClient";

// call API dể đăng ký
export async function registerUser(payload: {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom: string;
  hoTen: string;
}) {
  try {
    const response = await axiosClient.post("/QuanLyNguoiDung/DangKy", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}
