import React, { Component, Fragment } from 'react'
import call from '../../utils/call'
import Ringloader from '../RingLoader/loader'


export class Profile extends Component {

  state = {
    user: null,
    dBdata : {},
    email: null,
    update: false
  }

  componentDidMount() {
    call.get('test@gmail.com')
      .then((res) => {
        this.setState({dBdata: res.data})
        console.log('this content is set');
      }).then(()=>{
        this.setState({update : true})
        console.log('this has set state as update to true');
      }).catch(err => {
        if (err) console.log(err);
      })
  }

  componentWillUnmount() {
    this.setState({update: false})
  }

  render() {
    return (
      <div>
        <header>This is a header!</header>
          {this.state.update === true &&
            <Fragment>
              <h1>this is rendered when update is true:</h1>
              <div>
                <p>Welcome! {this.state.dBdata.data.firstName}, it's nice to see you today</p>
              </div>
            </Fragment>
          }
          {this.state.update === false &&
            <Fragment>
              <h1>Please wait while we load your profile page, thanks for your patience!</h1>
              <Ringloader />
            </Fragment>
          }
      </div>
    )
  }
}

export default Profile
