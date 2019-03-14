import React, { Component } from 'react';
import { Auth } from '../../components/index';
import Button from '@material-ui/core/Button';
import BgVideo from '../../components/CreateAcc/BgVideo';
import Inner3 from '../../components/Base/Inner3';
import { NavLink } from 'react-router-dom';
const auth = new Auth();

class CreateAccount extends Component {

  render() {
    return (
      <div style={{height: '100vh'}}>
          <BgVideo/>
            <Inner3>
                <h1>Welcome to Movie Knight!</h1>
                {auth.isAuthenticated() ? (
                  <div>
                    <h2> You are already logged in!</h2>
                    <NavLink to="/survey">
                    <Button variant="outlined" color="primary" size="medium" className="Survey-Button">
                      Redo Survey
                    </Button>
                    </NavLink>
                    <NavLink to="/profile">
                    <Button variant="outlined" color="primary" size="medium" className="Profile-Button">
                      Go to Profile
                    </Button>
                    </NavLink>
                    <Button variant="outlined" color="primary" size="medium"onClick={() => auth.logout()} className="log-Button">
                      Log Out
                    </Button>
                  </div>
                ) : (
                  <div>
                    <h2> Please log in to continue.</h2>
                    <Button variant="outlined" color="primary" size="medium" onClick={() => auth.login()} className="log-Button">
                      Log In
                    </Button>
                  </div>
                )}
            </Inner3>
      </div>
    )
  }
}

export default CreateAccount;