/* eslint-disable no-console */

import React from 'react';
import _ from 'lodash';
import SocialButtons from './SocialButtons';
import '../styles/Form.scss';
import '../styles/Result.scss';

// howmuchtimehaslockdownsaved.herokuapp.com
  
import { getMinutesDifference, getNumberOfDays, timeConvert } from './timeSavedCalculator/index'; 

const ResultPage = ({departCommuteDuration,returnCommuteDuration,prepareMinutes,wPrepareMinutes,lockdownStartDate,selectedDays}) => {
    const minutesSavedEveryDay = getMinutesDifference(departCommuteDuration,returnCommuteDuration,prepareMinutes,wPrepareMinutes);
    const today = new Date();
    const active = _.keys(_.omitBy(selectedDays));
    const totalTimeSaved = timeConvert((getNumberOfDays(lockdownStartDate,today,active)) * minutesSavedEveryDay);

    const dailyStatementPrefix = minutesSavedEveryDay >= 0 ? <span className="statement-prefix">You save</span> :
     <span className="statement-prefix">You lose</span>;

    const cumulativeStatementPrefix = minutesSavedEveryDay >= 0 ? <span className="statement-prefix"> You have saved </span> : <span className="statement-prefix"> You have lost </span>; 


    const dailySavings = <div className="result-statement" id="Result">
                            {dailyStatementPrefix}
                            <span className="result-statistic"> {Math.abs(minutesSavedEveryDay)} minutes</span>
                            <span className="statement-suffix">every working day</span>
                        </div>;

    const totalSavings = <div className="result-statement">
                            {cumulativeStatementPrefix} <span className="result-statistic"> {totalTimeSaved } </span> <span className="statement-suffix"> since start of lockdown</span>
                        </div>;
    return (
        <div className="result question-section">
            {/* <div className="result--sticky"> */}
                {dailySavings}
                {totalSavings}
            {/* </div> */}
            <SocialButtons totalTimeSaved = {totalTimeSaved}/>

        </div>
      );
};

export default ResultPage;