import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Welcome, SurveyForm, ErrorPage, CreateAccount, Callback, Profile, Results } from './containers/index';
import { Auth } from './components/index'
import './App.scss';

// 
//         <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route exact path="/register" component={CreateAccount} ></Route>

          <Route path="/survey" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
                <SurveyForm auth={auth} {...props}/>
              )
          )} />

          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
                <Profile auth={auth} {...props}/>
              )
          )} />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>

          <Route path="/results" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
                <Results auth={auth} {...props} />
              )
            )}/>
              <Route component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter>
        );
      }
    }
    
    export default App;
