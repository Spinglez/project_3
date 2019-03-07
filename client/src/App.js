import React, { Component } from 'react';
import { BrowserRouter , Route, Switch} from "react-router-dom";
import { Welcome, SurveyForm, ErrorPage, CreateAccount, Auth, Callback, Profile } from './components/index';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/register" component={CreateAccount}></Route>
        <Route exact path="/survey" component={SurveyForm}></Route>
        <Route exact path="/callback" component={Callback}></Route>
        <Route exact patgh="/profile" component={Profile}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
