import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./Pages/EventPage";
import HomePage from "./Pages/HomePage";
import InformationPage from "./Pages/InformationPage";
import HomeTemplate from "./Templates/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/information" element={<InformationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
