import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    courseCategoriesRequest,
    getCourseInfoAPI,
} from "../Services/showCourseAPI";


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
            const response = await getCourseInfoAPI(courseId);
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
                state.courseInfo = action.payload;
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
