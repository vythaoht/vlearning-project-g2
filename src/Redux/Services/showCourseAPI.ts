import axiosClient from "../../Config/axiosClient";

//api danh mục khoá học
export const courseCategoriesRequest = async () => {
  try {
    const response = await axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
    return response.data;
  } catch (error) {
    throw error;
  }
};

//api lấy khoá học theo từng danh mục trên
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

//api lấy danh sách các khoá học dựa theo tên đã search
export const listCourseBySearching = async (courseName: string) => {
  try {
    const response = await axiosClient.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${courseName}&MaNhom=GP01`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
