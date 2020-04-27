import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import CommuteTime from './commuteTime';
import PrepareTime from './prepareTime';
import WfhPrepareTime from './wfhPrepareTime';
import './styles/Form.scss';


const travellingQuestion = <div> On which day did you stop travelling to work?</div> 
class Form extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render()
  {
    return (
      <div className="container">
          
          <div className="question-section">
            {travellingQuestion}
            <DatePicker
              onChange={this.onChange}
              value={this.state.date}
              calendarIcon={null}
            />
          </div>
          
          <CommuteTime/>
          <PrepareTime/> 
          <WfhPrepareTime/>
      </div>
    );
  }
}

export default Form;