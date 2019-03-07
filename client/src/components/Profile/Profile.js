import React, { Component } from 'react'
import call from '../../utils/call'

export class Profile extends Component {

  state = {
    user: null,
    dBdata : {},

  }

  componentDidMount() {
    call.get(this.state.email)
      .then((res) => {
        this.setState({dBdata: res.data})
      })
  }

  render() {
    return (
      <div>
        {!this.state.dBdata ?
        <header><h1>Welcome to your Profile page</h1></header>
        :
        <div>Testing</div>
        }
      </div>
    )
  }
}

export default Profile
