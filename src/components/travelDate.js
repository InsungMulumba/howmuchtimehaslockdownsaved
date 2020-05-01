import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import '../styles/Form.scss';

const travellingQuestion = <div> What day did you stop travelling to work?</div>;

class CommuteTime extends Component {
  constructor(props) {
    super(props);
    this.state =  {date: new Date()};
}

  onChange = date => this.setState({ date })


  // eslint-disable-next-line class-methods-use-this
  // calculateDaysElapsed(datePrint)
  // {
  //     // const travelDate = datePrint;
  //     const currentDate = new Date();
  //     const chosenDate = datePrint;
  //     let gapFromToday = 0;
  //     let numWorkDays = 0;

  //     if(datePrint){
  //       const t2 = currentDate.getTime();
  //       const t1 = chosenDate.getTime();
  //       gapFromToday = Math.round((t2-t1)/(24*3600*1000));
  //       console.log(`gap from Today: ${gapFromToday}`);

  //     }
  //     while(chosenDate < currentDate){
  //       const dayOfWeek = chosenDate.getDay();
  //       if(!(dayOfWeek === 6 || dayOfWeek === 1))
  //       {
  //         numWorkDays +=1;
  //       }
  //       chosenDate.setDate(chosenDate.getDate() + 1);
  //     }
  //     console.log(`number of Work Days: ${numWorkDays}`);
  //     return true;
  // }

    render()
    {
      const travel = this.state;

      return(
        <div className="question-section">
          {travellingQuestion}
          <DatePicker
            onChange={this.onChange}
            value={travel.date}
            calendarIcon={null}
          />
        </div>
      );
    }


    }

export default CommuteTime;