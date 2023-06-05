import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCourseListAPI } from "../Services/showCourseAPI";
import { Course } from "./courseCategoriesSlice";

type InitialStateTypes = {
    courseList: Course[];
    isLoading: boolean;
    isError: boolean;
};

const initialState: InitialStateTypes = {
    courseList: [],
    isLoading: false,
    isError: false,
};

const SLICE_NAMESPACE = "courseListSlice";

export const fetchCourseListAction = createAsyncThunk(
    `${SLICE_NAMESPACE}/fetch_courselist`,
    async () => {
        try {
            const data = await getCourseListAPI();
            return data;
        } catch (error) {
            throw error;
        }
    }
);

//4:
const courseListSlice = createSlice({
    name: SLICE_NAMESPACE,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCourseListAction.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(
            fetchCourseListAction.fulfilled,
            (state, action: PayloadAction<Course[]>) => {
                state.courseList = action.payload;
                state.isLoading = false;
                state.isError = false;
            }
        );
        builder.addCase(fetchCourseListAction.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default courseListSlice.reducer;
