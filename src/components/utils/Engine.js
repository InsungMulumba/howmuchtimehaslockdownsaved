export const getMinutesDifference = (oldCommuteDepart,oldCommuteReturn,oldPrepare,newPrepare) => {
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

export const getNumberOfDays = (oldD,newD,daysThatTheyDontCommute) => {
    // console.log(daysThatTheyDontCommute);
    const t2 = newD.getTime();
    const t1 = oldD.getTime();
    const gapFromToday = Math.ceil((t2-t1)/(24*3600*1000)+1);
    let i=0;
    let nonWorkingDays = 0;

    while(i<=gapFromToday)
    {
        const dateThatCommutingEnded = t1+((24*3600*1000)*i);
        const dayBeingChecked = new Date(dateThatCommutingEnded);
        const thisDayInText = dayBeingChecked.toLocaleString('en-gb', { weekday:  'long'});
        const isBankHolidayWhereTheyPreviouslyCommuted = (isBankHoliday(dayBeingChecked.getDate(), dayBeingChecked.getMonth())) && daysThatTheyDontCommute.includes("Bank Holidays");

        if(daysThatTheyDontCommute.includes(thisDayInText) || isBankHolidayWhereTheyPreviouslyCommuted)
        {
                nonWorkingDays+=1;
        }
        i+=1;     
    }

    return (gapFromToday-nonWorkingDays);
};


export const timeConvert = (n) => {
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${ Math.abs(rhours)  } hour(s) and ${  rminutes  } minute(s)`;
};

export default {getMinutesDifference, getNumberOfDays, timeConvert};