// import React from 'react'
// import auth0 from 'auth0-js';
// import { BrowserRouter as history, Redirect } from 'react-router-dom';
// require('dotenv').config();



// export default class Auth {
//     accessToken;
//     idToken;
//     expiresAt;
  
//     auth0 = new auth0.WebAuth({
//       domain: 'movienite.auth0.com',
//       clientID: 'UQupq0BPYkKOD2rVYC30puOL0Vu1GLtq',
//       redirectUri: 'http://localhost:3000/profile',
//       responseType: 'token id_token'
//     });

//     constructor() {
//       this.login = this.login.bind(this);
//       this.logout = this.logout.bind(this);
//       // this.handleAuthentication = this.handleAuthentication.bind(this);
//       this.isAuthenticated = this.isAuthenticated.bind(this);
//       this.getAccessToken = this.getAccessToken.bind(this);
//       this.getIdToken = this.getIdToken.bind(this);
//       this.renewSession = this.renewSession.bind(this);
//     }
  
//     login() {
//       this.auth0.authorize();
//       const atoken = this.getAccessToken();
//       const btoken = JSON.stringify(atoken);
//       console.log(btoken);

//     }

//     getAccessToken() {
//       return this.accessToken;
//     }
  
//     getIdToken() {
//       return this.idToken;
//     }
  
//     setSession(authResult) {
//       // Set isLoggedIn flag in localStorage
//       localStorage.setItem('isLoggedIn', 'true');
  
//       // Set the time that the access token will expire at
//       let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
//       this.accessToken = authResult.accessToken;
//       this.idToken = authResult.idToken;
//       this.expiresAt = expiresAt;
  
//       // navigate to the home route
//     }
  
//     renewSession() {
//       this.auth0.checkSession({}, (err, authResult) => {
//          if (authResult && authResult.accessToken && authResult.idToken) {
//            this.setSession(authResult);
//          } else if (err) {
//            this.logout();
//            console.log(err);
//            alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
//          }
//       });
//     }

//     logout() {
//       // Remove tokens and expiry time
//       this.accessToken = null;
//       this.idToken = null;
//       this.expiresAt = 0;
  
//       // Remove isLoggedIn flag from localStorage
//       localStorage.removeItem('isLoggedIn');
// }

//     isAuthenticated() {
//       // Check whether the current time is past the
//       // access token's expiry time
//       let expiresAt = this.expiresAt;
//       return new Date().getTime() < expiresAt;
//     }
    

//   }