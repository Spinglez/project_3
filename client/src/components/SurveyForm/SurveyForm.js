import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, MobileStepper, Button, AppBar, Toolbar } from '@material-ui/core';
import { Checkbox, Row, Col } from 'antd';
import surveyData from '../../surveyData.json'

export class SurveyForm extends Component {

    state = {
        step: 0,
        questionSet: surveyData,
        responseSet: [],
        answered: false
    }

    handleNext = () => {
        window.scrollTo(0, 0);
        const { step } = this.state

        this.setState({ step: step + 1 })
    }

    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }


    render() {
        const styles = {
            root: {
                flexGrow: 1,
            },
            grow: {
                flexGrow: 1,
            },
            menuButton: {
                marginLeft: -12,
                marginRight: 20,
            },
        };

        const { classes } = this.props;

        return (
            <Fragment>
                <div className={styles.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={styles.grow}>
                                APP NAME
          </Typography>
                            {/* <Button color="inherit">Login</Button> */}
                        </Toolbar>
                    </AppBar>
                </div>
                <Grid
                    justify="center"
                    style={{ display: "flex" }}
                >
                    <MobileStepper
                        variant="dots"
                        steps={10}
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
                                { this.state.questionSet[this.state.step].question}
                            </Typography>
                        </CardContent>
                    </Card>
                    {
                        this.state.step === 0 &&
                        <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
                            <Row
                            >
                                <Col
                                >
                                <Checkbox value="B">B</Checkbox>
                                <Checkbox value="B">B</Checkbox>
                                <Checkbox value="B">B</Checkbox>
                                </Col>
                                
                            </Row>
                        </Checkbox.Group>
                    }
                    <Button size="small" onClick={this.handleNext} disabled={this.state.step === 10}>
                        Next
                        </Button>
                </Grid>
            </Fragment>
        )
    }
}

export default SurveyForm;
