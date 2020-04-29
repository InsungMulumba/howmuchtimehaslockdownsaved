import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import './styles/Form.scss';

const prepareQuestion = <div> How long did it normally take you to get ready and leave for work in the morning?</div>;

class PrepareTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 5,
    };
  }

  onSliderChange = (minutes) => {     
    this.setState({
      minutes,
    });
  };

  render(){
    const prepare = this.state;
    return (
      <div>
        {prepareQuestion} 
        <Slider
          value={prepare.minutes}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
        />           
      <div>{prepare.minutes} minutes</div> 
      </div>
    );  
  }
}

export default PrepareTime;