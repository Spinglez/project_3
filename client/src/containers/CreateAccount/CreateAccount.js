import React, { Component } from 'react';
import { Auth } from '../../components/index'

const auth = new Auth();

class CreateAccount extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to Movie Night!</h1>
        {auth.isAuthenticated() ? (
          <div>
          <h2> You are logged in!</h2>
          <button onClick={() => auth.logout()} className="log-button">
            Log Out
          </button>
          </div>
        ) : (
          <div>
            <h2> Please log in to continue.</h2>
            <button onClick={() => auth.login()} className="log-button">
              Log In
          </button>
          </div>
        )}
      </div>
    )
  }
}

export default CreateAccount;