import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import '../../styles/_form.scss';

const prepareQuestion = <div className="question-text"> How long did it normally take you to get ready and leave for work in the morning?</div>;

const PrepareTime = ({prepareTimeMinutes, getPrepareTimeMinutes}) => {
    return (
    <div className="main-section">
          {prepareQuestion} 
        <Slider
          value={prepareTimeMinutes}
          onChange={getPrepareTimeMinutes}
          step={5}
          min={5}
          max={120}
        />           
      <div>{prepareTimeMinutes} minutes</div> 
      </div>
    );  
  };


export default PrepareTime;