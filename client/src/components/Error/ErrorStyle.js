import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Icon } from 'react-icons-kit'
// Oh no
import {u1F631} from 'react-icons-kit/noto_emoji_regular/u1F631'

const theme = {
    navyBlue:"#002744",
    offWhite: "#fafafa",
    offBlue: "#b3e5fc",
};

const StylePage = styled.div `
    width: 250px;
    height: 230px;
    margin: 15px auto;
    border-bottom: 2px solid #002744;
`;

const ContDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
`;

const Container = styled.div `
    width: 115px;
    height: 110px;
    background-color: ${props => props.theme.navyBlue};
    border-radius: 5%;
    margin: 10px auto;
`;

const P = styled.div`
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.offBlue};
    font-family: 'Righteous', sans-serif
`;

class CustomCard4 extends Component {
    
    render() { 
        return (  
            <ThemeProvider theme={theme}>
                <StylePage>
                    <ContDiv>
                        <Container>
                                <P>404</P>
                        </Container>
                        <Container>
                                <div style={{
                                    color: "#fafafa"
                                    }}>
                                    <Icon size={'100%'} icon={u1F631}/>
                                </div>
                        </Container>
                    </ContDiv>

                </StylePage>
            </ThemeProvider>
        );
    }
}
export default CustomCard4;
