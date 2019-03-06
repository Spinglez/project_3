import React, { Component, Fragment } from 'react'
import { Grid, MobileStepper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo';
import appDescription from '../../appDescription.json'

import WelcomePage1 from '../../styles/WelcomeStyles1';
import styled, { ThemeProvider} from 'styled-components';

const theme = {
    navyBlue: "#002744",
    offWhite: "#fafafa",
    lightGrey: "#78909c",
    darkRed: "#b71c1c",
    maxWidth: "960px",
    boxShadow: "0 4px 4px 2px rgba(0,0,0,0.09)",
};

const StyledApp = styled.div `
    background-color: ${props => props.theme.navyBlue};
    flex-flow: column wrap;
    height: 100vh;
    padding: 2rem;
`;

// Everything inside the main container will have maxWidth: 960px 
const Inner = styled.div `
    margin: 0 auto;
    border-radius: 8px;
    max-width: ${props => props.theme.maxWidth}
`;

// Styling for Titles, Description
const H1 = styled.h1`
    color: ${props => props.theme.darkRed};
    text-transform: uppercase;
    font-family: 'Righteous', sans-serif;
    font-size: 2rem;
`;

const H2 = styled.h2`
    color: ${props => props.theme.offWhite};
    letter-spacing: 3px;    
    font-family: 'Cabin Sketch', cursive;
    font-size: 1.4rem;
`;

const P = styled.p`
    color: ${props => props.theme.offWhite};
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
                <StyledApp>
                    <Fragment>
                        <Inner>
                            <Logo />

                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >

                                {/* Thumnails image */}
                            <WelcomePage1/> 

                                {/* Mobile Stepper */}
                            <Grid
                                justify="center"
                                style={{ display: "flex" }}
                            >
                                <MobileStepper
                                // I changed the color to transparent instead of white
                                    style={{ background: "transparent" }}
                                    variant="dots"
                                    steps={5}
                                    className={classes.root}
                                    position="static"
                                    activeStep={this.state.activeStep}
                                />
                            </Grid>

                                {/* Titles */}
                                <H1>{this.state.appInfo[this.state.activeStep].header}</H1>
                                <H2>{this.state.appInfo[this.state.activeStep].description1}</H2>
                                <P>{this.state.appInfo[this.state.activeStep].description2}</P>

                                {/* BACK - NEXT buttons */}
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
                        </Inner>    
                    </Fragment>
                </StyledApp>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(Welcome);
