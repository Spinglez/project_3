import React, { Component, Fragment } from 'react'
import call from '../../utils/call';
import { profileAnalysis } from '../../utils/profileAnalysis';
import { Header, RingLoader, WrappedEmailForm } from '../../components/index'
import { Modal, Tabs } from 'antd';
import { Avatar } from '@material-ui/core/';

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


  render() {
    return (
      <Fragment>
      {profileAnalysis.movieType([[5,6,1],[]])}
        <Header />
        {this.state.update === true &&
          <Fragment>
          {this.state.firstTime &&
            this.info()
          }
          <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab={`${this.state.dbData.data.firstName}'s Profile`} key="1">
          <Avatar />
          <h1>{this.state.dbData.data.firstName}</h1>
          <hr></hr>
          <h1>Your Movie Attributes</h1>
          
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
