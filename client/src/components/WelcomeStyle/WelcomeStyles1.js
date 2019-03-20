import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// ICONs
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
    margin: 0 auto;
    border-radius: 5%;
    padding: 8px;
    background-color: ${props => props.theme.offWhite};

    @media only screen and (max-width: 576px){
        width: 220px;
        height: 220px;
        margin: 0 auto;
    }
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

const BottomLine = styled.div `
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
`;

const PuffInCenter = styled.div`
    -webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
                animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
        @keyframes puff-in-center {
            0% {
                -webkit-transform: scale(2);
                        transform: scale(2);
                -webkit-filter: blur(2px);
                        filter: blur(2px);
                opacity: 0;
            }
            100% {
                -webkit-transform: scale(1);
                        transform: scale(1);
                -webkit-filter: blur(0px);
                        filter: blur(0px);
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
                            <PuffInCenter>
                                    <div style={{
                                        width: 50, 
                                        height: 50,
                                        color: "#b71c1c"
                                        }}>
                                        <Icon size={'100%'} icon={u1F491}/>
                                    </div>
                                <Footer>MovieNite.2019</Footer>
                            </PuffInCenter>

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
                                    <BottomLine/>
                                </div>
                            </IconDiv>

                    </Content>
                </StylePage>
            </ThemeProvider>
        );
    }
}
export default WelcomeStyle;
