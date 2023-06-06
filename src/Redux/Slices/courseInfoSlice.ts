import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  courseCategoriesRequest,
  getCourseInfoAPI,
} from "../Services/showCourseAPI";

type CourseInfoList = {
  maDanhMuc: string;
  tenDanhMuc: string;

  thongTinKhoaHoc: CourseInfo[];
};

export type CourseInfo = {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: {
    taiKhoan: string;
    hoTen: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
  };
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: string;
    tenDanhMucKhoaHoc: string;
  };
};

type InitialStateTypes = {
  courseInfo: CourseInfo | null;
  isLoading: boolean;
  isError: boolean;
};

const initialState: InitialStateTypes = {
  courseInfo: null,
  isLoading: false,
  isError: false,
};

const SLICE_NAMESPACE = "courseInfoSlice";

export const fetchCourseInfoAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/fetch_courseInfo`,
  async (courseId: string) => {
    try {
      // const data = await courseCategoriesRequest();

      // let newData: CourseInfoList[] = data.slice(0);
      // const temp = newData.map(async (item) => {
      //   const res = await getCourseInfoAPI(item.maKhoaHoc);
      //   return {
      //     ...item,
      //     thongTinKhoaHoc: res,
      //   };
      // });

      // // Promise.all: sử dụng khi cần đợi tất cả các api có kết quả trả về (thường dùng khi sử dụng call api bên trong vòng lặp)
      // const result = await Promise.all(temp).then((response: CourseInfoList[]) => {
      //   return response;
      // });
      // return result;

      const response = await getCourseInfoAPI(courseId);

      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const courseInfoSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourseInfoAction.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      fetchCourseInfoAction.fulfilled,
      (state, action: PayloadAction<CourseInfo>) => {
        // const newCourseInfo = action.payload;
        state.courseInfo = action.payload;

        // console.log(newCourseInfo);

        state.isLoading = false;
        state.isError = false;
      }
    );
    builder.addCase(fetchCourseInfoAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default courseInfoSlice.reducer;
