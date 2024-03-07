import React from "react";
import { useEffect, useState } from "react";
import "./HomeView.css";

export function HomeView({}) {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Batman");

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

  return (
    <div className="App" id="App">
      <form onSubmit={getSearch}>
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
}
