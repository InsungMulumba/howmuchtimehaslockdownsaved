/* eslint-disable no-console */

import React from 'react';
import '../styles/Form.scss';

const newMinutes = (oldCommuteDepart,oldCommuteReturn,oldPrepare,newPrepare) => {
    return ((oldCommuteDepart+oldCommuteReturn+oldPrepare)-newPrepare);
};

const isBankHoliday = (date,month) => {

    // dates are 0 based, hence why we're checking for May using month === 4
    if(month === 4)
    {
        if(date === 8 || date === 25) { return true; } // May Bank Holiday
    }

    if(month === 3)
    {
        if(date === 13 || date === 10) { return true; } // Easter Bank Holiday              
    }

    return false;
 };

const numberOfDays = (oldD,newD) => {
    const t2 = newD.getTime();
    const t1 = oldD.getTime();
    const gapFromToday = Math.ceil((t2-t1)/(24*3600*1000)+1);
    const dateArray = [];
    let i=0;
    let nwd = 0;

    while(i<=gapFromToday)
    {
        const xx = t1+((24*3600*1000)*i);
        const yy = new Date(xx);
        dateArray.push(`${yy.getFullYear()}-${yy.getMonth()+1}-${yy.getDate()}`);
        if(yy.getDay() === 6 || yy.getDay() === 0 || isBankHoliday(yy.getDate, yy.getMonth)){
            nwd+=1;
        }
        i+=1;     
    }
    console.log(gapFromToday);
    console.log(`${nwd} non working days`);

    return (gapFromToday-nwd);
};


function timeConvert(n) {
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${ Math.abs(rhours)  } hour(s) and ${  rminutes  } minute(s)`;
};

const ResultPage = ({departCommuteDuration,returnCommuteDuration,prepareMinutes,wPrepareMinutes,lockdownStartDate}) => {
    const minutesSavedEveryDay = newMinutes(departCommuteDuration,returnCommuteDuration,prepareMinutes,wPrepareMinutes);
    const today = new Date();
    const totalTimeSaved = timeConvert((numberOfDays(lockdownStartDate,today)) * minutesSavedEveryDay);

    const dailyStatementPrefix = minutesSavedEveryDay >= 0 ? <span className="statement-prefix">You save</span> :
     <span className="statement-prefix">You lose</span>;

    const cumulativeStatementPrefix = minutesSavedEveryDay >= 0 ? <span> You have saved </span> : <span> You have lost </span>; 


    const dailySavings = <div className="result-statement" id="Result">
                            {dailyStatementPrefix}
                            <span className="result-statistic"> {Math.abs(minutesSavedEveryDay)} minutes</span>
                            <span className="statement-suffix">every working day</span>
                        </div>;

    const totalSavings = <div className="result-statement">
                            {cumulativeStatementPrefix} <span className="result-statistic"> {totalTimeSaved } </span>since start of lockdown
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