import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Availibility from '../AvailabilityDrawer/AvailabilityDrawer';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';


const Poster = styled.img`
    width: 200px;
    height: auto;
    border-radius: 5px;
    margin: 0 auto;

    @media only screen and (max-width: 768px){
        width: 170px;
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

export class SavedMovies extends Component {

  state = {
    sources: [],
    show: false,
    selected: ""
  }

  handleClose() {
    this.setState({ show: false });
  }

  getAvailability = (query) => {
    axios.get("/api/availability" + query).then(response => {
      console.log(response);
      console.log(query);
      this.setState({ 
        sources: response.data.data.results,
        show: true,
        selected: query.replace("+", " ")
       });
    });
  }

  render() {
    let moviesData = this.props.data;

    return (
      <Fragment>
        <Fragment>
          {
            this.state.sources.length > 0 &&
            <Availibility 
            sources={this.state.sources}
            selected={this.state.selected}
            />
          }
        </Fragment>
        <Fragment>
          {
            moviesData.data.map(movie =>
              <Fragment>
                <StyledDiv key={movie._id}>
                  <div style={{position: "relative"}}>
                    <Poster
                      src={"https://image.tmdb.org/t/p/w500" + movie.moviePoster}
                      alt={movie.movieTitle}
                    />
                    <Tooltip title="Close">
                      <Button size="small" style={{position: "absolute", zIndex: 99, right: -14, textShadow: "1px 1px 1px #78909c"}}>X</Button>
                    </Tooltip>
                  </div>

                  <div style={{textAlign: "center", marginTop: "5px"}}>
                    <Button variant="contained" color="secondary" size="small" id={movie._id} onClick={() => this.getAvailability(movie.movieTitle.replace(/ /g, "+"))}>Check Availability</Button> 
                  </div>
                </StyledDiv>
              </Fragment>
            )
          }
        </Fragment>
      </Fragment>
    )
  }
}

export default SavedMovies;