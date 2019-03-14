import styled from 'styled-components';


// Everything inside the main container will have maxWidth: 960px 
const Inner = styled.div `
    margin: 0 auto;
    border-radius: 8px;
    max-width: 960px;
    
    @media only screen and (max-width: 768px){
        padding: 0 10px;
        text-align: center;
    }

`;

export default Inner;