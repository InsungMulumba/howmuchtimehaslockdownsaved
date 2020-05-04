/* eslint-disable no-console */

import React from 'react';
import '../styles/Form.scss';

const newMinutes = (oldM,oldP,newP) => {
    return ((oldM+oldP)-newP);
};

const isBankHoliday = (date,month) => {

    // dates are 0 based, hence why we're checking for May using month === 4
    if(month === 4)
    {
        if(date === 8 || date === 25)
        {
            // May Bank Holiday
            return true;
        }
    }

    if(month === 3)
    {
        if(date === 13 || date === 10)
        {
            // Easter Bank Holiday
            return true;
        }
    }

    return false;
 };
const numberOfDays = (oldD,newD) => {
    const t2 = newD.getTime();
    const t1 = oldD.getTime();
    const gapFromToday = Math.ceil((t2-t1)/(24*3600*1000));
    
    return (gapFromToday);
};

const calculateWorkingDays = (oldD) => {
    const today = new Date();
    const startOfLockdown = oldD;
    let numberOfWorkingDays = numberOfDays(startOfLockdown,today);

    while(startOfLockdown <= today)
    {
        const dayOfWeek = startOfLockdown.getDay();
        if(
            dayOfWeek === 6 ||
            dayOfWeek === 0 || 
            isBankHoliday(startOfLockdown.getDate,startOfLockdown.getMonth)
        )
        {
            // If it's on the weekend or a bank holiday, it's not a working day
            numberOfWorkingDays -=1;
        }
        startOfLockdown.setDate(startOfLockdown.getDate() +1);
    }
    return numberOfWorkingDays;
};

function timeConvert(n) {
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${ rhours  } hour(s) and ${  rminutes  } minute(s)`;

}

const ResultPage = ({ctMinutes,prepMinutes,wMinutes,lockdownStartDate}) => {
    const minutesSavedEveryDay = newMinutes(ctMinutes,prepMinutes,wMinutes);
    const totalTimeSaved = timeConvert(calculateWorkingDays(lockdownStartDate) * minutesSavedEveryDay);
    
    const dailySavings = <div className="result-statement">
                            <span className="statement-prefix">You save</span> 
                            <span className="result-statistic"> {minutesSavedEveryDay} minutes</span> 
                            <span className="statement-suffix">every working day</span> 
                        </div>;
    
    const totalSavings = <div className="result-statement">
                            You have saved <span className="result-statistic"> {totalTimeSaved } </span>since start of lockdown
                        </div>;
    return (   
        <div className="result container-section">     
                {dailySavings}
                {totalSavings}
            <div />
        </div>
      );
};

export default ResultPage;