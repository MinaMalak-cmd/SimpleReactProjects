import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import Trial from "./Trial";

function App() {
  // const url = "http://localhost:62962/api/Masses";
  // const url = "https://swapi.dev/api/films/";
  const url =
    "https://react-http-a3859-default-rtdb.firebaseio.com/movies.json";
  const [content, setContent] = useState(<p>No items found</p>);
  /*
   you can send an arrow function or callback function to useCallback
    const fetchHandler = useCallback(async function() {
      */
  const fetchHandler = useCallback(async () => {
    setContent(<p>Loading ...</p>);
    try {
      let response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("something went wrong dear");
      let data = await response.json();
      let tempMovies = [];
      for (const key in data) {
        tempMovies.push({
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setContent(<MoviesList movies={tempMovies} />);
    } catch (error) {
      setContent(<p>{error.message}</p>);
    } finally {
      //write your code that you want to be executed in both cases
    }
  }, []);

  async function addMovieHandler(movie) {
    // you can add loading and error handling 
    //like the above function
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await response.json();
    /*
    you can check data returned using 
    console.log(data)
    and that depends on API, as some apis doesn't return a result 
    in post request
     */
  }

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
      {/* <Trial /> */}
    </React.Fragment>
  );
}

export default App;
