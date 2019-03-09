import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Icon } from 'react-icons-kit'
// Calendar icon
import {u1F4C5} from 'react-icons-kit/noto_emoji_regular/u1F4C5'

const theme = {
    navyBlue:"#002744",
    darkRed: "#b71c1c",
    offWhite: "#fafafa"
};

const StylePage = styled.div `
    width: 250px;
    height: 240px;
    box-shadow: 0 2px 8px #b2b2b2;
    margin: 0 auto;
    border-radius: 5%;
    padding: 8px;
    background-color: ${props => props.theme.darkRed};

    @media only screen and (max-width: 576px){
        width: 220px;
        height: 220px;
        margin: 0 auto;
    }
`;

const Container = styled.div `
    background-color: ${props => props.theme.navyBlue};
    width: 200px;
    height: 100px;
    border-radius: 5%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
`;

const Header = styled.p `
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.offWhite};
    display: flex;
    justify-content: center;
`;

class CustomCard4 extends Component {
    render() { 
        return (  
            <ThemeProvider theme={theme}>
                <StylePage>
             
                    <Header>MARCH</Header>
                    
                    <Container>
                            <div style={{
                                width: 170, 
                                height: 170,
                                color: "#fafafa"
                                }}>
                                <Icon size={'100%'} icon={u1F4C5}/>
                            </div>
                    </Container>
        
                </StylePage>
            </ThemeProvider>
        );
    }
}
export default CustomCard4;