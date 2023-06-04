import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../Services/loginAPI";
import { registerUser } from "../Services/registerAPI";

type User = {
    taiKhoan: string;
    matKhau: string;
}

type InitialStateTypes = {
    user: User[],
    isLoading: boolean,
    isError: boolean,
}

const initialState: InitialStateTypes = {
    user: [],
    isLoading: false,
    isError: false,
}

const SLICE_NAMESPACE = "user";

// Đăng nhập
export const fetchLoginAction = createAsyncThunk(`${SLICE_NAMESPACE}/login`, async (values: string) => {
    try {
        const response = await loginUser(values);
        // lưu accessToken từ api trả về vào localStorage
        const { accessToken } = response.data.content;
        localStorage.setItem("accessToken", accessToken);
        return response.data.content;
    } catch (error) {
        return error;
    }
});

const userSlice = createSlice({
    name: SLICE_NAMESPACE,
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = [];
        }
    },
    extraReducers: (builder) => {
        // Đăng nhập
        builder.addCase(fetchLoginAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchLoginAction.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.user = action.payload;
            state.isLoading = true;
        });
        builder.addCase(fetchLoginAction.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;