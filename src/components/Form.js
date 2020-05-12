import React, { Component } from 'react';
import Checkbox from './Checkbox';
import DepartCommuteTime from './questions/DepartCommuteTime';
import ReturnCommuteTime from './questions/ReturnCommuteTime';
import PrepareTime from './questions/PrepareTime';
import WfhPrepareTime from './questions/WfhPrepareTime';
import ResultPage from './Result';
import TravelDate from './questions/TravelDate';
import Contact from './Footer';
import { quote,days } from './utils/Constants';
import '../styles/_form.scss';

class Form extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      lockdownDate: new Date(2020, 2, 23),
      departCommuteTimeMinutes: 45,
      returnCommuteTimeMinutes: 45,
      prepareTimeMinutes: 30,
      wfhPrepMinutes: 15,
      checkboxes: days.reduce(
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

  createCheckboxes = () => days.map(this.createCheckbox);

  render() {
    const questions = this.state;
    return (
      <div className="container">   
        <ResultPage 
          departCommuteDuration={questions.departCommuteTimeMinutes}
          returnCommuteDuration={questions.returnCommuteTimeMinutes}
          prepareMinutes={questions.prepareTimeMinutes}
          wPrepareMinutes={questions.wfhPrepMinutes}
          lockdownStartDate={questions.lockdownDate}
          selectedDays={questions.checkboxes}
        />

        <div id="questions" className="calculator">
 
        <DepartCommuteTime departCommuteTimeMinutes={questions.departCommuteTimeMinutes}
          getdepartCommuteTimeMinutes={(departCommuteTimeMinutes) => this.setState({departCommuteTimeMinutes})}
        />
        <ReturnCommuteTime returnCommuteTimeMinutes={questions.returnCommuteTimeMinutes}
          getReturnCommuteTimeMinutes={(returnCommuteTimeMinutes) => this.setState({returnCommuteTimeMinutes})}
        />
        <PrepareTime prepareTimeMinutes={questions.prepareTimeMinutes}
          getPrepareTimeMinutes={(prepareTimeMinutes) => this.setState({prepareTimeMinutes})}
        /> 
        <WfhPrepareTime wfhPrepMinutes={questions.wfhPrepMinutes}
          getWfhPrepMinutes={(wfhPrepMinutes) => this.setState({wfhPrepMinutes})}
        />

        <TravelDate lockdownDate={questions.lockdownDate}
          getLockdownDate={(lockdownDate) => this.setState({lockdownDate})}
        /> 

          <div className="main-section">
            <div className="question-text">What days did you normally commute into work on?</div>
            <div className="checkboxes-container">
              {this.createCheckboxes()}   
            </div>
          </div>
        </div>
        {quote}
      <Contact/>
      </div>
    );
  };
}
export default Form;