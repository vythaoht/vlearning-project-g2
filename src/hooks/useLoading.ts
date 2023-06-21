import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const useLoading = () => {
  const { isLoading: userLoading } = useSelector(
    (state: RootState) => state.userReducer
  );
  const { isLoading: categoriesLoading } = useSelector(
    (state: RootState) => state.courseCategoriesReducer
  );
  const { isLoading: courseLoading } = useSelector(
    (state: RootState) => state.courseCategoriesByIdReducer
  );
  const { isLoading: courseInfoLoading } = useSelector(
    (state: RootState) => state.courseInfoReducer
  );
  const { isLoading: courseListLoading } = useSelector(
    (state: RootState) => state.courseListReducer
  );
  const { isLoading: searchLoading } = useSelector(
    (state: RootState) => state.searchReducer
  );

  return (
    userLoading ||
    categoriesLoading ||
    courseLoading ||
    courseInfoLoading ||
    courseListLoading ||
    searchLoading
  );
};

export default useLoading;
