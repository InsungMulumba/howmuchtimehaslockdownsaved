/* eslint-disable no-console */

import React from 'react';
import '../styles/Form.scss';

const newMinutes = (oldCommute,oldPrepare,newPrepare) => {
    return ((oldCommute+oldPrepare)-newPrepare);
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
     const dateArray = [];
    let i=0;

    while(i<=gapFromToday)
    {
        const xx = t1+((24*3600*1000)*i);
        const yy = new Date(xx);
        // console.log(yy);
        dateArray.push(`${yy.getFullYear()}-${yy.getMonth()+1}-${yy.getDate()}`);
        i+=1;     
    }
    console.log(dateArray);

    return (gapFromToday);
};

// const calculateNonWorkingDays = (oldD,today) => {
//     // const today = new Date();
//     const startOfLockdown = oldD;
//     let numberOfNonWorkingDays = 0;

//     while(startOfLockdown <= today)
//     {
//         const dayOfWeek = startOfLockdown.getDay();
//         if(
//             dayOfWeek === 6 ||
//             dayOfWeek === 0 ||
//              isBankHoliday(startOfLockdown.getDate,startOfLockdown.getMonth)
//         )
//         {
//             // If it's on the weekend or a bank holiday, it's not a working day
//             numberOfNonWorkingDays +=1;
//         }
//          startOfLockdown.setDate(startOfLockdown.getDate() +1);
//     }
//     return numberOfNonWorkingDays;
// };

// const newCalculateNonWorkingDays = () => {

//     const day = 1000*60*60*24;
//     const date1 = new Date('2013-07-30');
//     const date2 = new Date("2013-08-04");
//     const dateArray = [];

//     const diff = (date2.getTime()- date1.getTime())/day;
//     for(const i=0;i<=diff; i+1)
//     {
//        const xx = date1.getTime()+day*i;
//        const yy = new Date(xx);

//        dateArray.push(`${yy.getFullYear()}-${yy.getMonth()+1}-${yy.getDate()}`);
//     }
//     console.log(dateArray);
// };

function timeConvert(n) {
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${ rhours  } hour(s) and ${  rminutes  } minute(s)`;
};

const ResultPage = ({commuteMinutes,prepareMinutes,wPrepareMinutes,lockdownStartDate}) => {
    const minutesSavedEveryDay = newMinutes(commuteMinutes,prepareMinutes,wPrepareMinutes);
    const today = new Date();
    const lsd = lockdownStartDate;
    const totalTimeSaved = timeConvert((numberOfDays(lsd,today)) * minutesSavedEveryDay);
    // newCalculateNonWorkingDays();

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
                {/* There have been {calculateNonWorkingDays(lsd,today)} non working days */}
                {totalSavings}
            <div />
        </div>
      );
};

export default ResultPage;