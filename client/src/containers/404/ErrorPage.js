import React from 'react'
import Error from '../../components/Error/ErrorStyle';
import Header from '../../components/Header/Header';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import { Icon } from 'react-icons-kit'
// the User
import {user} from 'react-icons-kit/icomoon/user'


const pStyled = {
  color: "#002744",
  fontSize: "2rem",
  fontFamily: "'Righteous', sans-serif"
}

const divStyled = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const ErrorPage = () => {
    return (
      <div>
        <Header/>
        <Error/>

        <div style={divStyled}>
          <p style={pStyled} >Oops. The page you are looking for got lost</p>
          
          <Tooltip title="Return to Profile page">
            <IconButton aria-label="Profile">
              <div style={{
                  width: 45, 
                  height: 45,
                  color: "#b3e5fc"
              }}>
                  <Icon size={'100%'} icon={user}/>
              </div>
            </IconButton>
          </Tooltip>

        </div>

      </div>
    )
  }

export default ErrorPage
