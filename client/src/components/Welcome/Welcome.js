import React, { Component, Fragment } from 'react'
import { Grid, MobileStepper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo';
import appDescription from '../../appDescription.json'

import WelcomPage from '../../styles/WelcomeStyles';
import styled, { ThemeProvider} from 'styled-components';

const theme = {
    navyBlue: "#002744",
    offWhite: "#fafafa",
    lightGrey: "#78909c",
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
`;

const P = styled.p`
    color: ${props => props.theme.offWhite};
`;





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
                        <WelcomPage/> 

                            {/* Mobile Stepper */}
                        <Grid
                            justify="center"
                            style={{ display: "flex" }}
                        >
                            <MobileStepper
                            // I changed the color to transparent instead of white
                                style={{ background: "transparent"}}
                                variant="dots"
                                steps={5}
                                position="static"
                                activeStep={this.state.activeStep}
                            />
                        </Grid>

                            {/* Titles */}
                            <h1>{this.state.appInfo[this.state.activeStep].header}</h1>
                            <h2>{this.state.appInfo[this.state.activeStep].description1}</h2>
                            <P>{this.state.appInfo[this.state.activeStep].description2}</P>

                            {/* BACK - NEXT buttons */}
                            <Button size="small" color="secondary" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                                BACK
                            </Button>

                            { this.state.activeStep < 4 ?
                            <Button size="small" color="primary" onClick={this.handleNext}>
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

export default Welcome
