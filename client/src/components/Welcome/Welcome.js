import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, MobileStepper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo';
import appDescription from '../../appDescription.json'

const styles = {
    root: {
        maxWidth: 400,
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

        // const { classes, theme } = this.props;

        const styles = theme => ({
            card: {
                maxWidth: 400,
            },
            media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
            },
            actions: {
                display: 'flex',
            },
            expand: {
                transform: 'rotate(0deg)',
                marginLeft: 'auto',
                transition: theme.transitions.create('transform', {
                    duration: theme.transitions.duration.shortest,
                }),
            },
            expandOpen: {
                transform: 'rotate(180deg)',
            }
        });

        return (
            <Fragment>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Logo />
                </Grid>
                <Grid
                    justify="center"
                    style={{ display: "flex" }}
                >
                    <MobileStepper
                        variant="dots"
                        steps={5}
                        position="static"
                        activeStep={this.state.activeStep}
                    />
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Card
                    >
                        <CardHeader></CardHeader>
                        <CardContent>
                            <Typography component="p">
                               ADD IMAGE
                            </Typography>
                        </CardContent>
                    </Card>
                    <h1>{this.state.appInfo[this.state.activeStep].header}</h1>
                    <h2>{this.state.appInfo[this.state.activeStep].description1}</h2>
                    <p>{this.state.appInfo[this.state.activeStep].description2}</p>
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
            </Fragment>
        )
    }
}

export default Welcome
