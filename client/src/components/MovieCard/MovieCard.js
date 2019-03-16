import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140,
  },
};

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
        <CardContent key={key}>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
            {title}
          </Typography>
          <Typography component="p" style={{overflowY:"scroll", maxHeight: "100px"}}>
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display:"grid"}}>
        <Button size="small" color="primary" disabled={this.state.disabled} onClick={()=> this.disableButton(title, overview, image, voteScore)}>
          Save
        </Button>
        <Button size="small" color="primary" onClick={()=> removeMovie(id)}>
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
