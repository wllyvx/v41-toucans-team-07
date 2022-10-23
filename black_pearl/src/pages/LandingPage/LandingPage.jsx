import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Sotd from "../../components/Sotd/Sotd";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Sotd /> {/* SOTD = Ship of The Day */}
    </div>
  );
};

export default LandingPage;
