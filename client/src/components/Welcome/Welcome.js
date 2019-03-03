import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, MobileStepper, Button } from '@material-ui/core';
import Logo from '../Logo/Logo';


const styles = {
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
};


export class Welcome extends Component {
    state = {
        activeStep: 0,
        appInfo: ["This app is awesome", "You can decide what movie to watch", "Take this survey!"]
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
                        steps={6}
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
                               {this.state.appInfo[this.state.activeStep]}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                        Back
          </Button>
                    <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 5}>
                        Next
                        </Button>
                </Grid>
            </Fragment>
        )
    }
}

export default Welcome
