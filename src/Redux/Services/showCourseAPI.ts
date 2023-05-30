import axiosClient from "../../Config/axiosClient";

export const courseCategoriesRequest = async () => {
  try {
    const response = await axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const coursesByCategoryIdRequest = async (categoryId: string) => {
  try {
    const response = await axiosClient.get(
      `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoryId}&MaNhom=GP01`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
