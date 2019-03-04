import React, { Component } from 'react';
import styled from 'styled-components';


import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'

// Couple icon
import {u1F491} from 'react-icons-kit/noto_emoji_regular/u1F491'

// Camera
import {u1F3A5} from 'react-icons-kit/noto_emoji_regular/u1F3A5'

// Tivi
import {u1F4FA} from 'react-icons-kit/noto_emoji_regular/u1F4FA'

//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({ size: 50, style: {color: '#e53935'}})

export const Couple = () => <SideIconContainer icon={u1F491}/>



const StylePage = styled.div `
    width: 250px;
    height: 240px;
    box-shadow: 0 2px 8px #b2b2b2;
    background-color: blueviolet;
    margin: auto;
    border-radius: 5%;
    padding: 8px;
    background-color: #263238;
    color: orange;
`;
const Navbar = styled.div `
    width: 100%;
    background-color: #78909c;
    height: 25px;
    border-radius: 5px;
`;

const Container = styled.div `
    background-color: #29b6f6;
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

// const ParaA = styled.div `
//     width: 40px;
//     margin-left: 5px;
//     background-color: #fff9b5;;
//     height: 40px;
//     border-radius: 5%;
    
// `;
const ParaB = styled.div `
    width: 70px;
    background-color: #fff9b5;;
    height: 3px;
    border-radius: 5%;
`;

const Footer = styled.div `
    font-size: 8px;
    color: #e53935;
`;

const IconDiv = styled.div `
    display: flex;
    flex-direction: row-reverse;
    margin-left: 35px;
    margin-top: 18px;
    color: #78909c;
`;

class WelcomePage extends Component {
    render() { 
        return (  
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
        );
    }
}
export default WelcomePage;