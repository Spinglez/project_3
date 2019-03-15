import React, { Fragment } from 'react';

const SavedMovies = (props) => {
    let moviesData = props.data;
    console.log('movieData', moviesData)
      return (
          moviesData.data.map(movie =>
          <Fragment>
          <div key={movie._id}>  
            {/* <p>{movie.movieTitle}</p> */}
              <img
              src={movie.moviePoster}
              alt={movie.movieTitle}
              />
            </div>     
          </Fragment>
          )
      )
}

export default SavedMovies;