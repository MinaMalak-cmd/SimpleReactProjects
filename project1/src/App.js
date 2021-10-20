import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const url = "https://swapi.dev/api/films/";
  const [content, setContent] = useState(<p>No items found</p>);
  const fetchHandler = async () => {
    setContent(<p>Loading ...</p>);
    let response = await fetch(url);
    let data = await response.json();
    let tempMovies = [];
    tempMovies = data.results.map((movie) => {
      return {
        key: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setContent(<MoviesList movies={tempMovies} />);
  };
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
