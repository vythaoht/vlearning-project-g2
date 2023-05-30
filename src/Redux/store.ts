import { configureStore } from "@reduxjs/toolkit";
import courseCategoriesReducer from "./Slices/courseCategoriesSlice";

//1: ban đầu sẽ import "courseCategoriesSlice" đúng như bên slice của nó, nhưng vì export default nên mình đổi được tên và vì export chấm .reducer nên mình đặt là "courseCategoriesReducer" cho dễ hiểu

const store = configureStore({
  reducer: {
    courseCategoriesReducer,
  },
});

//2: sau đó phải khai báo type của dispatch y mẫu: thì khi useDispatch ở component cần dùng sẽ ko bị lỗi typescript
export type DispatchType = typeof store.dispatch;

//3: nếu ko khai báo thêm "ReturnType" cho trương hợp này thì RootState sẽ hiểu đây chỉ là một type callbackfunction thôi, vì muốn biết bên trong func có chứa kiểu dữ liệu gì thì cần phải "ReturnType" cái nữa
export type RootState = ReturnType<typeof store.getState>;

export default store;
