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
    padding: 10px;
    text-align: center;
    
    h1{
        text-transform: uppercase;
        font-family: 'Righteous', sans-serif;
        font-size: 2rem;
        font-weight: bold;
        color: #002744;

        @media only screen and (max-width: 768px){
            font-size: 1.5rem;
        }

        @media only screen and (max-width: 576px){
            font-size: 1rem;
        }
    }

    h2{
        letter-spacing: 1px;    
        /* font-family: 'Cabin Sketch', cursive; */
        font-family: 'Port Lligat Sans', sans-serif;
        font-size: 1.4rem;
        color: #fafafa;
        font-weight: bold;

        @media only screen and (max-width: 768px){
            font-size: .9rem;
        }

        @media only screen and (max-width: 576px){
            font-size: .7rem;
        }
    }

    button{
        @media only screen and (max-width: 576px){
            font-size: .5rem;
        }
    }
`;

export default Inner3;