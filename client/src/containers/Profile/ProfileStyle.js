import styled from 'styled-components';

const Profile = styled.div`
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  padding: 10px;
  font-size: 1.2rem;
  .icon {
    width: 155px; 
    height: auto;
    color: #01579b;
    align-self:center;
    
    @media only screen and (max-width: 768px){
       margin: 0 auto;
       width: 200px;
       height: auto;
       align-self: center;
      }
  }
  

  .personasContainer {
      margin: 0 auto;
      font-size: 1.2rem;

      @media only screen and (max-width: 768px){
        text-align: center;
        align-self: center;
        margin: 0 auto;
      }
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  h1 {
    color: #b3e5fc;
    font-family: 'Righteous', sans-serif;
  }

  h2 {
    font-family: 'Dancing Script', cursive;
    font-size: 1.7rem;
    letter-spacing: 3px;
    font-weight: bold;
  }

  h3 {
    color: #002744;
    font-size: 1.8rem;
    font-family: 'Oswald', sans-serif;
  }

  h4, span {
    color:rgba(0, 0, 0, 0.5);;
  }
  span {
    text-transform: uppercase;
    font-size: 1rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 1em;
    color: #01579b;
  }

  /* Your movie Attribute section */
  .movieAttr{
    display: flex;
    margin-bottom: 10px;
    padding-bottom: 5px;
    font-size: 1.3rem;

    @media only screen and (max-width: 960px){
        font-size: 1.1rem;
    }

    @media only screen and (max-width: 768px){
        font-size: .9rem;
    }  

    @media only screen and (max-width: 576px){
        display: block;
        font-size: 1.2rem;
        text-align: center;
    }

    h5 {
      color: #b3e5fc;
      background: #78909c;
      padding: 5px;
      border-radius: 5px;
      font-family: 'Port Lligat Sans', sans-serif;
      width: 42%;

      @media only screen and (max-width: 576px){
        width: 100%;
      }
    }

    .answer {
      font-family: 'Port Lligat Sans', sans-serif;
      word-spacing: 2px;
      font-weight: bold;
      color:  #01579b;
      border-bottom: 1px dashed #78909c;
      width: 45%;
      text-align: center;

      @media only screen and (max-width: 576px){
        width: 100%;
      }
    }

    .youAnswer{
      text-transform: uppercase;
      text-align: center; 
    }

  }

`;

export default Profile