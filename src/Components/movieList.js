import React from "react";

const MovieList = (props) => {
  return props.eventType === "title" ? (
    <div className="mylist">
      {props.list.map((movie) => {
        return (
          <a key={movie.id} href="#" className="mylist-link movie">
            {movie.title}
          </a>
        );
      })}
    </div>
  ) : (
    <div className="mylist">
      {props.list.map((movie) => {
        return (
          <ul>
            <li className="movie" key={movie.id}>
              <div className="movie-div">
                <h2>{movie.title}</h2>
                <img src={movie.img} alt={movie.title} />
                <button onClick={() => props.handleClick(movie.id)}>
                  {props.eventType === "delete" ? "Remove" : "Add"}
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default MovieList;
