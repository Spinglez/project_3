import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';


import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'

// Camera
import {u1F3A5} from 'react-icons-kit/noto_emoji_regular/u1F3A5'

// Tivi
import {u1F4FA} from 'react-icons-kit/noto_emoji_regular/u1F4FA'


// Couple icon
import {u1F491} from 'react-icons-kit/noto_emoji_regular/u1F491'
const SideIconContainer = 
    withBaseIcon({ size: 50, style: {color: '#b71c1c'}})
    export const Couple = () => <SideIconContainer icon={u1F491}/>

const theme = {
    offBlue: "#b3e5fc",
    primaryBlue: "#29b6f6",
    Blue: "#01579b",
    GreyBlue: "#37474f",
    greyBlue: "#50707e",
    lightGrey: "#78909c",
    secondaryRed: "#e53935",
    lightRed: "#ffb2b0",
    offWhite: "#fafafa",
    brown: " #4e342e",
    lightBrown: "#a1887f"
};

const StylePage = styled.div `
    width: 250px;
    height: 240px;
    box-shadow: 0 2px 8px #b2b2b2;
    background-color: blueviolet;
    margin: auto;
    border-radius: 5%;
    padding: 8px;
    background-color: ${props => props.theme.offWhite};
    color: orange;
`;
const Navbar = styled.div `
    width: 100%;
    background-color: ${props => props.theme.GreyBlue};
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
`;

class WelcomeStyle extends Component {
    render() { 
        return (  
            <ThemeProvider theme={theme}>
                <StylePage>
                    <Navbar/>
                    <Container/>
            
                <Content>
                    <div>
                        <Couple />
                        <Footer>MovieKnight.2019</Footer>
                    </div>

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