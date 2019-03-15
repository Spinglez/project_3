import React, { Component, Fragment } from 'react'
import { Grid, MobileStepper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import appDescription from '../../data/appDescription.json'
import { Logo, WelcomeStyle1, WelcomeStyle2, WelcomeStyle3, WelcomeStyle4, WelcomeStyle5 }  from '../../components/index';
import styled, { ThemeProvider} from 'styled-components';

import Inner1 from '../../components/Base/Inner1';


const theme = {
    navyBlue: "#002744",
    offWhite: "#fafafa",
    lightGrey: "#78909c",
    darkRed: "#b71c1c",
    maxWidth: "960px",
    boxShadow: "0 4px 4px 2px rgba(0,0,0,0.09)",
};

const StyledApp = styled.div `
    flex-flow: column wrap;
    height: 100vh;
    padding: 2rem;
`;

// Styling for Titles, Description
const H1 = styled.h1`
    text-transform: uppercase;
    font-family: 'Righteous', sans-serif;
    font-size: 2rem;
    -webkit-animation: tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
            @keyframes tracking-in-expand-fwd-top {
                0% {
                    letter-spacing: -0.5em;
                    -webkit-transform: translateZ(-700px) translateY(-500px);
                            transform: translateZ(-700px) translateY(-500px);
                    opacity: 0;
                }
                40% {
                    opacity: 0.6;
                }
                100% {
                    -webkit-transform: translateZ(0) translateY(0);
                            transform: translateZ(0) translateY(0);
                    opacity: 1;
                }
}
    /* For small screen */
    @media only screen and (max-width: 768px){
        font-size: 1.5rem;
    }
`;

const H2 = styled.h2`
    letter-spacing: 3px;    
    font-family: 'Cabin Sketch', cursive;
    font-size: 1.4rem;

    /* For small screen */
    @media only screen and (max-width: 668px){
        font-size: .9rem;
    }
`;

const P = styled.p `
    font-family: 'Dancing Script', cursive;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 2px;

    /* For small screen */
    @media only screen and (max-width: 668px){
        font-size: .6rem;
    }
`;

const styles = {
    root: {
      maxWidth: 900,
      flexGrow: 1,
    },
};

export class Welcome extends Component {
    state = {
        activeStep: 0,
        appInfo: appDescription
    }

    handleNextSurvey = () => {
        window.scrollTo(0, 0);
        const { step } = this.state

        this.setState({ step: step + 1 })
    }

    handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
      };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <StyledApp style={{backgroundColor: this.state.appInfo[this.state.activeStep].backgroundColor}}>
                    <Fragment>
             
                        <Inner1>
                            <Logo activeStep={this.state.activeStep} />
                                <Grid 
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                {
                                    this.state.activeStep === 0 && 
                                    <WelcomeStyle1 activeStep = {this.state.activeStep}/>
                                }
                                {
                                    this.state.activeStep === 1 && 
                                    <WelcomeStyle2 activeStep = {this.state.activeStep}/>
                                }
                                {
                                    this.state.activeStep === 2 && 
                                    <WelcomeStyle3 activeStep = {this.state.activeStep}/>
                                }
                                {
                                    this.state.activeStep === 3 && 
                                    <WelcomeStyle4 activeStep = {this.state.activeStep}/>
                                }
                                {
                                    this.state.activeStep === 4 && 
                                    <WelcomeStyle5 activeStep = {this.state.activeStep}/>
                                }
                            
                            <Grid
                                justify="center"
                                style={{ display: "flex" }}
                            >
                                <MobileStepper
                                    style={{ background: "transparent" }}
                                    variant="dots"
                                    steps={5}
                                    className={classes.root}
                                    position="static"
                                    activeStep={this.state.activeStep}
                                />
                            </Grid>

                                <H1 style={{color: this.state.appInfo[this.state.activeStep].headerColor}}>{this.state.appInfo[this.state.activeStep].header}</H1>
                                <H2 style={{color: this.state.appInfo[this.state.activeStep].description1Color}}>{this.state.appInfo[this.state.activeStep].description1}</H2>
                                <P style={{color: this.state.appInfo[this.state.activeStep].description2Color, fontSize: "20px"}}>{this.state.appInfo[this.state.activeStep].description2}</P>
                                
                                <Button size="medium" color="secondary" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                                    BACK
                                </Button>
                                
                                { this.state.activeStep < 4 ?
                                <Button size="medium" color="primary" onClick={this.handleNext}>
                                    NEXT
                                </Button>
                                    :
                                    <NavLink to= "/register">
                                        <Button size="small" onClick={this.handleNext}>
                                        CREATE ACCOUNT
                                        </Button>
                                    </NavLink>
                                }
                            </Grid>
                        </Inner1>    
                    </Fragment>
                </StyledApp>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(Welcome);
