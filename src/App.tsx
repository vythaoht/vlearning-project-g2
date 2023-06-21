
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading";

const EventPage = lazy(() => import("./Pages/EventPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const InformationPage = lazy(() => import("./Pages/InformationPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));
const SearchingCoursePage = lazy(() => import("./Pages/SearchingCoursePage"));
const HomeTemplate = lazy(() => import("./Templates/HomeTemplate"));
const CoursePage = lazy(() => import("./Pages/CoursePage"));
const CategoryPage = lazy(() => import("./Pages/CategoryPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const CourseDetailsPage = lazy(() => import("./Pages/CourseDetailsPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));
const UserInfoPage = lazy(() => import("./Pages/UserInfoPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/information" element={<InformationPage />} />
            <Route path="/searching" element={<SearchingCoursePage />} />
            <Route path="/category/:maDanhMuc" element={<CategoryPage />} />
            <Route path="/details/:maKhoaHoc" element={<CourseDetailsPage />} />
            <Route path="/inforUser" element={<UserInfoPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />


          <Route path="*" element={<NotFoundPage />} />


        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
