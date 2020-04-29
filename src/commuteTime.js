import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import './styles/Form.scss';

const commuteQuestion = <div> How long is your normal commute door to door</div>;
const defaultMinutes = 5;

class CommuteTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: defaultMinutes
    };
  }

    onSliderChange = (minutes) => {
      this.setState({
        minutes,
      });
    };

    render(){
      const commute = this.state;
        return (
          <div>
            {commuteQuestion} 
              <Slider
              value={commute.minutes}
              onChange={this.onSliderChange}
              onAfterChange={this.onAfterChange} />           
            <div> {commute.minutes} minutes</div> 
          </div>
        );  
    }
}

export default CommuteTime;