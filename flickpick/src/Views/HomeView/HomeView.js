import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeView.css";
import MovieView  from "../MovieView/MovieView";

export function HomeView({ processSignIn }) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Batman");
  const [selectedMovieId, setSelectedMovieId] = useState("");

  useEffect(() => {
    processSignIn();
    //new URLSearchParams(window.location.search)
  }, [processSignIn]);

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=dd43f597`
    );
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const handleClick = (imdbID) => {
    console.log(imdbID);
    setSelectedMovieId(imdbID);
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="App" id="App">
      <form onSubmit={getSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for a movie..."
          style={{ marginRight: "10px" }}
        />
        <button className="submit-button" type="submit">
          Search
        </button>
      </form>
      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie" key={movie.imdbID}>
            {movie.Title}
            <button className="movie-title" onClick={() => handleClick(movie.imdbID)}>
              <img src={movie.Poster} alt={movie.Title} />
            </button>
          </div>
        ))}
      </div>
      {selectedMovieId && <MovieView imdbID={selectedMovieId} />}
    </div>
  );
}
