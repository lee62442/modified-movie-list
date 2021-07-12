import React from "react";

const MovieList = (props) => {
  // return (
  //   <div>
  //     <h2>{props.movieItem.title}</h2>
  //     <img src={props.movieItem.img} alt={props.movieItem.title} />
  //   </div>
  // );
  // return (
  //   <div>
  //     {props.list.map((movie, i) => {
  //       return (
  //         <li className="movie" key={movie.id}>
  //           <div>
  //             <MovieList movieItem={movie} />
  //             <button onClick={() => this.remove(i)}>REMOVE</button>
  //           </div>
  //         </li>
  //       );
  //     })}
  //   </div>
  // );
  return (
    <div className="mylist">
      {props.list.map((movie, i) => {
        return (
          <ul>
            <li className="movie" key={i}>
              <div>
                <h2>{movie.title}</h2>
                <img src={movie.img} alt={movie.title} />
                <button onClick={() => props.handleClick(i)}>
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
