import React, { Fragment } from 'react';

const SavedMovies = (props) => {
    console.log('this', this)
    let moviesData = props.data;
    console.log('movieData', moviesData)
      return (
      <div key={moviesData._id}>
          {
          moviesData.data.map(movie =>
          <Fragment>
            {/* <p>{movie.movieTitle}</p> */}
              <img 
              src={movie.moviePoster} 
              alt={movie.movieTitle}
              key={movie._id} 
              />
          </Fragment>
            )
          }
      </div>   
      )
}

export default SavedMovies;