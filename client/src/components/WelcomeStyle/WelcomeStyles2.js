import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// ICONs
import { Icon } from 'react-icons-kit'
//Skull
import {u1F47F} from 'react-icons-kit/noto_emoji_regular/u1F47F'
// Hearts
import {u1F497} from 'react-icons-kit/noto_emoji_regular/u1F497'

const theme = {
    navyBlue:"#002744",
    offBlue: "#b3e5fc",
    lightGrey: "#78909c",
    greyBlueDark: "#37474f",
    yellow: "#f7bb38",
    
};

const StylePage = styled.div `
    width: 250px;
    height: 240px;
    box-shadow: 0 2px 8px #b2b2b2;
    margin: auto;
    border-radius: 5%;
    padding: 8px;
    background-color: ${props => props.theme.navyBlue};
`;

// ---------------------------------------------------------------
const ContDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 5px auto;
`;

const Container1 = styled.div `
    background-color: ${props => props.theme.offWhite};
    width: 90px;
    height: 110px;
    border-radius: 5%;
    margin: 10px auto;
`;

const Container2 = styled.div `
    background-color: ${props => props.theme.offBlue};
    width: 90px;
    height: 110px;
    border-radius: 5%;
    margin: 10px auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
`;
// ------------------------------------------------------------------

// ---------------------------------------
const Content = styled.div `
    display: flex;
    justify-content: space-around;
`;

const DotDiv = styled.div `
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    margin-top: 18px;
`;

const Dot = styled.div `
    width: 18px;
    height: 18px;
    background-color: #f7bb38;
    border-radius: 5%;
    margin: 2px 2px;
`;
// ----------------------------------------

class CustomCard2 extends Component {
    render() { 
        return (  
            <ThemeProvider theme={theme}>
                <StylePage>
                    
                    <ContDiv>
                        <Container1>
                            <div style={{
                                width: 55, 
                                height: 55,
                                color: "#37474f"
                                }}>
                                <Icon size={'100%'} icon={u1F47F}/>
                            </div>
                        </Container1>

                        <Container2>
                            <div style={{
                                width: 45, 
                                height: 45,
                                color: "#b71c1c",
                                }}>
                                <Icon size={'100%'} icon={u1F497}/>
                            </div>
                        </Container2>
                    </ContDiv>
            
                    <Content>
                            <DotDiv>
                                <Dot/>
                                <Dot/>
                                <Dot/>
                                <Dot/>
                            </DotDiv>

                            <DotDiv>
                                <Dot/>
                                <Dot/>
                                <Dot/>
                                <Dot/>
                            </DotDiv>
                    </Content>

                </StylePage>
            </ThemeProvider>
        );
    }
}
export default CustomCard2;