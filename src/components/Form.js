import 'react-day-picker/lib/style.css';
import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import CommuteTime from './commuteTime';
import PrepareTime from './prepareTime';
import WfhPrepareTime from './wfhPrepareTime';
// import TravelDate from './travelDate';
import ResultPage from './resultPage';
import Contact from './contact';

import '../styles/Form.scss';


class Form extends Component {
  constructor(props){
    super(props);

    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: new Date(2020, 2, 23),
      // lockdownDate: new Date(),
      commuteTimeMinutes: 40,
      prepareTimeMinutes: 20,
      wfhPrepMinutes: 10
    };
  }

  handleDayClick(day) {
    this.setState({
      selectedDay:day,
    });
  }

  render() {
    const results = this.state;
    return (
      <div className="container">     
          <ResultPage 
            commuteMinutes={results.commuteTimeMinutes}
            prepareMinutes={results.prepareTimeMinutes}
            wPrepareMinutes={results.wfhPrepMinutes}
            lockdownStartDate={results.selectedDay}
          />  
          <div id="calculator" className="calculator">
            {/* <TravelDate lockdownDate={results.lockdownDate}
            getLockdownDate={(lockdownDate) => this.setState({lockdownDate})}
            /> 
            <div className="date-result container-section"> {results.lockdownDate.toDateString()}</div> */}
            <DayPicker
              selectedDays={results.selectedDay}
              onDayClick={this.handleDayClick}
            />
            <p>
              {results.selectedDay.toDateString()}
            </p>

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