import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../Services/loginAPI";
import { registerUser } from "../Services/registerAPI";

type User = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
};

type InitialStateTypes = {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
};

const initialState: InitialStateTypes = {
  user: null,
  isLoading: false,
  isError: false,
};

const SLICE_NAMESPACE = "user";

// Đăng nhập
export const fetchLoginAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/login`,
  async (values: { taiKhoan: string; matKhau: string }, thunkApi) => {
    try {
      const response = await loginUser(values);
      // lưu accessToken từ api trả về vào localStorage
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken");
      state.user = null;
    },
    cleanUpUser: (state) => {
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    // Đăng nhập
    builder.addCase(fetchLoginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchLoginAction.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = true;
      }
    );
    builder.addCase(fetchLoginAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
export const { logout, cleanUpUser } = userSlice.actions;
