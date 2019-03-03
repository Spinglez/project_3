import React, { Component, Fragment } from 'react'

export class SurveyForm extends Component {

    state = {
        step: 0,
        question: 0,
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
        
        </Fragment>
    )
  }
}

export default SurveyForm;
