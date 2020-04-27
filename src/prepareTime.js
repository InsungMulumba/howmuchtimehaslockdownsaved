import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import './styles/Form.scss';

const prepareQuestion = <div> How long did it normally take you to get ready and leave for work in the morning?</div>

class PrepareTime extends Component {
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
              {prepareQuestion} 
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

export default PrepareTime;