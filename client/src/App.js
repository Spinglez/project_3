import React, { Component, Fragment } from 'react';
import { BrowserRouter , Route, Switch} from "react-router-dom";
import { Welcome, SurveyForm, ErrorPage } from './components/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/survey" component={SurveyForm}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
