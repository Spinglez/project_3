import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Icon } from 'react-icons-kit'
// Location icon
import {location2} from 'react-icons-kit/icomoon/location2'
// Car
import {u1F697} from 'react-icons-kit/noto_emoji_regular/u1F697'


const theme = {
    navyBlue:"#002744",
    lightGrey: "#78909c",
    greyBlueDark: "#37474f",
    darkRed: "#b71c1c"
};

const StylePage = styled.div `
    width: 250px;
    height: 240px;
    box-shadow: 0 2px 8px #b2b2b2;
    background-color: blueviolet;
    margin: auto;
    border-radius: 5%;
    padding: 8px;
    background-color: ${props => props.theme.navyBlue};
    color: orange;
`;


const Container = styled.div `
    background-color: ${props => props.theme.offWhite};
    width: 200px;
    height: 100px;
    border-radius: 5%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
`;

const Footer = styled.div `
    font-size: 10px;
    font-weight: bold;
    color: ${props => props.theme.darkRed};
    display: flex;
    justify-content: center;
`;

class CustomCard3 extends Component {
    render() { 
        return (  
            <ThemeProvider theme={theme}>
                <StylePage>
             
                    <Container>
                            <div style={{
                                width: 45, 
                                height: 45,
                                color: "#37474f",
                                justifyContent: "flex-start",
                                alignSelf: "flex-end",
                                marginBottom: 7,
                                }}>
                                <Icon size={'100%'} icon={location2}/>
                            </div>
                            <div style={{
                                width: 55, 
                                height: 55,
                                color: "#37474f"
                                }}>
                                <Icon size={'100%'} icon={u1F697}/>
                            </div>
                    </Container>
        
                    <Footer>MovieKnight.2019</Footer>
 
                </StylePage>
            </ThemeProvider>
        );
    }
}
export default CustomCard3;