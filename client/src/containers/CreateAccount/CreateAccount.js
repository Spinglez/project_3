import React, { Component } from 'react';
import Auth from '../../components/Auth/Auth'

const auth = new Auth();

class CreateAccount extends Component {

  constructor(props) {
    super(props);

    auth.loginCallback = this.loggedIn.bind(this);
    auth.logoutCallback = this.loggedOut.bind(this);

    this.state = { loggedIn: false };
  }

  loggedIn() {
    this.setState({ loggedIn: true });
  }

  loggedOut() {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div>
        <h1>This is a profile page</h1>
        {this.state.loggedIn ? (
          <div>
          <h2> You are logged in!</h2>
          <button onClick={() => auth.logout()} className="log-button">
            Log Out
          </button>
          </div>
        ) : (
          <div>
            <h2> Please log in.</h2>
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