import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import InfoPage from "./Pages/InfoPage";
import StarWarsPage from "./Pages/StarWarsPage";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<InfoPage />} />
        <Route path="/star-wars" element={<StarWarsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
