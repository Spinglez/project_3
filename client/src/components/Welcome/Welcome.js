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
    text-transform: uppercase;
    font-family: 'Righteous', sans-serif;
    font-size: 2rem;
`;

const H2 = styled.h2`
    letter-spacing: 3px;    
    font-family: 'Cabin Sketch', cursive;
    font-size: 1.4rem;
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
                        <Inner>
                            <Logo activeStep={this.state.activeStep} />
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                            <WelcomePage1 activeStep = {this.state.activeStep}/> 
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
                                <p style={{color: this.state.appInfo[this.state.activeStep].description2Color, fontSize: "20px"}}>{this.state.appInfo[this.state.activeStep].description2}</p>
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
