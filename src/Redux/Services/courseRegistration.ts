import axiosClient from "../../Config/axiosClient";

export type courseRegistrationPayload = {
  maKhoaHoc: string;
  taiKhoan: string;
};

//call api de ghi danh khoa hoc
export const courseRegistrationRequest = async (
  payload: courseRegistrationPayload
) => {
  try {
    const response = await axiosClient.post(
      "/QuanLyKhoaHoc/DangKyKhoaHoc",
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
};
