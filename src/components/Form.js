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

    this.state = {
      lockdownDate: new Date(2020, 2, 23),
      commuteTimeMinutes: 40,
      prepareTimeMinutes: 20,
      wfhPrepMinutes: 10
    };
  }

  render() {
    const results = this.state;
    return (
      <div className="container">     
          <ResultPage 
            ctMinutes={results.commuteTimeMinutes}
            prepMinutes={results.prepareTimeMinutes}
            wMinutes={results.wfhPrepMinutes}
            lockdownStartDate={results.lockdownDate}
          />  
          <TravelDate lockdownDate={results.lockdownDate}
          getLockdownDate={(lockdownDate) => this.setState({lockdownDate})}
          /> 
           <div className="date-result question-section"> {results.lockdownDate.toDateString()}</div>

          <CommuteTime commuteTimeMinutes={results.commuteTimeMinutes}
            getCommuteTimeMinutes={(commuteTimeMinutes) => this.setState({commuteTimeMinutes})}
            />
          <PrepareTime prepareTimeMinutes={results.prepareTimeMinutes}
            getPrepareTimeMinutes={(prepareTimeMinutes) => this.setState({prepareTimeMinutes})}
            /> 
          <WfhPrepareTime wfhPrepMinutes={results.wfhPrepMinutes}
            getWfhPrepMinutes={(wfhPrepMinutes) => this.setState({wfhPrepMinutes})}
          />          

      </div>
    );
  };
}
export default Form;