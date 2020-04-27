import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import './styles/Form.scss';

const wfhPrepareQuestion = <div> How long do you normally take between waking up and starting work during lockdown?</div>

class wfhPrepareTime extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 5,
      };
    }
      onSliderChange = (value) => {
        
        this.setState({
          value,
        });
      };
    render(){
      return (
        <div>
          {wfhPrepareQuestion} 
          <Slider
            value={this.state.value}
            onChange={this.onSliderChange}
            onAfterChange={this.onAfterChange}
        />           
        <div>{this.state.value} minutes</div> 
      </div>
        )  
    }
}

export default wfhPrepareTime;