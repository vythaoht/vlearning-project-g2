
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./Pages/EventPage";
import HomePage from "./Pages/HomePage";
import InformationPage from "./Pages/InformationPage";
import Loading from "./Pages/LoadingPage";
import SearchingCoursePage from "./Pages/SearchingCoursePage";
import HomeTemplate from "./Templates/HomeTemplate";
import CoursePage from "./Pages/CoursePage";
import CategoryPage from "./Pages/CategoryPage";
import LoginPage from "./Pages/LoginPage";
import CourseDetailsPage from "./Pages/CourseDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/searching" element={<SearchingCoursePage />} />
          <Route path="/category/:maDanhMuc" element={<CategoryPage />} />
          <Route path="/details/:maKhoaHoc" element={<CourseDetailsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
