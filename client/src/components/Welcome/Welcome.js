import React, { Component, Fragment } from 'react'
import { Grid, MobileStepper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo';
import appDescription from '../../appDescription.json'

import WelcomPage from '../../styles/WelcomeStyles';
import styled, { ThemeProvider} from 'styled-components';

const theme = {
    offBlue: "#b3e5fc",
    primaryBlue: "#29b6f6",
    bgBlue: "#01579b",
    bgGreyBlue: "#263238",
    navyBlue: "#002744",
    bgLightGrey: "#78909c",
    secondaryRed: "#e53935",
    offWhite: "#fafafa",
    lightYellow: "#fff9b5",
    greyBlue: "#345666",
    brown: " #4e342e",
    maxWidth: "960px",
    boxShadow: "0 4px 4px 2px rgba(0,0,0,0.09)",
};

const StyledApp = styled.div `
    background-color: ${props => props.theme.navyBlue};
    flex-flow: column wrap;
    padding: 2rem;
`;

// Everything inside the main container will have maxWidth: 960px 
const Inner = styled.div `
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
    /* background-color: ${props => props.theme.offWhite}; */
    border-radius: 8px;
    /* box-shadow: ${props => props.theme.boxShadow}; */
`;

// const styles = {
//     root: {
//         maxWidth: 400,
//         flexGrow: 1,
//     },
// };


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

        // const { classes, theme } = this.props;

        // const styles = theme => ({
        //     card: {
        //         maxWidth: 400,
        //     },
        //     media: {
        //         height: 0,
        //         paddingTop: '56.25%', // 16:9
        //     },
        //     actions: {
        //         display: 'flex',
        //     },
        //     expand: {
        //         transform: 'rotate(0deg)',
        //         marginLeft: 'auto',
        //         transition: theme.transitions.create('transform', {
        //             duration: theme.transitions.duration.shortest,
        //         }),
        //     },
        //     expandOpen: {
        //         transform: 'rotate(180deg)',
        //     }
        // });

        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <Fragment>
                        <Logo />
                        <Inner>
                        {/* <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        > 
                        </Grid> */}

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
                            <p>{this.state.appInfo[this.state.activeStep].description2}</p>

                            {/* BACK - NEXT buttons */}
                            <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                                BACK
                            </Button>

                            { this.state.activeStep < 4 ?
                            <Button size="small" onClick={this.handleNext}>
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

export default Welcome;
