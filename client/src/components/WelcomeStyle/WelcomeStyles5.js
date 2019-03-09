import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// ICONs
import { Icon } from 'react-icons-kit'
// ticket
import {u1F3AB} from 'react-icons-kit/noto_emoji_regular/u1F3AB'
// play
import {play3} from 'react-icons-kit/icomoon/play3'
// people
import {u1F465} from 'react-icons-kit/noto_emoji_regular/u1F465'

const theme = {
    navyBlue:"#002744",
    offBlue: "#b3e5fc",
    lightGrey: "#78909c",
    greyBlueDark: "#37474f",
    green: "#1b5e20",   
};

const StyledDiv = styled.div `
    margin-top: 20px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
`;

const Cont = styled.div `
    width: 250px;
    height: 100px;
    box-shadow: 0 2px 8px #b2b2b2;
    background-color: white;
    margin-top: 15px;
    border-radius: 5%;
    padding: 8px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 576px){
        width: 220px;
        height: 90px;
        padding: 5px;
    }
`;

class CustomCard5 extends Component {
    render() { 
        return (  
            <ThemeProvider theme={theme}>
                <StyledDiv>
                    <Cont>
                    <div 
                        style={{
                            width: 64, 
                            height: 64,
                            color: "#b71c1c",
                            backgroundColor: "#002744",
                            borderRadius: "5px",
                            padding: "5px"
                        }}>
                        <Icon size={'100%'} icon={u1F3AB}/>
                    </div>
                    <div 
                        style={{
                            width: 64, 
                            height: 64,
                            color: "#b71c1c",
                            backgroundColor: "#002744",
                            borderRadius: "5px"
                        }}>
                        <Icon size={'100%'} icon={u1F465}/>
                    </div>
                    </Cont>
                    
                    <Cont>
                    <div 
                        style={{
                            width: 64, 
                            height: 64,
                            color: "#1b5e20"
                        }}>
                        <Icon size={'100%'} icon={play3}/>
                    </div>
                    </Cont>
                </StyledDiv>
      
            </ThemeProvider>
        );
    }
}
export default CustomCard5;