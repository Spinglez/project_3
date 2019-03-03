import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, MobileStepper, Button } from '@material-ui/core';
import Logo from '../Logo/Logo';

export class SurveyForm extends Component {

    state = {
        step: 0,
        questionSet: ["Question 1", "Question 2", "Question 3", "Question 4"],
        responseSet: [],
    }

    handleNext = () => {
        window.scrollTo(0, 0);
        const { step } = this.state
    
          this.setState({ step: step + 1 })
    } 

    
  render() {

    return (
        <Fragment>
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
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 5}>
                        Next
                        </Button>
                </Grid>
        </Fragment>
    )
  }
}

export default SurveyForm;
