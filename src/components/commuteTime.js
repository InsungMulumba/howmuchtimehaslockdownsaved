import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const commuteQuestion = <div> How long is your normal commute door to door</div>;
// const defaultMinutes = 5;

const CommuteTime = ({commuteTimeMinutes, getCommuteTimeMinutes}) => {
  return (
          <div className="container-section">
            {commuteQuestion} 
              <Slider
                value={commuteTimeMinutes}
                onChange={getCommuteTimeMinutes}
                step={5}
                min={5}
                max={120}
              />           
            <div> {commuteTimeMinutes} minutes</div> 
          </div>
        );  
    };

export default CommuteTime;