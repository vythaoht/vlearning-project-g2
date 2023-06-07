import { type } from "os";
import axiosClient from "../../Config/axiosClient";

export type UpdateUserPayload = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
};

export const infoUserRequest = async () => {
  try {
    const response = await axiosClient.post(
      "/QuanLyNguoiDung/ThongTinTaiKhoan"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateInfoUserRequest = async (payload: UpdateUserPayload) => {
  try {
    const response = await axiosClient.put(
      "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
};
