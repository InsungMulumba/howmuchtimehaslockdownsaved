import React from 'react';
import CommuteTime from './commuteTime';
import PrepareTime from './prepareTime';
import WfhPrepareTime from './wfhPrepareTime';
import TravelDate from './travelDate';
import './styles/Form.scss';


export const Form = () =>
  {
    return (
      <div className="container">       
          <TravelDate/>
          <CommuteTime/>
          <PrepareTime/> 
          <WfhPrepareTime/>
          RESULTS
      </div>
    );
  };

export default Form;