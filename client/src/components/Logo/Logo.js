import React  from 'react';
// import logo from '../Welcome/Logo_Movie.png';
import logo from '../Welcome/reelLogo.png';


const logoStyle = {
  width: "40px",
  height: "40px",

}

const StyleDiv = {
  display: "flex",
  flexDirecrion: "row",
  margin: "10px 10px"
}

const typo = {
  color: "#fafafa",
  fontSize: "30px",
  fontFamily: "'Righteous', sans-serif",
}

const Logo = () => {
    return (
      <div style={StyleDiv}>
        <span style={typo}>M</span><img style={logoStyle} src={logo} alt="Logo" /><span style={typo}>VIE</span>
      </div>
    )
}

export default Logo;
