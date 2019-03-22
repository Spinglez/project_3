import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider } from '@material-ui/core/';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { profileAnalysis } from '../../utils/profileAnalysis';
import ProfileStyled from '../../containers/Profile/ProfileStyle';
import { Avatar, Grid} from '@material-ui/core/';
import { Row, Col } from 'antd';
import surveyData from '../../data/surveyData.json'
import ProfileInner from '../../components/Base/ProfileInner';
import LoaderInner from '../../components/Base/LoaderInner';
import { RingLoader, WrappedEmailForm, SavedMovies, MovieCard, Logo } from '../../components/index';
import { Icon } from 'react-icons-kit'
// Lover of Darkness
import {u1F480} from 'react-icons-kit/noto_emoji_regular/u1F480'
// Studious Viewer
import {u1F4F0} from 'react-icons-kit/noto_emoji_regular/u1F4F0'
// Action Seeker
import Skydiving from '../../containers/Profile/sky-diving.png' 
// Futuristic
import {empire} from 'react-icons-kit/fa/empire'
// Entertainee
import {u1F601} from 'react-icons-kit/noto_emoji_regular/u1F601'
// Hopeless Romantic
import {u1F48F} from 'react-icons-kit/noto_emoji_regular/u1F48F'

const drawerWidth = 240;

const PosterDiv = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 576px){
      display: block;
    } 
`;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });

export class NavDrawer extends Component {

    state = {
        open: false,
        currentTab: "profile"
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
      };

    callback(key) {
        console.log(key);
      }

    changeCurrentTab = (tab) => {
        this.setState({currentTab: tab})
    }
    
      render() {
        const { classes, theme, dbData, dbSavedMovies, matchedmovies, 
            friendEmail,submitStatus, update, saveMovie, refreshSavedMovies, 
            removeMovie, handlePost, handleInputChange, clearSubmit} = this.props;
        const { open, currentTab } = this.state;
    
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
              })}
              style={{backgroundColor: "#002744"}}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Logo />
                <Typography variant="h6" color="inherit" noWrap>
    
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
              { update &&
                [ `${dbData.data.firstName}'s Profile`, 'Find Your Match', 'Your Saved Movies', 'Recommended Movies'].map((text, index) => (
                  <ListItem 
                  button 
                  key={text}
                  onClick={() => this.changeCurrentTab(text)}
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              }
              </List>
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />

            {update && (currentTab === `${dbData.data.firstName}'s Profile` || currentTab === "profile") &&
              <ProfileStyled>
                <ProfileInner>
                    <Row>
                      <Col xs={11} sm={8} md={5} lg={4}>
                        <Avatar style={{ width: 130, height: 130}}>
                              <img className="imgAvatar"src={dbData.data.image} alt={dbData.data.firstName}></img>
                        </Avatar>
                      </Col>
                      <Col xs={12} sm={12} md={10}>
                        <h1>{dbData.data.firstName}</h1>
                      </Col>
                    </Row>

                  <hr/>

                    <Row gutter={48}>
                        <Col sm={24} md={6} lg={5}>
                          <Fragment className="iconContainer">

                            {
                              profileAnalysis.movieType([dbData.data.movieSurvey])[0] === "Lover of Darkness" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={u1F480}/>
                              </div>
                            }

                            {
                              profileAnalysis.movieType([dbData.data.movieSurvey])[0] === "Studious Viewer" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={u1F4F0}/>
                              </div>
                            }

                            {
                              profileAnalysis.movieType([dbData.data.movieSurvey])[0] === "Action Seeker" &&
                              <div>
                                <img className="icon" src={Skydiving} alt="skydiving"/>
                              </div>
                            }

                            {
                              profileAnalysis.movieType([dbData.data.movieSurvey])[0] === "Futuristic" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={empire}/>
                              </div>
                            }

                            {
                              profileAnalysis.movieType([dbData.data.movieSurvey])[0] === "Entertainee" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={u1F601}/>
                              </div>
                            }

                            {
                              profileAnalysis.movieType([dbData.data.movieSurvey])[0] === "Hopeless Romantic" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={u1F48F}/>
                              </div>
                            }

                          </Fragment>
                        </Col>
                        <Col sm={24} md={17} lg={18}>
                          <div className="personasContainer">
                            <div>
                              <h2>{profileAnalysis.movieType([dbData.data.movieSurvey])[0]}</h2>
                                <span>Your Movie Persona</span>
                            </div>
                            <br/>
                            <p>{profileAnalysis.movieType([dbData.data.movieSurvey])[1]}</p>
                          </div>
                        </Col>
                    </Row>

                  <Fragment>
                        <hr/>
                        <h2 style={{textAlign: "center"}}>Your Movie Attributes</h2>
                        <hr/>
                          {
                            surveyData.map((surveyObject, index) => {
                              console.log("INDEX PASSED")
                              return(
                                <div className="movieAttr">
                                  <h5>Question: {`${this.props.mapResponses(surveyObject, index)[0]}`}</h5>
                                  <span className="youAnswer">You answered</span>
                                  <p className="answer">{`${this.props.mapResponses(surveyObject, index)[1]}`}</p>
                                </div>
                              )
                            })
                          }
                  </Fragment>
                </ProfileInner>
              </ProfileStyled>
            }
                {/* -------------------------------------------------EMAIL TAB---------------------------------------------------------- */}
                {update && currentTab === "Find Your Match" &&
                  <ProfileStyled>
                      <ProfileInner>
                          <h3>{`Hey ${dbData.data.firstName}, who's your date tonight?`}</h3>

                            <WrappedEmailForm
                              clearSubmit={clearSubmit}
                              dbData={dbData}
                              friendEmail={friendEmail}
                              handleInputChange={handleInputChange}
                              matchedmovies={matchedmovies}
                              handlePost={handlePost}/>

                            {submitStatus &&
                                <Fragment>
                                  <p>We're looking for your matches, please wait!</p>
                                  <LoaderInner>
                                    <RingLoader />  
                                  </LoaderInner>
                                </Fragment>
                            }
                      </ProfileInner>
                  </ProfileStyled>
                }
              {/* -------------------------------------------------SAVED MOVIES TAB---------------------------------------------------------- */}
              {update && currentTab === "Your Saved Movies" &&
                  <ProfileStyled>
                      <ProfileInner>
                        <h2>{`${dbData.data.firstName}'s Saved Movies`}</h2>

                              <PosterDiv>
                                { update && dbData.data ?
                                <Grid container justify="center" style={{display:"flex", marginTop: "3em"}} spacing={16}>

                                <SavedMovies 
                                  data={dbSavedMovies}
                                /> 
                                </Grid>
                                :
                                <Fragment>
                                  <p>No saved movies yet! Navigate to the <strong>Find Your Match</strong> tab to get your compatible movies</p>
                                </Fragment>
                                }
                              </PosterDiv>

                              {submitStatus &&
                                <Fragment>
                                  <p>Loading your saved movies, please wait!</p>
                                  <LoaderInner>
                                    <RingLoader />
                                  </LoaderInner>
                                </Fragment>
                              }
                      </ProfileInner>
                  </ProfileStyled>
              }
                {/* -------------------------------------------------MATCH RESULTS TAB---------------------------------------------------------- */}
                {update && currentTab === "Recommended Movies" &&
                  <Grid container justify="center" style={{display:"flex", marginTop: "3em"}} spacing={16}>
                    {
                      matchedmovies.data ?
                      matchedmovies.data.map((movie, index) => {
                        return (
                          <MovieCard
                          key={movie.id}
                          id={movie.id}
                          saveMovie={saveMovie}
                          removeMovie={removeMovie}
                          image = {movie.poster_path}
                          adult = {movie.adult}
                          title = {movie.original_title}
                          overview = {movie.overview}
                          popularity = {movie.popularity}
                          releaseDate = {movie.release_date}
                          voteScore = {movie.vote_average}
                          />
                        )
                      })
                      :
                    <ProfileInner>
                      <p>Whoops! No movies? Looks like you might need to check your match's email one more time.</p>
                    </ProfileInner>
                  }
                  </Grid>
                }
            {!update &&
            <Fragment>
              <ProfileStyled>
                <LoaderInner>
                  <h3>Please wait while we load your profile page, thanks for your patience!</h3>
                  <RingLoader />
                </LoaderInner>
              </ProfileStyled>
          </Fragment>
            }
            </main>
          </div>
        
        );
      }
    }
    
    NavDrawer.propTypes = {
      classes: PropTypes.object.isRequired,
      theme: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles, { withTheme: true })(NavDrawer);