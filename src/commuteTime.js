import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import './styles/Form.scss';

const commuteQuestion = <div> How long is your normal commute door to door</div>

class CommuteTime extends Component {
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
            {commuteQuestion} 
            <Slider
              value={this.state.value}
              onChange={this.onSliderChange}
              onAfterChange={this.onAfterChange} />           
            <div> {this.state.value} minutes</div> 
          </div>
        )  
    }
}

export default CommuteTime;