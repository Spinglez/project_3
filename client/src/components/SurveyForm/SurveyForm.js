import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, MobileStepper, Button, AppBar, Toolbar } from '@material-ui/core';
import { Checkbox, Card as AntCard, Row, Col } from 'antd';
import { Image } from 'react-bootstrap'
import surveyData from '../../surveyData.json'


const { Meta } = Card;
var responseSetArray = [];

export class SurveyForm extends Component {

    state = {
        step: 0,
        questionSet: surveyData,
        responseSet: responseSetArray,
        setSelectionStatus: []
    }

    componentDidUpdate(){
        if(this.state.setSelectionStatus.length === 0){
            this.setState({setSelectionStatus: this.populateSelectionStatus()});
        }
    }

    componentDidMount(){
        this.setState({setSelectionStatus: this.populateSelectionStatus()})
    }

    handleBack = () => {
        this.setState(state => ({
          step: state.step - 1,
        }));
      };

    handleNext = () => {
        window.scrollTo(0, 0);
        const { step } = this.state
        responseSetArray.push(this.state.setSelectionStatus);
        console.log(responseSetArray);
        this.setState({responseSet: responseSetArray});
        this.setState({ step: step + 1 })
        this.setState({setSelectionStatus: []})
    }

    handleSelect = (optionIndex) => {
        if(this.state.setSelectionStatus[optionIndex]){
            this.state.setSelectionStatus.splice(optionIndex,1,false)
        }
        else{
            this.state.setSelectionStatus.splice(optionIndex,1,true)
        }
        console.log(this.state.setSelectionStatus)
        console.log("selected at index ", optionIndex)
    }

    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }

    populateSelectionStatus = () => {
        var questionLength = this.state.questionSet[this.state.step].answerOptions.length;
        var boolArray = [];
        for(var i = 0; i < questionLength; i++){
            boolArray.push(false);
        }
        return boolArray;
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
                                    return (
                                        <Button>
                                        <AntCard 
                                        data-id ={index} 
                                        bordered={false} 
                                        style={{ marginLeft: "5%", maxWidth: "200px", 
                                        backgroundColor: this.state.setSelectionStatus[index] ? "green" : "white" }}
                                        onClick={() => this.handleSelect(index)}
                                        >
                                            <Image
                                                style={{ maxWidth: "50px" }}
                                                src={this.state.questionSet[this.state.step].image[index]}
                                                title="Contemplative Reptile" />
                                        <div>{answerOption}</div>
                                        </AntCard>
                                        </Button>
                                    
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
                <Button size="small" onClick={this.handleBack} disabled={this.state.step === 0}>
                        BACK
                    </Button>
                    <Button size="small" onClick={this.handleNext} disabled={this.state.step === 10}>
                        Next
                        </Button>
                </Grid>
                
            </Fragment>
        )
    }
}

export default SurveyForm;
