import React from 'react';
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
    label: 'Horrors',
    imgPath:
      'http://cdn.shopify.com/s/files/1/1191/7384/products/BEST_HORROR_MOVIES_OF_ALL_TIME_POSTER_COLLAGE_WALL_ART_600x.png?v=1519583532',
  },
  {
    label: 'Romance',
    imgPath:
      'https://fontshop-prod-responsive-images.s3.amazonaws.com/uploads/content_image/attachment/432173/mini_magick20160715-9607-ywmy9b.jpg',
  },
  {
    label: 'Musical',
    imgPath:
      'https://www.billboard.com/files/styles/article_main_image/public/media/soundtracks-650-430.jpg',
  },
  {
    label: 'Action',
    imgPath:
      'https://www.reellifewithjane.com/wp-content/uploads/2015/04/July-2015-Movies-Collage.jpg',
  },
  {
    label: 'Classic',
    imgPath:
      'https://m.media-amazon.com/images/M/MV5BNzYwZTljYWQtN2NjMS00ZmZlLWIzYWUtZmJmZjE1NGU1OWMyXkEyXkFqcGdeQXVyNjUzNDk2Mzk@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
  },
  {
    label: 'Sience Fiction',
    imgPath:
      'https://wondersinthedark.files.wordpress.com/2015/10/science-fiction.jpg',
  }
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
    alignItems: 'center',
    height: 50,
    backgroundColor: "#4190cc",
    paddingLeft: theme.spacing.unit * 4,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableMovieStepper extends React.Component {
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

SwipeableMovieStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableMovieStepper);