import styled from 'styled-components';

const Profile = styled.div`
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  padding: 10px;
  font-size: 1rem;
  .icon {
    width: 155px; 
    height: auto;
    color: #01579b;
    align-self:center;
    
    @media only screen and (max-width: 576px){
       width: 200px;
       height: auto;
       align-self: center;
       margin: 0 auto;
    }
  }
  .iconContainer{
      margin: 0 auto;

      @media only screen and (max-width: 576px){
        padding: 10px;
        background-color: pink;
        text-align: center;
        font-size: 1.2rem;
        align-self: center;
        flex: 1;
      }
  }
  h1{
    color: #b3e5fc;
    font-family: 'Righteous', sans-serif;
  }
  h2{
    font-family: 'Dancing Script', cursive;
    font-size: 1.7rem;
    letter-spacing: 3px;
    font-weight: bold;
  }
  h3{
    color: #002744;
    font-size: 1.6rem;
    font-family: 'Oswald', sans-serif;
  }
  h4, span{
    color:rgba(0, 0, 0, 0.5);;
  }
  span{
    text-transform: uppercase;
  }
  p {
    margin-top: 0;
    margin-bottom: 1em;
    color: #01579b;
  }
  
`;

export default Profile