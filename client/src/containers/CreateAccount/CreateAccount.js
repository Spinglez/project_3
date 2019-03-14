import React, { Component } from 'react';
import { Auth } from '../../components/index';
import Button from '@material-ui/core/Button';
import BgVideo from '../../components/CreateAcc/BgVideo';
import CreateAccStyle from './CreateAccStyle';
import { NavLink } from 'react-router-dom';
const auth = new Auth();

class CreateAccount extends Component {

  render() {
    return (
      <div style={{height: '100vh'}}>
          <BgVideo/>
            <CreateAccStyle>
                <h1>Welcome to movieNite!</h1>

                {auth.isAuthenticated() ? (
                  <div>
                    <h2> You are already logged in!</h2>
                    <NavLink to="/survey">
                    <Button variant="contained" color="primary" size="small" className="Survey-Button">
                      Redo Survey
                    </Button>
                    </NavLink>

                    <NavLink to="/profile">
                    <Button variant="contained" size="small" className="Profile-Button">
                      Go to Profile
                    </Button>
                    </NavLink>
                    
                    <Button variant="contained" color="secondary" size="small"onClick={() => auth.logout()} className="log-Button">
                      Log Out
                    </Button>
                  </div>
                ) : (
                  <div>
                    <h2> Please log in to continue.</h2>
                    <Button variant="contained" size="small" onClick={() => auth.login()} className="log-Button">
                      Log In
                    </Button>
                  </div>
                )}
            </CreateAccStyle>
      </div>
    )
  }
}

export default CreateAccount;