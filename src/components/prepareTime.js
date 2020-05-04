import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import '../styles/Form.scss';

const prepareQuestion = <div> How long did it normally take you to get ready and leave for work in the morning?</div>;

const PrepareTime = ({prepareTimeMinutes, getPrepareTimeMinutes}) => {
    return (
    <div className="question-section">
          {prepareQuestion} 
        <Slider
          value={prepareTimeMinutes}
          onChange={getPrepareTimeMinutes}
          step={5}
          min={5}
          max={60}
        />           
      <div>{prepareTimeMinutes} minutes</div> 
      </div>
    );  
  };


export default PrepareTime;