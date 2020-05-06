import 'react-day-picker/lib/style.css';
import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import DepartCommuteTime from './departCommuteTime';
import ReturnCommuteTime from './returnCommuteTime';
import PrepareTime from './prepareTime';
import WfhPrepareTime from './wfhPrepareTime';
import ResultPage from './resultPage';
import Contact from './contact';
import '../styles/Form.scss';


class Form extends Component {
  constructor(props){
    super(props);

    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: new Date(2020, 2, 23),
      departCommuteTimeMinutes: 40,
      returnCommuteTimeMinutes: 40,
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
    const resultAnchor = <div><a href="#Result" className="anchor-button"> Result</a></div>;
    return (
      <div className="container">     
          <ResultPage 
            departCommuteDuration={results.departCommuteTimeMinutes}
            returnCommuteDuration={results.returnCommuteTimeMinutes}
            prepareMinutes={results.prepareTimeMinutes}
            wPrepareMinutes={results.wfhPrepMinutes}
            lockdownStartDate={results.selectedDay}
          />  
          <div id="calculator" className="calculator">
            <DayPicker
              selectedDays={results.selectedDay}
              onDayClick={this.handleDayClick}
              month={new Date(2020, 2)}
              fromMonth={new Date(2020,1)}
              toMonth={new Date()}       
              disabledDays={[{after: new Date()}]}       
            />
            <p>
              {results.selectedDay.toDateString()}
            </p>

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
          </div>
            {resultAnchor}
       
          <Contact/>

      </div>
    );
  };
}
export default Form;