import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, MobileStepper, Button, AppBar, Toolbar } from '@material-ui/core';
import { Checkbox, Card as AntCard, Row, Col } from 'antd';
import { Image } from 'react-bootstrap'
import surveyData from '../../surveyData.json'
import axios from 'axios';

const { Meta } = Card;
var responseSetArray = [];

export class SurveyForm extends Component {

    state = {
        step: 0,
        questionSet: surveyData,
        responseSet: responseSetArray,
        setSelectionStatus: [],
        active: "white"
    }

    componentDidUpdate(prevProps){
        if(this.state.setSelectionStatus.length === 0){
            this.setState({setSelectionStatus: this.populateSelectionStatus()});
        }
    }

    componentDidMount(){
        this.setState({setSelectionStatus: this.populateSelectionStatus()})
    }

    handleBack = () => {
        console.log("populated array after handleback:", responseSetArray)
        this.setState(state => ({
          step: state.step - 1,
        }));
        var prevSelections = responseSetArray[this.state.step-1];
        console.log(this.state.step)
        console.log(prevSelections);
        console.log(responseSetArray)
        this.setState({setSelectionStatus: prevSelections})

      };

    handleNext = () => {
        console.log("populated array after handlenext:", responseSetArray)
        window.scrollTo(0, 0);
        const { step } = this.state

        if(!this.state.responseSet[step]){
            // step response doesnt already exist and we need to push to the array
            responseSetArray.push(this.state.setSelectionStatus);
            // clear the state for next question
            this.setState({setSelectionStatus: []})
        }
  
        // if the next state response exists
        if(this.state.responseSet[step+1]){
            // set that current response state as the 
            this.setState({setSelectionStatus:responseSetArray[step+1]})
        }
        if(!this.state.responseSet[step+1]){
            this.setState({setSelectionStatus: []})
        }
        this.setState({responseSet: responseSetArray});
        this.setState({ step: step + 1 })
    }

    handleSelect = (optionIndex) => {
        if(this.state.setSelectionStatus[optionIndex]){
            var updatedSelect = this.state.setSelectionStatus;
            updatedSelect[optionIndex] = false;
            this.setState({setSelectionStatus: updatedSelect})
        }
        else{
            var updatedSelect = this.state.setSelectionStatus;
            updatedSelect[optionIndex] = true;
            this.setState({setSelectionStatus: updatedSelect})
        }
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

    handleSubmit = () => {
        this.setState({responseSet: responseSetArray});
        axios.post('/api/Users',
        {
            firstName: "Matt",
            lastName: "Wong",
            movieSurvey: this.state.responseSet
        })
        .then((response, error) => {
            if(error) throw error;
            console.log(response.data)
        })
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
                    {
                        this.state.step != 6 ?
                    <Button size="small" onClick={this.handleNext}>
                        NEXT
                        </Button>
                        :
                    <Button size="small" onClick={this.handleSubmit}>
                        GO TO PROFILE
                    </Button>
                    }
                </Grid>
                
            </Fragment>
        )
    }
}

export default SurveyForm;
