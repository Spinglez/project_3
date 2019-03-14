import React, { Component, Fragment } from 'react'
import call from '../../utils/call';
import { profileAnalysis } from '../../utils/profileAnalysis';
import { Header, RingLoader, WrappedEmailForm } from '../../components/index'
import { Modal, Tabs } from 'antd';
import { Avatar } from '@material-ui/core/';
import surveyData from '../../data/surveyData.json'

const TabPane = Tabs.TabPane;

export class Profile extends Component {

  state = {
    user: null,
    dbData: {},
    friendEmail: '',
    submitStatus: false,
    update: false,
    currentSection: "profile",
    firstTime: true
  }

  componentDidMount() {
    let user = localStorage.getItem('user_email')
    // this call needs to be updated to local storage email pull. when ready
    call.get(user)
      .then((res) => {
        this.setState({ dbData: res.data })
        console.log(res.data);
        console.log("MOVIE SURVEY STATE",this.state.dbData.data.movieSurvey)
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
      if(this.state.dbData.data.movieSurvey[index][i]){
        responseSet.push(surveyObject.answerOptions[i])
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
          {this.state.firstTime &&
            this.info()
          }
          { this.state.update &&
          <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab={`${this.state.dbData.data.firstName}'s Profile`} key="1">
          <Avatar />
          <h1>{this.state.dbData.data.firstName}</h1>
          <hr></hr>
          <p>{profileAnalysis.movieType(this.state.dbData.data.movieSurvey)[0]}</p>
          <p>Your Movie Persona</p>
          <p>{profileAnalysis.movieType(this.state.dbData.data.movieSurvey)[1]}</p>
          <h1>Your Movie Attributes</h1>
    
          <Fragment>
          { this.state.update &&
            surveyData.map((surveyObject,index) => {
              return(
              <p>{`You answered ${this.mapResponses(surveyObject, index)[1]} to ${this.mapResponses(surveyObject, index)[0]}`}</p>
              )
            })
          }
          </Fragment>
          </TabPane>
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
          </TabPane>
            </Tabs>
          }
          </Fragment>
        }
        {
          this.state.update === false &&
          <Fragment>
            <h1>Please wait while we load your profile page, thanks for your patience!</h1>
            <RingLoader />
          </Fragment>
        }
      </Fragment>
    )
  }
}

export default Profile
