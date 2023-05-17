import { Fragment, useEffect, useState } from "react";
import './FetchMovies.css';
import { Link } from "react-router-dom";

const FetchMoviesHandler = () => {
 const [movies, setMovies] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    const data = await (
      await fetch('https://645e12f212e0a87ac0e6e495.mockapi.io/movies')
    ).json();
    setMovies(data)
  }

  fetchData()
 }, [])


  return(
    <Fragment>
      <h2 className="popular">Most popular</h2>
      {movies.map(movie => (
        <Link to={movie.url}>
         <div className="movie-list" key={movie.imdbID}>
          <div className="movies" >
            <img className="poster" src={movie.Poster} alt='movieImage'></img>
            <h3 className="title">{movie.Title}</h3>
            <h4 className="year">{movie.Year}</h4>
             {/* <li className="id">{movie.imdbID}</li> */}
          </div>
         </div>
        </Link>
      ))}
    </Fragment>
  )
  }

export default FetchMoviesHandler;
