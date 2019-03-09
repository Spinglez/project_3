import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Welcome, SurveyForm, ErrorPage, CreateAccount, Callback, Profile, Results } from './containers/index';
import './App.scss';

// 
//         <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/register" component={CreateAccount} ></Route>
        <Route exact path="/survey" component={SurveyForm}></Route>
        <Route exact path="/callback" component={Callback}></Route>
        <Route exact path="/profile" component={Profile}> </Route>
        <Route exact path="/results" component={Results}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
