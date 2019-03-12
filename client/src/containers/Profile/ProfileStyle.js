import styled from 'styled-components';

const Profile = styled.div`
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  padding: 10px;
  font-size: 1rem;
  .icon {
    width: 155px; 
    height: 155px;
    color: #01579b;
    align-self:center;
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