import React, { Component } from 'react';
import styled from 'styled-components';

const StylePage = styled.div `
    width: 250px;
    height: 240px;
    box-shadow: 0 2px 8px #b2b2b2;
    background-color: blueviolet;
    margin: auto;
    border-radius: 5%;
    padding: 8px;
    background-color: blue;
    color: orange;
`;

const Navbar = styled.div `
    width: 100%;
    background-color: yellowgreen;
    height: 40px;
`;

const Container = styled.div `
    background-color: #eee;
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

const Icon = styled.div `
    width: 25px;
    height: 25px;
    background-color: #f7bb38;
    border-radius: 5%;
`;


const ParaA = styled.div `
    width: 100px;
    margin-left: 10px;
    background-color: pink;
    height: 10px;
    border-radius: 5%;
`;

const ParaB = styled.div `
    width: 80px;
    margin-left: 10px;
    background-color: pink;
    height: 10px;
    border-radius: 5%;
    margin-top: 10px;
`;

const ParaC = styled.div `
    width: 100px;
    margin-left: 10px;
    background-color: pink;
    height: 10px;
    border-radius: 5%;
    margin-top: 10px;

`;


class WelcomePage extends Component {

    render() { 
        return (  
            <StylePage>
            <Navbar/>
            <Container/>

            <Content>
                <Icon />
                <div>
                <ParaA/>
                <ParaB/>
                <ParaC/>
                </div>
            </Content>

            </StylePage>
        );
    }
}


export default WelcomePage;