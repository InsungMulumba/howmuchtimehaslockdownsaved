
/* eslint-disable no-console */
import React, { Component } from 'react';
import Checkbox from './Checkbox';
import DepartCommuteTime from './departCommuteTime';
import ReturnCommuteTime from './returnCommuteTime';
import PrepareTime from './prepareTime';
import WfhPrepareTime from './wfhPrepareTime';
import ResultPage from './resultPage';
import Contact from './contact';
import TravelDate from './travelDate';

import '../styles/Form.scss';

const OPTIONS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
          [option]: !(option==="Sunday" || option==="Saturday"),
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
    // const resultAnchor = <div><a href="#Result" className="anchor-button"> Result</a></div>;
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
 
        <TravelDate lockdownDate={results.lockdownDate}
          getLockdownDate={(lockdownDate) => this.setState({lockdownDate})}
        /> 
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

        <div className="question-section">
          <div className="question-text">What days did you normally travel into work on?</div>
          <div className="checkboxes-container">
            {this.createCheckboxes()}   
          </div>
        </div>

      </div>
            {/* {resultAnchor} */}
       
          <Contact/>

      </div>
    );
  };
}
export default Form;