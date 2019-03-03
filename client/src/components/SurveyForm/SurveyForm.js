import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, MobileStepper, Button, AppBar, Toolbar } from '@material-ui/core';
import { Checkbox, Card as AntCard, Row, Col } from 'antd';
import { Image } from 'react-bootstrap'
import surveyData from '../../surveyData.json'


const { Meta } = Card;

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

        const imageStyle = {
            card: {
                maxWidth: 345,
            },
            media: {
                height: 140,
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
                        steps={7}
                        position="static"
                        activeStep={this.state.step}
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
                                {this.state.questionSet[this.state.step].question}
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    {
                        <div style={{ padding: '5px', display: "flex", justifyContent: "center"}}>
                            {
                                this.state.questionSet[this.state.step].answerOptions.map((answerOption, index) => {
                                    console.log(this.state.questionSet[this.state.step].answerOptions[index], this.state.questionSet[this.state.step].image[index])
                                    return (
                                        <AntCard bordered={false} style={{ marginLeft: "5%" }}>
                                            <Image
                                                style={{ maxWidth: "50px" }}
                                                src={this.state.questionSet[this.state.step].image[index]}
                                                title="Contemplative Reptile" />
                                        <div>{answerOption}</div>
                                        </AntCard>
                                    
                                    )
                                })
                            }
                        </div>
                    }
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Button size="small" onClick={this.handleNext} disabled={this.state.step === 10}>
                        Next
                        </Button>
                </Grid>
                
            </Fragment>
        )
    }
}

export default SurveyForm;
