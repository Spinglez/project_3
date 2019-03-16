import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';

const styles = {
  card: {
    maxWidth: 345,
    marginTop: 8,
    marginLeft: 8
  },
  media: {
    height: 140,
  },
};

const TitleStyle = styled.div`
    color: #002744;
    font-size: 1.8rem;
    font-family: 'Oswald', sans-serif;
`;

const OverviewStyle = styled.p`
      font-family: 'Lato', sans-serif;
      color: #01579b;
`;

class MovieCard extends Component{
   state = {
       disabled: false
   }

  disableButton = (title, overview, image, votescore) => {
    this.setState({disabled:true});
    this.props.saveMovie(title, overview, image, votescore)
  }
  render(){

  const { classes, image, adult, title, overview, popularity, releaseDate, voteScore, key, saveMovie, removeMovie, id } = this.props;

  return (
    <Card className={classes.card}>

      <CardActionArea>
        <CardMedia
          key={key}
          className={classes.media}
          image={"https://image.tmdb.org/t/p/w500" + `${image}`}
        //   ${ + this.props.image}
          title="Contemplative Reptile"
        />
        <CardContent key={key} style={{height: "225px"}}>
          <TitleStyle gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
            {title}
          </TitleStyle>
          <OverviewStyle component="p" style={{overflowY:"scroll", maxHeight: "100px"}}>
            {overview}
          </OverviewStyle>
        </CardContent>
      </CardActionArea>

      <CardActions style={{display:"grid"}}>
        <Button size="small" color="primary" disabled={this.state.disabled} onClick={()=> this.disableButton(title, overview, image, voteScore)}>
          Save
        </Button>

        <Button size="small" color="secondary" onClick={()=> removeMovie(id)}>
          Clear
        </Button>

        <Tooltip title={`Popularity: ${voteScore}/10`} placement="bottom">
          <Button size="small" color="primary">
            Popularity
          </Button>
        </Tooltip>

      </CardActions>

    </Card>
  );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);
