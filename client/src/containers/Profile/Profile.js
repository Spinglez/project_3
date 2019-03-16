import React, { Component, Fragment } from 'react'
import call from '../../utils/call';
import { profileAnalysis } from '../../utils/profileAnalysis';
import { Header, Footer, RingLoader, WrappedEmailForm, SavedMovies, MovieCard } from '../../components/index'
import { Modal, Tabs } from 'antd';
import { Avatar, Grid} from '@material-ui/core/';
import { Row, Col } from 'antd';
import surveyData from '../../data/surveyData.json'
import ProfileInner from '../../components/Base/ProfileInner';
import LoaderInner from '../../components/Base/LoaderInner';
import ProfileStyled from '../Profile/ProfileStyle';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';

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
// import spacing from '@material-ui/core/styles/spacing';



const PosterDiv = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 576px){
      display: block;
    } 
`;



const TabPane = Tabs.TabPane;

export class Profile extends Component {

  state = {
    user: null,
    dbData: {},
    dbSavedMovies: {},
    friendEmail: '',
    submitStatus: false,
    matchedmovies: [],
    update: false,
    currentSection: 1,
    firstTime: true,
  }

  componentDidMount() {
    let user = localStorage.getItem('user_email')
    // this call needs to be updated to local storage email pull. when ready
    call.get(user)
      .then((res) => {
        this.setState({ dbData: res.data })
      }).then(() =>{
      // this call gets saved movies based on the user and populates the dbSavedMovies array
        this.refreshSavedMovies(this.state.dbData.data._id)
      }).then(() => {
        this.setState({ update: true })
      }).catch(err => {
        if (err) console.log(err);
      })
  }


  saveMovie = (title,overview,image,voteScore) => {
    let user =  this.state.dbData.data._id

      const postObj = {
        title:title,
        overview:overview,
        image:image,
        voteScore:voteScore,
        userId: user
      }

      call.postSave(postObj).then((res, err) =>{
        if (err) console.error(err);
        console.log(res);
        this.refreshSavedMovies(this.state.dbData.data._id)
      })
  }

  refreshSavedMovies = (user) => {
    call.getMovies(user)
      .then((res) => {
      this.setState({ dbSavedMovies: res.data })
      console.log('dbSavedMovies data', res.data)
      console.log('this content is set')
      })
  }

  removeMovie = (movieIndex) => {
    console.log(movieIndex)
    let reducedMovieSet = this.state.matchedmovies.data.filter(movie => movie.id != movieIndex);
    console.log(reducedMovieSet)
    this.setState(
      {matchedmovies: {
        data: reducedMovieSet,
        success: true
      }
    })
  }

  handleInputChange = event => {
    let value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handlePost = (data) =>{
    this.setState({ matchedmovies: data, submitStatus: false })
    console.log('state is set again here!');
  }

  clearModal = () =>{
    this.setState({firstTime: false})
  }

  clearSubmit = () => {
    this.setState({
      friendEmail: '',
      submitStatus: true
    });
  }

  callback(key) {
    console.log(key);
  }

  info() {
    Modal.info({
      title: `Hi there ${this.state.dbData.data.firstName}!`,
      content: (
        <ProfileStyled>
          <div>
            <h2>Nice to see you today. Welcome to movieNite!</h2>
            <p>This is your profile page, consider it your movieNite Hub.</p>
          </div>
        </ProfileStyled>
      ),
      onOk() { },
    });
    this.clearModal();
  }

  mapResponses = (surveyObject, index) => {
    let question = surveyObject.question;
    let responseSet = []
    for(let i = 0; i < this.state.dbData.data.movieSurvey[index].length; i++){
      if(this.state.dbData.data.movieSurvey[index][i]){
        responseSet.push(` ${surveyObject.answerOptions[i]}`)
      }
    }
    return [question, responseSet]
  }
  render() {

    const { firstTime ,update, dbData, dbSavedMovies, matchedmovies, friendEmail, submitStatus } = this.state;

    return (
      <Fragment>
        <Header />
        {update &&
          <Fragment>
          {firstTime &&
            this.info()
          }
          {update &&
          <Tabs defaultActiveKey="1" onChange={this.callback}
          tabPosition="left">
            <TabPane tab={`${dbData.data.firstName}'s Profile`} key="1">

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
                              profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0] === "Action Seeker" &&
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
                                  <h5>Question: {`${this.mapResponses(surveyObject, index)[0]}`}</h5>
                                  <span className="youAnswer">You answered</span>
                                  <p className="answer">{`${this.mapResponses(surveyObject, index)[1]}`}</p>
                                </div>
                              )
                            })
                          }
                  </Fragment>
                </ProfileInner>
              </ProfileStyled>
            </TabPane>

                {/* -------------------------------------------------EMAIL TAB---------------------------------------------------------- */}
                <TabPane tab="Find Your Match" key="2">
                  <ProfileStyled>
                      <ProfileInner>
                          <h3>{`Hey ${this.state.dbData.data.firstName}, who's your date tonight?`}</h3>

                            <WrappedEmailForm
                              clearSubmit={this.clearSubmit}
                              dbData={dbData}
                              friendEmail={friendEmail}
                              handleInputChange={this.handleInputChange}
                              matchedmovies={matchedmovies}
                              handlePost={this.handlePost}/>

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
                </TabPane>
              {/* -------------------------------------------------SAVED MOVIES TAB---------------------------------------------------------- */}
              <TabPane tab="Your Saved Movies" key="3">
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


                        {/* { update && dbData.data ?
                        <SavedMovies
                          data={dbSavedMovies}
                          
                        /> :
                        <Fragment>
                          <p>No saved movies yet! Navigate to the <strong>Find Your Match</strong> tab to get your compatible movies</p>
                        </Fragment>
                        }

                        {submitStatus &&
                          <Fragment>
                            <p>Loading your saved movies, please wait!</p>
                            <RingLoader />
                          </Fragment>
                        } */}
                  </ProfileStyled>
                </TabPane>

                {/* -------------------------------------------------MATCH RESULTS TAB---------------------------------------------------------- */}
                <TabPane tab="Recommended Movies" key="4">
                  <Grid container justify="center" style={{display:"flex", marginTop: "3em"}} spacing={16}>
                    {
                      matchedmovies.data ?
                      matchedmovies.data.map((movie, index) => {
                        return (
                          <MovieCard
                          key={movie.id}
                          id={movie.id}
                          saveMovie={this.saveMovie}
                          removeMovie={this.removeMovie}
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
                </TabPane>
            </Tabs>
          }
          </Fragment>

        }

        {
          !update &&
          <Fragment>
              <ProfileStyled>
                <LoaderInner>
                  <h3>Please wait while we load your profile page, thanks for your patience!</h3>
                  <RingLoader />
                </LoaderInner>
              </ProfileStyled>
          </Fragment>
        }
        
        <Footer style={{position: 'fixed', marginBottom: 0}}/>
      </Fragment>

    )

  }
}

export default Profile
