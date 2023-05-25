import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeTemplate from "./Templates/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate/>}>
          <Route path="/" element={<HomePage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
