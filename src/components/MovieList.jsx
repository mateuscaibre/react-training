import { useState } from "react";
import MovieCard from "./MovieCard";

import moviesData from "../movie-list.json";

export default function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
        );
      })}
    </div>
  );
}
