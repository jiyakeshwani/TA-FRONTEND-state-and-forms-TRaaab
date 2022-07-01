import React from "react";

function Movie(props) {
  console.log(props.movies.Title);
  return (
    <>
      <div className="modal">
        <div className="container">
          <div className="flex">
            <img className="img2" src={props.movies.Images} alt="img" />

            <div>
              <h3>{props.movies.Title}</h3>
              <h4> by {props.movies.Director}</h4>
              <p className="year">{props.movies.Year}</p>
            </div>
            <div>
              <p className="genre">Genre: {props.movies.Genre}</p>
              <p className="rated">Rated: {props.movies.Rated}</p>
            </div>
            <p className="runtime"> Runtime: {props.movies.Runtime}</p>
          </div>
          <p className="plot">
            <b>Overview:</b>
            <br /> {props.movies.Plot}
          </p>
          <div className="flex">
            <div className="actors">
              {" "}
              Actors: <br />
              {props.movies.Actors}
            </div>
            <div className="writers">
              {" "}
              Writers: <br />
              {props.movies.Writer}
            </div>
            <div className="imdb">
              <p> ImdbRating: {props.movies.imdbRating}</p>
              <p> ImdbVotes: {props.movies.imdbVotes}</p>
              <p> Metascore: {props.movies.Metascore}</p>
            </div>
          </div>
          <span className="span">Awards: {props.movies.Awards}</span>
          <span className="span">Launguage: {props.movies.Language}</span>
          <span className="span">Country: {props.movies.Country}</span>
        </div>
      </div>
    </>
  );
}

export default Movie;
