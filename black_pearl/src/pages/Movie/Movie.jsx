import React from "react";
import img from "../../assets/movie-1.jpg";
import "./Movie.scss";

function Movie() {
  return (
    <div className="movie-details">
      <div className="container">
        <img src={img} alt="" className="movie-img" />
        <div>
          <h1>Tittle</h1>
          <p>this is movie page</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
