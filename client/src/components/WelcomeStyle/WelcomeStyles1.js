import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';


import { Icon } from 'react-icons-kit'
// Camera
import {u1F3A5} from 'react-icons-kit/noto_emoji_regular/u1F3A5'
// Tivi
import {u1F4FA} from 'react-icons-kit/noto_emoji_regular/u1F4FA'
// Couple icon
import {u1F491} from 'react-icons-kit/noto_emoji_regular/u1F491'



const theme = {
    greyBlueDark: "#37474f",
    lightGrey: "#78909c",
    offWhite: "#fafafa",
    brown: "#58352e",
};

const StylePage = styled.div `
    width: 250px;
    height: 240px;
    box-shadow: 0 2px 8px #b2b2b2;
    margin: auto;
    border-radius: 5%;
    padding: 8px;
    background-color: ${props => props.theme.offWhite};
`;

const Navbar = styled.div `
    width: 100%;
    background-color: ${props => props.theme.greyBlueDark};
    height: 25px;
    border-radius: 5px;
`;

const Container = styled.div `
    background-color: ${props => props.theme.lightGrey};
    width: 170px;
    height: 100px;
    border-radius: 5%;
    margin: 10px auto;
`;

const Content = styled.div `
    margin-left: 0px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
`;

const ParaB = styled.div `
    width: 70px;
    background-color: ${props => props.theme.lightGrey};
    height: 2px;
    border-radius: 5%;
`;

const Footer = styled.div `
    font-size: 8px;
    color: ${props => props.theme.lightGrey};
`;

const IconDiv = styled.div `
    display: flex;
    flex-direction: row-reverse;
    margin-left: 35px;
    margin-top: 18px;
    color: ${props => props.theme.brown};

    -webkit-animation: roll-in-right 0.7s ease-out both;
	        animation: roll-in-right 0.7s ease-out both;
    @keyframes roll-in-right {
        0% {
            -webkit-transform: translateX(800px) rotate(540deg);
                    transform: translateX(800px) rotate(540deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0) rotate(0deg);
                    transform: translateX(0) rotate(0deg);
            opacity: 1;
        }
}
`;

const RollInLeft = styled.div`
    -webkit-animation: roll-in-left 0.7s ease-out both;
	animation: roll-in-left 0.7s ease-out both;
    @keyframes roll-in-left {
        0% {
            -webkit-transform: translateX(-800px) rotate(-540deg);
                    transform: translateX(-800px) rotate(-540deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0) rotate(0deg);
                    transform: translateX(0) rotate(0deg);
            opacity: 1;
        }
    }
`;


class WelcomeStyle extends Component {
    render() { 
        return (  
            <ThemeProvider theme={theme}>
                <StylePage>
                    <Navbar/>
                    <Container/>
            
                    <Content>
                            <RollInLeft>
                                    <div style={{
                                        width: 55, 
                                        height: 55,
                                        color: "#b71c1c"
                                        }}>
                                        <Icon size={'100%'} icon={u1F491}/>
                                    </div>
                                <Footer>MovieKnight.2019</Footer>
                            </RollInLeft>

                            <IconDiv>
                                <div style={{
                                    width: 35, 
                                    height: 35,
                                    }}>
                                    <Icon size={'100%'} icon={u1F3A5}/>
                                </div>
                        
                                <div style={{
                                    width: 35, 
                                    height: 35,
                                    }}>
                                    <Icon size={'100%'} icon={u1F4FA}/>
                                    <ParaB/>
                                </div>
                            </IconDiv>

                    </Content>
                </StylePage>
            </ThemeProvider>
        );
    }
}
export default WelcomeStyle;
