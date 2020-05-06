import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const commuteQuestion = <div> How long is your normal commute door to door</div>;

const CommuteTime = ({returnCommuteTimeMinutes, getReturnCommuteTimeMinutes}) => {
  return (
          <div className="container-section">
            {commuteQuestion} 
              <Slider
                value={returnCommuteTimeMinutes}
                onChange={getReturnCommuteTimeMinutes}
                step={5}
                min={5}
                max={120}
              />           
            <div> {returnCommuteTimeMinutes} minutes</div> 
          </div>
        );  
    };

export default CommuteTime;