import React from 'react'
import Error from '../../components/Error/ErrorStyle';
import Header from '../../components/Header/Header';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
// the User
import {user} from 'react-icons-kit/icomoon/user'

const P = styled.p`
  color: #002744;
  font-size: 2rem;
  font-family: 'Righteous', sans-serif;

    /* For small screen */
    @media only screen and (max-width: 668px){
        font-size: 1.4rem;
        padding: 0 10px;
        text-align: center;
    }
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorPage = () => {
    return (
      <div>
        <Header/>
        <Error/>

        <DivStyled>
          <P>Oops. The page you are looking for got lost</P>
          
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

        </DivStyled>

      </div>
    )
  }

export default ErrorPage
