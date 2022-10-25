import React from "react";
import { Link } from "react-router-dom";
import "./MovieSection.scss";
import { movies } from "./movieData";
import MovieListComponents from "./MovieList/MovieListComponents";

function MovieSection() {
  const moviesElement = movies.map((item) => {
    return (
      <MovieListComponents key={item.id} img={item.img} title={item.title} />
    );
  });

  console.log(moviesElement);

  return (
    <section>
      <div className="section-container">
        <h3 className="section-title">Movies</h3>
        <Link to="/movie">
          <div className="movie-elements-container">{moviesElement}</div>
        </Link>
      </div>
    </section>
  );
}

export default MovieSection;
