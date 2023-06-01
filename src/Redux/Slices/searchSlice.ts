import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listCourseBySearching } from "../Services/showCourseAPI";
import { Course } from "./courseCategoriesSlice";

type InitialStateTypes = {
  searchList: Course[];
  isLoading: boolean;
  isError: boolean;
};

//--------------//

//1:
const initialState: InitialStateTypes = {
  searchList: [],
  isLoading: false,
  isError: false,
};

//2:
const SLICE_NAMESPACE = "searchSlice";

//3:
export const fetchListCourseAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/fetch_search_courses`,
  async (courseName: string) => {
    try {
      const data = await listCourseBySearching(courseName);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

//4:
const searchSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListCourseAction.pending, (state) => {
      state.isLoading = true;
      state.isError = true;
    });
    builder.addCase(fetchListCourseAction.fulfilled, (state, action) => {
      state.searchList = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchListCourseAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.searchList = [];
    });
  },
});

export const {} = searchSlice.actions;

export default searchSlice.reducer;
