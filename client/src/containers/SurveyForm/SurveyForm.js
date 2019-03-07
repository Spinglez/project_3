import React, { Component, Fragment } from 'react'
import { CardHeader, Grid, MobileStepper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import 'antd/dist/antd.css';
import {  Card as AntCard } from 'antd';
import styled, { ThemeProvider} from 'styled-components';
import surveyData from '../../data/surveyData.json'
import { Header, SurveyCarousel} from '../../components/index'

const themeColor = {
    navyBlue: "#002744",
    offWhite: "#fafafa",
    lightGrey: "#78909c",
    lightBlue: "#b3e5fc",
    maxWidth: "960px",
    boxShadow: "9px 13px 40px -3px rgba(0,0,0,0.51);",
};

const StyledImg = styled.img`
    background-color: ${props => props.theme.lightBlue};
    padding: 8px;
    max-width: 60px;
    border-radius: 50%;
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const StyledCard = styled.div `
    box-shadow: ${props => props.theme.boxShadow};
    margin-top: 5px;
`;

const Typo = styled.p`
    color: ${props => props.theme.lightBlue}; 
    background: ${props => props.theme.lightGrey}; 
    padding: 10px; 
    border-radius: 5px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.2rem;
`;

const StyledDiv = styled.div `
    display: flex; 
    justify-content: center; 
    flex-direction: row; 
    flex-wrap: wrap; 
    flex-flow: row-wrap;
    align-content: flex-end;
`;

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
});

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

    render() {
        const { classes } = this.props;

        return (
            <ThemeProvider theme={themeColor}>
                <Fragment>
                    <Header />
                    <Inner> {/* Max-width: 960px */}

                    {/* Questions */} 
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                    <Fragment>

                        <StyledCard><SurveyCarousel/></StyledCard>  {/* Movie Carousel */}

                            <CardHeader></CardHeader>
                            <Typo component="p" >
                                    {this.state.questionSet[this.state.step].question}
                            </Typo>
                    </Fragment>
                    </Grid>

                       {/* Mobile Stepper */}
                       <Grid
                        justify="center"
                        style={{ display: "flex" }}
                    >
                    <Fragment>
                        <MobileStepper
                            style={{ background: "transparent" }}
                            variant="dots"
                            steps={7}
                            position="static"
                            activeStep={this.state.step}
                        />
                    </Fragment>
                    </Grid>
                        {/* IMAGE CARD */}
                        {
                            <StyledDiv>
                                {
                                    this.state.questionSet[this.state.step].answerOptions.map((answerOption, index) => {
                                        return (
                                            <Button
                                            key={index + "-1"}
                                            >
                                                <AntCard
                                                key={index + "-2"}
                                                className={classes.paper}
                                                data-id ={index} 
                                                bordered={false} 
                                                padding={2}
                                                style={{ marginLeft: "2%", maxWidth: "200px", 
                                                backgroundColor: this.state.setSelectionStatus[index] ? "#78909c" : "white" }}
                                                onClick={() => this.handleSelect(index)}
                                                >
                                                    <StyledImg
                                                        key={index + "-3"}
                                                        src={this.state.questionSet[this.state.step].image[index]}
                                                        title="Contemplative Reptile" />

                                                <div key={index + "-4"}>{answerOption}</div>
                                                </AntCard>
                                            </Button> 
                                        )
                                    })
                                }    
                            </StyledDiv>   
                        }

                        <Grid
                        container
                        display="flex"
                        justify="flex-end"
                        >
                            <Button size="medium" onClick={this.handleBack} disabled={this.state.step === 0}>
                                BACK
                            </Button>
                            <Button size="medium" onClick={this.handleNext} disabled={this.state.step === 10}>
                                Next
                            </Button>
                        </Grid>

                        </Inner>
                </Fragment>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(SurveyForm);
// export default SurveyForm;
