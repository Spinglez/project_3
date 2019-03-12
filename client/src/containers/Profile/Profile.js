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
// import Ava from '../../components/Avatar/Avatar';

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
    friendEmail: '',
    submitStatus: false,
    update: false,
    currentSection: "profile",
    firstTime: true,
  }

  componentDidMount() {
    // this call needs to be updated to local storage email pull. when ready
    call.get('test@gmail.com')
      .then((res) => {
        this.setState({ dbData: res.data })
        console.log('this content is set');
      }).then(() => {
        this.setState({ update: true })
        console.log('this has set state as update to true');
      }).catch(err => {
        if (err) console.log(err);
      })
  }

  componentWillUnmount() {
    this.setState({ update: false })
  }

  handleInputChange = event => {
    let value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  clearSubmit = () => {
    this.setState({
      friendEmail: '',
      submitStatus: true,
      firstTime: false
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
  }

  mapResponses = (surveyObject, index) => {
    let question = surveyObject.question;
    let responseSet = []
    for(let i = 0; i < this.state.dbData.data.movieSurvey[index].length; i++){
      responseSet.push(surveyObject.answerOptions[this.state.dbData.data.movieSurvey[index][i]])
    }
    
    return [question, responseSet]
  }


  render() {
    return (
      <Fragment>
        <Header />

        {this.state.update === true &&
          <Fragment>
          {this.state.firstTime &&
            this.info()
          }
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={`${this.state.dbData.data.firstName}'s Profile`} key="1">

              <ProfileStyled>
                <Inner2>
                  <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                    {/* <Ava/> */}
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
                    <h1>{this.state.dbData.data.firstName}</h1>
                  </div>

                  <hr/>
                    <Row gutter={48}>
                        <Col xs={20} md={6} lg={5}>
                            
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
                            
                        </Col>
                                  
                        <Col xs={20} md={12} lg={18}>
                          <div>
                            <h3>{profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[0]}</h3>
                              <span>Your Movie Persona</span> 
                          </div>
                          <br/>
                          <p>{profileAnalysis.movieType([this.state.dbData.data.movieSurvey])[1]}</p>
                        </Col>
                    </Row>

                  <Fragment>
                        <hr/>
                        <h3>Your Movie Attributes</h3>
                          { 
                            surveyData.map((surveyObject,index) => {
                              return(
                              <h4> <em>You answered</em> <br/>{`${this.mapResponses(surveyObject, index)[1]} to ${this.mapResponses(surveyObject, index)[0]}`}</h4>
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
                              friendEmail={this.state.friendEmail} />

                              {this.state.submitStatus === true &&
                                <Fragment>
                                  <p>We're looking for your matches, please wait!</p>
                                  <RingLoader />
                                </Fragment>
                              }                           
                      </Inner2>
                  </ProfileStyled>
                </TabPane>
                
{/* 
              <TabPane tab="Find Your Match" key="2">
                <h2>{`Hey ${this.state.dbData.data.firstName}, who's your date tonight?`}</h2>

              <WrappedEmailForm 
                clearSubmit={this.clearSubmit} 
                dbData={this.state.dbData} 
                friendEmail={this.state.friendEmail} />
                {this.state.submitStatus === true &&
                  <Fragment>
                    <p>We're looking for your matches, please wait!</p>
                    <RingLoader />
                  </Fragment>
                  }
                  
              </TabPane> */}
              
            </Tabs>
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
