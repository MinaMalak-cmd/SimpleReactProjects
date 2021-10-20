import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const url = "https://swapi.dev/api/films/";
  const [content, setContent] = useState(<p>No items found</p>);
  const fetchHandler = async () => {
    setContent(<p>Loading ...</p>);
    try{
      let response = await fetch(url);
      if(! response.ok) throw new Error('something went wrong dear')
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
    }catch(error){
      console.log(error)
      setContent(<p>{error.message}</p>);
    }finally{
        console.log('done')
    }
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
