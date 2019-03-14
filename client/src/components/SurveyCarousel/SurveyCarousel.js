import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import styled from 'styled-components';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const movieSteps = [
    {
      label: 'Blue',
      imgPath:
        'https://thefilmgeekfiles.files.wordpress.com/2013/02/collage-copy.jpg',
    },
  {
    label: 'Romance',
    imgPath:
      'https://fontshop-prod-responsive-images.s3.amazonaws.com/uploads/content_image/attachment/432173/mini_magick20160715-9607-ywmy9b.jpg',
  },
  {
    label: 'Musicals',
    imgPath:
      'https://www.billboard.com/files/styles/article_main_image/public/media/soundtracks-650-430.jpg',
  },
  {
    label: 'Action',
    imgPath:
      'https://www.reellifewithjane.com/wp-content/uploads/2015/04/July-2015-Movies-Collage.jpg',
  },
  {
    label: 'Classics',
    imgPath:
      'https://m.media-amazon.com/images/M/MV5BNzYwZTljYWQtN2NjMS00ZmZlLWIzYWUtZmJmZjE1NGU1OWMyXkEyXkFqcGdeQXVyNjUzNDk2Mzk@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
  },
  {
    label: 'Dramas',
    imgPath:
      'https://cdn.inquisitr.com/wp-content/uploads/2016/12/Missing-Nine-Poster.jpg',
 },
  {
    label: 'Science Fiction',
    imgPath:
      'https://wondersinthedark.files.wordpress.com/2015/10/science-fiction.jpg',
  },
  {
    label: 'Mystery',
    imgPath:
      'http://www.coffeeandcigarettes.co.uk/wp-content/uploads/2017/09/Brimestone.jpg',
  },
  {
    label: 'Hollywood',
    imgPath:
      'https://cdn.thearthunters.com/wp-content/uploads/2011/11/z2011111306.jpg',
  },
  {
    label: 'Horror',
    imgPath:
      'https://i0.wp.com/stephenfollows.com/wp-content/uploads/2017/10/Poster-trope-1-Large-face.png?resize=900%2C382&ssl=1',
  },
  {
    label: 'Women',
    imgPath:
      'http://1.bp.blogspot.com/_FdZturK4Db4/S5w6fSUhfoI/AAAAAAAAATk/mZ5dyEXwGVI/s640/BitchSlapThree.jpg',
  },
  {
    label: 'Anime',
    imgPath:
      'https://ae01.alicdn.com/kf/HTB1IvbbKFXXXXaOXXXXq6xXFXXXw/Naruto-Front-cover-Poster-wallpaper-HD-print-on-silk-Wall-Art-Huge-Wide-Anime-Movie-Posters.jpg_640x640.jpg',
  },
  {
    label: 'Comedy',
    imgPath:
      'https://image.slidesharecdn.com/analysisofafilmposter-171214153732/95/analysis-of-romantic-comedy-film-posters-2-638.jpg?cb=1513265881',
  },
  {
    label: 'Super Heroes',
    imgPath:
      'https://data.whicdn.com/images/32558009/large.jpg',
  },
  {
    label: 'Lasers',
    imgPath:
      'http://venusdvd.net/wp-content/uploads/2016/08/Lazer-Team-2015-DVD-Cover-STK_1.jpg',
  },
  {
    label: 'Thrillers',
    imgPath:
      'http://1.bp.blogspot.com/-b2MaQzEfiZc/UtT_0InXivI/AAAAAAAAAD8/3VQIi0BFDYo/s1600/thriller+film+poster+collage.jpg',
  },
];

const Title = styled.p`
    color: #fafafa;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`;

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: 30,
    backgroundColor: "#4190cc",
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class SurveyCarousel extends Component{
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Title>{movieSteps[activeStep].label}</Title>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {movieSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

      </div>
    );
  }
}

SurveyCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SurveyCarousel);