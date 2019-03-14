import styled from 'styled-components';

// Center div
const Inner3 = styled.div `
    position: fixed;
    top: 50%;
    left: 50%;
    /* prefixes */
    transform: translate(-50%, -50%);
    background-color: #78909cab;
    border-radius: 10px;
    padding: 2.2rem;
    text-align: center;
    
    h1{
        font-family: 'Righteous', sans-serif;
        font-size: 2.2rem;
        color: #002744;

        @media only screen and (max-width: 768px){
            font-size: 1.5rem;
        }

        @media only screen and (max-width: 576px){
            font-size: 1.3rem;
        }
    }

    h2{
        letter-spacing: 1px;
        font-family: 'Port Lligat Sans', sans-serif;
        font-size: 1.4rem;
        color: #fafafa;
        font-weight: bolder;

        @media only screen and (max-width: 768px){
            font-size: .9rem;
        }

        @media only screen and (max-width: 576px){
            font-size: .8rem;
        }
    }

    button{
        margin-right: 7px;

        @media only screen and (max-width: 576px){
            font-size: .4rem;
            margin-bottom: 7px;
        }
    }
`;

export default Inner3;