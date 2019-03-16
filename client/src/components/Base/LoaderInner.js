import styled from 'styled-components';

const LoaderInner = styled.div `
    position: fixed;
    top: 50%;
    left: 50%;
    /* prefixes */
    transform: translate(-50%, -50%);
    background-color: #78909cab;
    border-radius: 10px;
    padding: 2.2rem;
    text-align: center;

    @media only screen and (max-width: 768px){
        padding: 0 10px;
        text-align: center;
    }

`;

export default LoaderInner;