import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const commuteQuestion = <div> How long is your normal commute door to door</div>;
// const defaultMinutes = 5;

const CommuteTime = ({commuteTimeMinutes, getCommuteTimeMinutes}) => {
  return (
          <div className="question-section">
            {commuteQuestion} 
              <Slider
              value={commuteTimeMinutes}
              onChange={getCommuteTimeMinutes}
              />           
            <div> {commuteTimeMinutes} minutes</div> 
          </div>
        );  
    };

export default CommuteTime;