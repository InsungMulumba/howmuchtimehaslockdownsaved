import React, { Component } from 'react';
import CommuteTime from './commuteTime';
import PrepareTime from './prepareTime';
import WfhPrepareTime from './wfhPrepareTime';
import TravelDate from './travelDate';
import ResultPage from './resultPage';
import '../styles/Form.scss';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {numberOfWorkingDays: 0};
    this.state = {commuteTimeMinutes: 5};
  }

  render() {
    const results = this.state;
    return (
      <div className="container">       
          <TravelDate numberOfDays={results.numberOfWorkingDays}/>
          <CommuteTime commuteTimeMinutes={results.commuteTimeMinutes}
            getCommuteTimeMinutes={(commuteTimeMinutes) => this.setState({commuteTimeMinutes})}/>
          <PrepareTime/> 
          <WfhPrepareTime/>
          RESULTS
          
          <ResultPage ctMinutes={results.commuteTimeMinutes}/>
      </div>
    );
  };
}
export default Form;