import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Poster = styled.img`
    width: 200px;
    height: auto;
    border-radius: 5px;
    margin: 0 auto;

    @media only screen and (max-width: 768px){
        width: 200px;
    }  

    @media only screen and (max-width: 576px){
        width: 100%;
        align-self: center;
    }
`;

const StyledDiv = styled.div`
    padding: 10px;
    background-color: #002744;
    border-radius: 10px;
    margin: 5px 5px;
`;

const SavedMovies = (props) => {
    let moviesData = props.data;
    console.log('movieData', moviesData)
      return (
          moviesData.data.map(movie =>
            <Fragment>
            <StyledDiv key={movie._id}>
                <Poster
                  src={"https://image.tmdb.org/t/p/w500" + movie.moviePoster}
                  alt={movie.movieTitle}
                />
            </StyledDiv>
            <Button size="small" style={{display: "grid"}}>Check Availability</Button>   
            </Fragment>   
          )
      )
}

export default SavedMovies;