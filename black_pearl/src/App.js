import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      {/* <Header /> */}
    </div>
  );
};

export default App;
