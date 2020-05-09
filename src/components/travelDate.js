import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/Form.scss';

const travellingQuestion = <div className="question-text"> What day did you stop travelling to work?</div>;
const earliestStartOfLockdown = new Date(2020, 0, 1);
const today = new Date();


const TravelDate = ({lockdownDate, getLockdownDate}) => {
  
  // const handleDateChangeRaw = (e) => {
  //   e.preventDefault();
  // };

  return(
    <div className="question-section">
      {travellingQuestion}
      <DatePicker
        onChange={getLockdownDate}
        selected={lockdownDate}
        locale="en-GB"
        // value={lockdownDate}
        // className="calendar"
        // onChangeRaw={handleDateChangeRaw}
        maxDate={today}
        minDate={earliestStartOfLockdown}
      />
       
    </div>
  );
};

export default TravelDate;

