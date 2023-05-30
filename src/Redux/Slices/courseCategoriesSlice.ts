import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  courseCategoriesRequest,
  coursesByCategoryIdRequest,
} from "../Services/showCourseAPI";

//1: khai báo type cho từng biến:
type Category = {
  maDanhMuc: string;
  tenDanhMuc: string;
  //vì khi duyệt qua từng danh mục sẽ lấy ra thêm các khoá học thuộc danh mục tương ứng nên ta khai báo tiếp tượng trưng:
  khoaHocLienQuan: Course[];
};

//3: khai bao type cho khoa hoc
export type Course = {
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

//2:
type InitialStateTypes = {
  categories: Category[]; //categories: type là 1 mảng và bên trong mảng sẽ là Category(bên trong là 1 object) y chang API
  isLoading: boolean;
  isError: boolean;
};

//---------------------------//

//1:
const initialState: InitialStateTypes = {
  categories: [],
  isLoading: false,
  isError: false,
};

//2:
const SLICE_NAMESPACE = "courseCategoriesSlice";

//3: thay vì gọi trực tiếp bên trong component như thông thường thì giờ gọi ra bên đây, nhớ "Action" vào cuối
export const fetchCourseCategoriesAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/fetch_categories`,
  async () => {
    try {
      const data = await courseCategoriesRequest();

      let newData: Category[] = data.slice(0, 3);
      // chay vong lap de call api lay khoa hoc theo tung danh muc
      const temp = newData.map(async (item) => {
        const categoryId = item.maDanhMuc;
        const res = await coursesByCategoryIdRequest(categoryId);
        return {
          ...item,
          khoaHocLienQuan: res,
        };
      });

      // Promise.all: sử dụng khi cần đợi tất cả các api có kết quả trả về (thường dùng khi sử dụng call api bên trong vòng lặp)
      const result = await Promise.all(temp).then((response: Category[]) => {
        return response;
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
);

//4:
const courseCategoriesSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourseCategoriesAction.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      fetchCourseCategoriesAction.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        const newCategories = action.payload;
        state.categories = newCategories;
        state.isLoading = false;
        state.isError = false;
      }
    );
    builder.addCase(fetchCourseCategoriesAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default courseCategoriesSlice.reducer;
