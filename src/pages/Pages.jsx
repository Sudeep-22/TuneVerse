import React from "react";
import { Route, Routes } from "react-router-dom";
import Searched from "../components/Searched";

function Pages() {
  return (
    <Routes>
      <Route path="/search/:searchParam" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
