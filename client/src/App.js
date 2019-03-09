import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Welcome, SurveyForm, ErrorPage, CreateAccount, Auth, Callback, Profile, Results } from './containers/index';
import './App.scss';

const auth = new Auth();

// 
//         <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/register" component={CreateAccount} ></Route>
        <Route exact path="/survey" component={SurveyForm} auth={auth}></Route>
        <Route exact path="/callback" component={Callback} auth={auth}></Route>
        <Route exact path="/profile" component={Profile} auth={auth}> </Route>
        <Route exact path="/results" component={Results} auth={auth}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
