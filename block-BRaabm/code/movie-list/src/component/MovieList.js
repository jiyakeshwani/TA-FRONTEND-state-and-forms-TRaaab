import React from "react";
import data from "../data.json";
import Movie from "./Movie";

class MovieList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      moreInfo: false,
      activeMovie: "",
    };
  }

  handleClick = (movie) => {
    this.setState((prevState) => {
      return {
        activeMovie: movie,
        moreInfo: !prevState.moreInfo,
      };
    });
  };
  render() {
    let movies;
    if (this.state.activeMovie) {
      movies = data.find((movie) => movie === this.state.activeMovie);
    } else {
      movies = "";
    }

    return (
      <>
        <ul className="movies">
          {" "}
          {data.map((movie) => {
            return (
              <>
                <li className="movie">
                  <img className="img" src={movie.Images[0]} alt="movie" />
                  <div className="detail">
                    <h2>{movie.Title}</h2>
                    <span className="release">
                      Release Date: {movie.Released}
                    </span>
                  </div>
                  <button
                    onClick={() => this.handleClick(movie)}
                    className="btn"
                  >
                    More Info
                  </button>
                </li>
              </>
            );
          })}
        </ul>
        <div className={this.state.moreInfo ? "modal" : "hidden"}>
          {<Movie movies={movies} />}
          <span onClick={() => this.handleClick("")} className="cross">
            {" "}
            ❌
          </span>
        </div>
      </>
    );
  }
}

export default MovieList;
