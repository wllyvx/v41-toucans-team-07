import React from "react";
import Header from "../../components/Header/Header";
import Sotd from "../../components/Sotd/Sotd";
import MovieSection from "../../components/Movie/MovieSection";
import "./Home.scss";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <MovieSection />
      <Sotd /> {/* SOTD = Ship of The Day */}
    </div>
  );
};

export default LandingPage;
