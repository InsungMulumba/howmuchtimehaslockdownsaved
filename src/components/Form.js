import React, { Component } from 'react';
import CommuteTime from './commuteTime';
import PrepareTime from './prepareTime';
import WfhPrepareTime from './wfhPrepareTime';
import TravelDate from './travelDate';
import ResultPage from './resultPage';
import Contact from './contact';
import '../styles/Form.scss';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      lockdownDate: new Date(),
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
          <div id="calculator" className="calculator">
            <TravelDate lockdownDate={results.lockdownDate}
            getLockdownDate={(lockdownDate) => this.setState({lockdownDate})}
            /> 
            <div className="date-result container-section"> {results.lockdownDate.toDateString()}</div>

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
       
          <Contact/>

      </div>
    );
  };
}
export default Form;