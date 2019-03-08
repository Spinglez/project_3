import React from 'react'
import Error from '../../components/Error/ErrorStyle';
import Header from '../../components/Header/Header';

import { Button } from 'antd';
import { Icon } from 'react-icons-kit'
import {u1F3E0} from 'react-icons-kit/noto_emoji_regular/u1F3E0'

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
          <Button title="Click here to go back home" type="primary" size="large"><div style={{
                                width: 30, 
                                height: 30,
                                color: "#fafafa"
                                }}>
                                <Icon size={'100%'} icon={u1F3E0}/>
                            </div></Button>
        </div>

      </div>
    )
  }

export default ErrorPage
