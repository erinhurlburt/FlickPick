import React, { useEffect, useState } from "react";
import "./MovieView.css";

const MovieView = ({ imdbID }) => {
  const [plot, setPlot] = useState("");
  const [poster, setPoster] = useState("");

  console.log(imdbID);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=dd43f597`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setPlot(data.Plot);
      setPoster(data.Poster);
    };

    fetchMovieDetails();
  }, [imdbID]);

  return (
    <div className="movie-info">
      <img src={poster} alt="Movie Poster" />
      <p>{plot}</p>
    </div>
  );
};

export default MovieView;
