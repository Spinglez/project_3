import React, { Component } from 'react'
import Auth from './Auth'

const auth = new Auth()

export class CreateAccount extends Component {
  render() {
    return (
      <div>
          <h1>Please Login or Create an Account</h1>
          <button onClick={auth.login}>Login</button>
      </div>
    )
    }
}

export default CreateAccount;
