import React,  { Component }  from 'react';
import logo from '../../containers/Welcome/reelLogo.png'; //REEL logo

const logoStyle = {
  width: "35px",
  height: "35px",
}

const StyleDiv = {
  display: "flex",
  flexDirecrion: "row",
  margin: "10px 10px"
}

class Logo extends Component {
    render(){
    return (
      <div style={StyleDiv}>
        <span
        style={{
          fontSize:"30px",
          fontFamily: "'Righteous', sans-serif",
          color: this.props.activeStep !== 3 ? "#fafafa" : "#002744"
          }}>M</span><img style={logoStyle} src={logo} alt="Logo" /><span
        style={{
          fontSize:"30px",
          fontFamily: "'Righteous', sans-serif",
          color: this.props.activeStep !== 3 ? "#fafafa" : "#002744"
          }}>VIE</span>
      </div>
    )
  }
}

export default Logo;
