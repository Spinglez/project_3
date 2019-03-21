import { config } from './config';
import * as Auth0 from 'auth0-js';
import { Component } from 'react';
import history from '../history'
const jwtdecode = require('jwt-decode')

class Auth extends Component {
  auth0 = new Auth0.WebAuth({
    domain: config.domain,
    clientID: config.clientId,
    redirectUri: config.redirect,
    audience: config.audience,
    responseType: 'id_token token',
    scope: 'openid profile email'
  });

  loginCallback = () => {};
  logoutCallback = () => {};

  // userProfile = null;
  // authFlag = 'isLoggedIn';
  // authStatus = this.isAuthenticated
  //   ? 'init_with_auth_flag'
  //   : 'init_no_auth_flag';
  // idToken = null;
  // idTokenPayload = null;
  // accessToken;

  // localLogin(authResult) {
  //   localStorage.setItem(this.authFlag, true);
  //   this.idToken = authResult.idToken;
  //   localStorage.setItem(this.idToken);
  //   this.userProfile = authResult.idTokenPayload;
  //   localStorage.setItem(this.idTokenPayload);
  //   this.accessToken = authResult.accessToken;
  //   this.loginCallback({ loggedIn: true });

  // }


  // Setting login to true in local storage
  localLogin(){
    localStorage.setItem('isLoggedIn', 'true');
  }

  //Clearing local storage on logout

  localLogout() {
    localStorage.clear();
  }

  //Calling Auth0 for our login prompt, logging them out if we receive an error

  login() {
    this.auth0.authorize();
  }

  // Simple function checking to see if a user is logged in

  isAuthenticated() {
    console.log(localStorage.getItem('isLoggedIn'))
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  //Calling our local logout function and clearing our login values

  logout() {
    this.localLogout();
    this.auth0.logout({
      returnTo: config.logoutUrl,
      clientID: config.clientId
    });
  }


  //Loading our login values into local storage
  
  handleAuthentication() {
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin();
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        let expiresAt = JSON.stringify((authResult.expiresIn) * 1000 + new Date().getTime());
        localStorage.setItem('expires_at', expiresAt);
        const user = jwtdecode(authResult.idToken);
        localStorage.setItem('user_email', user.email);
        localStorage.setItem('user_picture', user.picture);
        localStorage.setItem('user_first', user.given_name);
        localStorage.setItem('user_last', user.family_name);
        history.push('/profile')
            } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

}

export default Auth;