import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const commuteQuestion = <div className="question-text"> How long is your normal commute travelling to work</div>;

const CommuteTime = ({departCommuteTimeMinutes,  getdepartCommuteTimeMinutes}) => {
  return (
          <div className="question-section">
            {commuteQuestion} 
              <Slider
                value={departCommuteTimeMinutes}
                onChange={getdepartCommuteTimeMinutes}
                step={5}
                min={5}
                max={120}
              />           
            <div> {departCommuteTimeMinutes} minutes</div> 
          </div>
        );  
    };

export default CommuteTime;