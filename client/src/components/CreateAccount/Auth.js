import React from 'react'
import auth0 from 'auth0-js';
import { browserRouter } from 'react-router-dom';
require('dotenv').config();



export default class Auth {
    accessToken;
    idToken;
    expiresAt;
  
    auth0 = new auth0.WebAuth({
      domain: 'movienite.auth0.com',
      clientID: 'UQupq0BPYkKOD2rVYC30puOL0Vu1GLtq',
      redirectUri: 'http://localhost:3000/profile',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    constructor() {
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }
  
    login() {
      this.auth0.authorize();
      const atoken = this.getAccessToken();
      const btoken = JSON.stringify(atoken);
      console.log(btoken);

    }


  }