import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/_form.scss';

const travellingQuestion = <div className="question-text"> What day did you stop travelling to work?</div>;
const earliestStartOfLockdown = new Date(2020, 0, 1);
const today = new Date();


const TravelDate = ({lockdownDate, getLockdownDate}) => {
  
  return(
    <div className="main-section">
      {travellingQuestion}
      <DatePicker
        onChange={getLockdownDate}
        selected={lockdownDate}
        dateFormat="dd/MM/yyyy"
        maxDate={today}
        minDate={earliestStartOfLockdown}
      />
       
    </div>
  );
};

export default TravelDate;

