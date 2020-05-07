import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import '../styles/Form.scss';

const wfhPrepareQuestion = <div className="question-text"> How long do you normally take between waking up and starting work during lockdown?</div>;

const WfhPrepareTime = ({wfhPrepMinutes, getWfhPrepMinutes}) => {
  return (
  <div className="question-section">
        {wfhPrepareQuestion} 
      <Slider
        value={wfhPrepMinutes}
        onChange={getWfhPrepMinutes}
        step={5}
        min={5}
        max={45}
      />           
    <div>{wfhPrepMinutes} minutes</div> 
    </div>
  );  
};

export default WfhPrepareTime;