import React, { Component, Fragment } from 'react'
import call from '../../utils/call';
import { profileAnalysis } from '../../utils/profileAnalysis';
import { Header, RingLoader, WrappedEmailForm } from '../../components/index'
import { Modal, Tabs } from 'antd';
import { Avatar } from '@material-ui/core/';
import { Row, Col } from 'antd';
import surveyData from '../../data/surveyData.json'
import Inner2 from '../../components/Base/Inner2';
import ProfileStyled from '../Profile/ProfileStyle';
import { Icon } from 'react-icons-kit'
// Profile Example
import {ic_mood} from 'react-icons-kit/md/ic_mood'
// Lover of Darkness
import {u1F480} from 'react-icons-kit/noto_emoji_regular/u1F480'
// Studious Viewer
import {u1F4F0} from 'react-icons-kit/noto_emoji_regular/u1F4F0'
// Action Seeker
import {u1F52B} from 'react-icons-kit/noto_emoji_regular/u1F52B'
// Futuristic
import {empire} from 'react-icons-kit/fa/empire'
// Entertainee
import {u1F601} from 'react-icons-kit/noto_emoji_regular/u1F601'
// Hopeless Romantic
import {u1F48F} from 'react-icons-kit/noto_emoji_regular/u1F48F'



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
      }).then(() => {
        this.setState({ update: true })
      }).catch(err => {
        if (err) console.log(err);
      })

    // this call gets saved movies based on the user and populates the dbSavedMovies array
    // using hardcoded user id for now
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
  }

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
          <p>Nice to see you today. Welcome to MovieKnight.</p>
          <p>This is your profile page, consider it your MovieKnight Hub.</p>
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
                      <Col xs={7} sm={3} md={2} lg={2}>

                        <Avatar style={{ width: 60, height: 60}}>
                          <div style={{
                              width: 55,
                              height: 55,
                              color: "#fafafa",
                              alignSelf:"center"
                              }}>
                              <Icon size={'100%'} icon={ic_mood}/>
                          </div>
                        </Avatar>
                      </Col>
                      <Col xs={12} sm={10} md={8}>
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
                              <div className="icon">
                                <Icon size={'100%'} icon={u1F52B}/>
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
                            <h3>{profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0]}</h3>
                              <span>Your Movie Persona</span>
                          </div>
                          <br/>
                          <p>{profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[1]}</p>
                        </div>
                        </Col>
                    </Row>

                  <Fragment>
                        <hr/>
                        <h3 style={{textAlign: "center"}}>Your Movie Attributes</h3>
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
                          <h2>{`Hey ${this.state.dbData.data.firstName}, who's your date tonight?`}</h2>

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
    </Fragment>
    )
  }
}

export default Profile
