import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    coursesByCategoryIdRequest,
} from "../Services/showCourseAPI";

type Category = {
    maDanhMuc: string,
    tenDanhMuc: string,
}

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

type InitialStateTypes = {
    categories: Category[];
    isLoading: boolean;
    isError: boolean;
};

const initialState: InitialStateTypes = {
    categories: [],
    isLoading: false,
    isError: false,
};

const SLICE_NAMESPACE = "courseCategoriesByIdSlice";

export const fetchCourseCategoriesByIdAction = createAsyncThunk(
    `${SLICE_NAMESPACE}/fetch_categories`,
    async (categoryId: string) => {
        try {
            const response = await coursesByCategoryIdRequest(categoryId);
            return response;
        } catch (error) {
            throw error;
        }
    }
)


const courseCategoriesByIdSlice = createSlice({
    name: SLICE_NAMESPACE,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCourseCategoriesByIdAction.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchCourseCategoriesByIdAction.fulfilled,
            (state, action: PayloadAction<Category[]>) => {
                const newCategories = action.payload;
                state.categories = newCategories;
                state.isLoading = false;
                state.isError = false;
            }
        );
        builder.addCase(fetchCourseCategoriesByIdAction.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
})

export default courseCategoriesByIdSlice.reducer;

