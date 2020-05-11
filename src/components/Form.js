
/* eslint-disable no-console */
import React, { Component } from 'react';
import Checkbox from './Checkbox';
import DepartCommuteTime from './departCommuteTime';
import ReturnCommuteTime from './returnCommuteTime';
import PrepareTime from './prepareTime';
import WfhPrepareTime from './wfhPrepareTime';
import ResultPage from './resultPage';
import TravelDate from './travelDate';
import Contact from './contact';
import '../styles/_form.scss';

const OPTIONS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Bank Holidays"];

class Form extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      lockdownDate: new Date(2020, 2, 23),
      departCommuteTimeMinutes: 40,
      returnCommuteTimeMinutes: 40,
      prepareTimeMinutes: 20,
      wfhPrepMinutes: 10,
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: !(option==="Sunday" || option==="Saturday" || option==="Bank Holidays"),
        }),
        {}
      )
    };
  }

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };
  
  createCheckbox = option => (
    <Checkbox
      label={option}
      // eslint-disable-next-line react/destructuring-assignment
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    const results = this.state;
    return (
      <div className="container">   
        <ResultPage 
          departCommuteDuration={results.departCommuteTimeMinutes}
          returnCommuteDuration={results.returnCommuteTimeMinutes}
          prepareMinutes={results.prepareTimeMinutes}
          wPrepareMinutes={results.wfhPrepMinutes}
          lockdownStartDate={results.lockdownDate}
          selectedDays={results.checkboxes}
        />

        <div id="calculator" className="calculator">
 
        <DepartCommuteTime departCommuteTimeMinutes={results.departCommuteTimeMinutes}
          getdepartCommuteTimeMinutes={(departCommuteTimeMinutes) => this.setState({departCommuteTimeMinutes})}
        />
        <ReturnCommuteTime returnCommuteTimeMinutes={results.returnCommuteTimeMinutes}
          getReturnCommuteTimeMinutes={(returnCommuteTimeMinutes) => this.setState({returnCommuteTimeMinutes})}
        />
        <PrepareTime prepareTimeMinutes={results.prepareTimeMinutes}
          getPrepareTimeMinutes={(prepareTimeMinutes) => this.setState({prepareTimeMinutes})}
        /> 
        <WfhPrepareTime wfhPrepMinutes={results.wfhPrepMinutes}
          getWfhPrepMinutes={(wfhPrepMinutes) => this.setState({wfhPrepMinutes})}
        />

        <TravelDate lockdownDate={results.lockdownDate}
          getLockdownDate={(lockdownDate) => this.setState({lockdownDate})}
        /> 

          <div className="question-section">
            <div className="question-text">What days did you normally commute into work on?</div>
            <div className="checkboxes-container">
              {this.createCheckboxes()}   
            </div>
          </div>
        </div>
        <p className="quote"> "It’s not that we have little time, but more that we waste a good deal of it." <br /> Seneca </p>      
      <Contact/>
      </div>
    );
  };
}
export default Form;