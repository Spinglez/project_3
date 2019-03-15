import React, { Component, Fragment } from 'react'
import call from '../../utils/call';
import { profileAnalysis } from '../../utils/profileAnalysis';
import { Header, Footer, RingLoader, WrappedEmailForm, SavedMovies } from '../../components/index'
import { Modal, Tabs } from 'antd';
import { Avatar } from '@material-ui/core/';
import { Row, Col } from 'antd';
import surveyData from '../../data/surveyData.json'
import Inner2 from '../../components/Base/Inner2';
import ProfileStyled from '../Profile/ProfileStyle';
import styled from 'styled-components';


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
    currentSection: "profile",
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
      call.getMovies('5c8acd26884ab93ba4cbf8ae')
        .then((res) => {
        this.setState({ dbSavedMovies: res.data })
        console.log('dbSavedMovies data', res.data)
        console.log('this content is set')
        })
      }).then(() => {
        this.setState({ update: true })
      }).catch(err => {
        if (err) console.log(err);
      })
  }
    
    // call.getMovies('5c8436bdb54c7262a4829f8c')
    //   .then((res) => {
    //     this.setState({ dbSavedMovies: res.data })
    //     console.log('dbSavedMovies data', res.data)
    //     console.log('this content is set')
    //   })
    //   .then(() => {
    //     this.setState({ update: true })
    //     console.log('this has set state as update to true');
    //   }).catch(err => {
    //     if (err) console.log(err);
    //   })
  // }

  // componentWillUnmount() {
  //   this.setState({ update: false })
  // }

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
        <div>
          <p>Nice to see you today. Welcome to movieNite!</p>
          <p>This is your profile page, consider it your movieNite Hub.</p>
        </div>
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
    return (
      <Fragment>
        <Header />
        {this.state.update &&
          <Fragment>
          {this.state.firstTime === true &&
            this.info()
          }
          { this.state.update &&
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={`${this.state.dbData.data.firstName}'s Profile`} key="1">

              <ProfileStyled>
                <Inner2>
                    <Row>
                      <Col xs={11} sm={8} md={5} lg={4}>

                        <Avatar style={{ width: 130, height: 130}}>
                              <img className="imgAvatar" src={this.state.dbData.data.image} alt={this.state.dbData.data.firstName}></img>
                        </Avatar>
                      </Col>
                      <Col xs={12} sm={12} md={10}>
                        <h1>{this.state.dbData.data.firstName}</h1>
                      </Col>
                    </Row>

                  <hr/>

                    <Row gutter={48}>
                        <Col sm={24} md={6} lg={5}>
                          <Fragment className="iconContainer">

                            {
                              profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0] === "Lover of Darkness" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={u1F480}/>
                              </div>
                            }

                            {
                              profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0] === "Studious Viewer" &&
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
                              profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0] === "Futuristic" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={empire}/>
                              </div>
                            }

                            {
                              profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0] === "Entertainee" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={u1F601}/>
                              </div>
                            }

                            {
                              profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0] === "Hopeless Romantic" &&
                              <div className="icon">
                                <Icon size={'100%'} icon={u1F48F}/>
                              </div>
                            }

                          </Fragment>
                        </Col>
                        <Col sm={24} md={17} lg={18}>
                          <div className="personasContainer">
                            <div>
                              <h2>{profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0]}</h2>
                                <span>Your Movie Persona</span>
                            </div>
                            <br/>
                            <p>{profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[1]}</p>
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
                </Inner2>
              </ProfileStyled>
            </TabPane>

                {/* -------------------------------------------------EMAIL TAB---------------------------------------------------------- */}
                <TabPane tab="Find Your Match" key="2">
                  <ProfileStyled>
                      <Inner2>
                          <h3>{`Hey ${this.state.dbData.data.firstName}, who's your date tonight?`}</h3>

                            <WrappedEmailForm
                              clearSubmit={this.clearSubmit}
                              dbData={this.state.dbData}
                              friendEmail={this.state.friendEmail}
                              handleInputChange={this.handleInputChange}
                              matchedmovies={this.state.matchedmovies}
                              handlePost={this.handlePost}/>

                            {this.state.submitStatus === true &&
                                <Fragment>
                                  <p>We're looking for your matches, please wait!</p>
                                  <RingLoader />
                                </Fragment>
                              }
                      </Inner2>
                  </ProfileStyled>
                </TabPane>
              {/* -------------------------------------------------SAVED MOVIES TAB---------------------------------------------------------- */}
              <TabPane tab="Your Saved Movies" key="3">
                  <ProfileStyled >
                      <Inner2> 
                        <h2>{`${this.state.dbData.data.firstName}'s Saved Movies`}</h2>

                        {/* Place a conditional/ternary operation to show a message like "Match with friends to get movies to save!" if no saved movies exist? */}
                              <PosterDiv>
                                <SavedMovies 
                                  data={this.state.dbSavedMovies}
                                />
                              </PosterDiv>

                        {this.state.submitStatus === true &&
                          <Fragment>
                            <p>Loading your saved movies, please wait!</p>
                            <RingLoader />
                          </Fragment>
                        }
                      </Inner2>
                  </ProfileStyled>
                </TabPane>
            </Tabs>
          }
          </Fragment>

        }

        {
          this.state.update === false &&
          <Fragment>
            <Inner2>
              <ProfileStyled>
                <h3>Please wait while we load your profile page, thanks for your patience!</h3>
                <RingLoader />
              </ProfileStyled>
            </Inner2>
          </Fragment>
        }
        <Footer style={{position: 'fixed'}}/>
      </Fragment>
    )
  }
}

export default Profile
